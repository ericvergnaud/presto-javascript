var Expression = require("./Expression").Expression;
var InstanceExpression = require("./InstanceExpression").InstanceExpression;
var UnresolvedIdentifier = require("./UnresolvedIdentifier").UnresolvedIdentifier;
var LinkedVariable = require("../runtime/LinkedVariable").LinkedVariable;
var LinkedValue = require("../runtime/LinkedValue").LinkedValue;
var ContainerType = require("../type/ContainerType").ContainerType;
var IntegerType = require("../type/IntegerType").IntegerType;
var DecimalType = require("../type/DecimalType").DecimalType;
var CharacterType = require("../type/CharacterType").CharacterType;
var TextType = require("../type/TextType").TextType;
var BooleanType = require("../type/BooleanType").BooleanType;
var NullType = require("../type/NullType").NullType;
var TypeValue = require("../value/TypeValue").TypeValue;
var NullValue = require("../value/NullValue").NullValue;
var CodeWriter = require("../utils/CodeWriter").CodeWriter;
var SyntaxError = require("../error/SyntaxError").SyntaxError;
var Instance = require("../value/Value").Instance;
var Value = require("../value/Value").Value;
var Variable = require("../runtime/Variable").Variable;
var MatchOp = require("../store/MatchOp").MatchOp;
var BooleanValue = require("../value/BooleanValue").BooleanValue;
var EqOp = require("../grammar/EqOp").EqOp;
var VOWELS = "AEIO"; // sufficient here


function EqualsExpression(left, operator, right) {
    Expression.call(this);
    this.left = left;
    this.operator = operator;
    this.right = right;
    return this;
}

EqualsExpression.prototype = Object.create(Expression.prototype);
EqualsExpression.prototype.constructor = EqualsExpression;

EqualsExpression.prototype.toString = function() {
    return this.left.toString() + " " + this.operator.toString() + " " + this.right.toString();
};


EqualsExpression.prototype.toDialect = function(writer) {
    this.left.toDialect(writer);
    writer.append(" ");
    this.operator.toDialect(writer);
    // make this a AN
    if(this.operator==EqOp.IS_A || this.operator==EqOp.IS_NOT_A) {
        var name = this.right.toString();
        if(VOWELS.indexOf(name.charAt(0))>=0)
            writer.append("n");
    }
    writer.append(" ");
    this.right.toDialect(writer);
};

EqualsExpression.prototype.check = function(context) {
    var lt = this.left.check(context);
    var rt = this.right.check(context);
    return this.checkOperator(context, lt, rt);
};


EqualsExpression.prototype.checkOperator = function(context, lt, rt) {
    if(this.operator==EqOp.CONTAINS || this.operator==EqOp.NOT_CONTAINS) {
        if(lt instanceof ContainerType)
            lt = lt.itemType;
        if(rt instanceof ContainerType)
            rt = rt.itemType;
        if(lt!=TextType.instance || !(rt==TextType.instance || rt==CharacterType.instance))
            throw new SyntaxError("'contains' only operates on textual value!");
    }
    return BooleanType.instance; // can compare all objects
};

EqualsExpression.prototype.interpret = function(context) {
    var lval = this.left.interpret(context) || NullValue.instance;
    var rval = this.right.interpret(context) || NullValue.instance;
    return this.interpretValues(context, lval, rval);
};

EqualsExpression.prototype.interpretValues = function(context, lval, rval) {
    var equal = false;
    switch(this.operator) {
        case EqOp.IS:
            equal = lval==rval;
            break;
        case EqOp.IS_NOT:
            equal = lval!=rval;
            break;
        case EqOp.IS_A:
            equal = this.isA(context,lval,rval);
            break;
        case EqOp.IS_NOT_A:
            equal = !this.isA(context,lval,rval);
            break;
        case EqOp.EQUALS:
            equal = this.areEqual(context,lval,rval);
            break;
        case EqOp.NOT_EQUALS:
            equal = !this.areEqual(context,lval,rval);
            break;
        case EqOp.ROUGHLY:
            equal = this.roughly(context,lval,rval);
            break;
        case EqOp.CONTAINS:
            equal = this.contains(context,lval,rval);
            break;
        case EqOp.NOT_CONTAINS:
            equal = !this.contains(context,lval,rval);
            break;
    }
    return BooleanValue.ValueOf(equal);
};

EqualsExpression.prototype.contains = function(context, lval, rval) {
    if(lval!=null && rval!=null && lval.Contains) {
        return lval.Contains(context, rval);
    } else {
        return false;
    }
};


EqualsExpression.prototype.roughly = function(context, lval, rval) {
    if(lval!=null && rval!=null && lval.Roughly) {
        return lval.Roughly(context, rval);
    } else {
        return this.areEqual(context, lval, rval);
    }
};

EqualsExpression.prototype.areEqual = function(context, lval, rval) {
    if(lval==rval) {
        return true;
    } else if(lval==NullValue.instance || rval==NullValue.instance) {
        return false;
    } else {
        return lval.equals(rval);
    }
};

EqualsExpression.prototype.isA = function(context, lval, rval) {
    if(lval instanceof Value && rval instanceof TypeValue) {
        var actual = lval.type;
        if(actual === NullType.instance)
            return false;
        var toCheck = rval.value;
        return toCheck.isAssignableFrom(context, actual);
    } else
        return false;
};


EqualsExpression.prototype.downCast = function(context, setValue) {
    if(this.operator==EqOp.IS_A) {
        var id = this.readLeftId();
        if(id!=null) {
            var type = this.right.value;
            var value = context.getRegisteredValue(id.name);
            if(value==null && !setValue) // need a thing to avoid NPE
                value = new Variable(id.name, type);
            var local = context.newChildContext();
            value = new LinkedVariable(type, value);
            local.registerValue(value, false);
            if(setValue)
                local.setValue(id, new LinkedValue(context));
            context = local;
        }
    }
    return context;
};

EqualsExpression.prototype.readLeftId = function() {
    if(this.left instanceof InstanceExpression)
        return this.left.id;
    else if(this.left instanceof UnresolvedIdentifier)
        return this.left.id;
    else
        return null;
};

EqualsExpression.prototype.interpretAssert = function(context, test) {
    var lval = this.left.interpret(context) || NullValue.instance;
    var rval = this.right.interpret(context) || NullValue.instance;
    var result = this.interpretValues(context, lval, rval);
    if(result==BooleanValue.TRUE)
        return true;
    var expected = this.getExpected(context, test.dialect);
    var actual = lval.toString() + " " + this.operator.toString(test.dialect) + " " + rval.toString();
    test.printFailedAssertion(context, expected, actual);
    return false;
};


EqualsExpression.prototype.checkQuery = function(context) {
    var decl = this.left.checkAttribute(context);
    if(decl && !decl.storable)
        context.problemListener.reportNotStorable(this, decl.name);
    var rt = this.right.check(context);
    return this.checkOperator(context, decl.getType(), rt);
};


EqualsExpression.prototype.interpretQuery = function(context, query) {
    var decl = this.left.checkAttribute(context);
    if(!decl || !decl.storable)
        throw new SyntaxError("Unable to interpret predicate");
    var value = this.right.interpret(context);
    if (value instanceof Instance)
        value = value.getMemberValue(context, "dbId", false);
    var info = decl.getAttributeInfo();
    var data = value.getStorableData();
    var match = this.getMatchOp();
    query.verify(info, match, data);
    if (this.operator == EqOp.NOT_EQUALS)
        query.not();
};


EqualsExpression.prototype.getMatchOp = function() {
    switch (this.operator) {
        case EqOp.EQUALS:
        case EqOp.NOT_EQUALS:
            return MatchOp.EQUALS;
        case EqOp.ROUGHLY:
            return MatchOp.ROUGHLY;
        case EqOp.CONTAINS:
        case EqOp.NOT_CONTAINS:
            return MatchOp.CONTAINS
        default:
            throw new Error("Not supported:" + this.operator.toString());
    }
};


EqualsExpression.prototype.declare = function(transpiler) {
    this.left.declare(transpiler);
    this.right.declare(transpiler);
    if(this.operator === EqOp.ROUGHLY) {
        var removeAccents = require("../utils/Utils").removeAccents;
        transpiler.require(removeAccents);
    }
};


EqualsExpression.prototype.transpile = function(transpiler) {
    switch (this.operator) {
        case EqOp.EQUALS:
            this.transpileEquals(transpiler);
            break;
        case EqOp.NOT_EQUALS:
            this.transpileNotEquals(transpiler);
            break;
        case EqOp.ROUGHLY:
            this.transpileRoughly(transpiler);
            break;
        case EqOp.CONTAINS:
            this.transpileContains(transpiler);
            break;
        case EqOp.NOT_CONTAINS:
            this.transpileNotContains(transpiler);
            break;
        case EqOp.IS:
            this.transpileIs(transpiler);
            break;
        case EqOp.IS_NOT:
            this.transpileIsNot(transpiler);
            break;
        case EqOp.IS_A:
            this.transpileIsA(transpiler);
            break;
        case EqOp.IS_NOT_A:
            this.transpileIsNotA(transpiler);
            break;
        default:
            throw new Error("Cannot transpile:" + this.operator.toString());
    }
};

EqualsExpression.prototype.transpileFound = function(transpiler, dialect) {
    transpiler.append("(");
    this.left.transpile(transpiler);
    transpiler.append(") + ' ").append(this.operator.toString(dialect)).append(" ' + (");
    this.right.transpile(transpiler);
    transpiler.append(")");
};


EqualsExpression.prototype.getExpected = function(context, dialect, escapeMode) {
    var writer = new CodeWriter(dialect, context);
    writer.escapeMode = escapeMode;
    this.toDialect(writer);
    return writer.toString();
};


EqualsExpression.prototype.transpileRoughly = function(transpiler) {
    transpiler.append("removeAccents(");
    this.left.transpile(transpiler);
    transpiler.append(").toLowerCase() === removeAccents(");
    this.right.transpile(transpiler);
    transpiler.append(").toLowerCase()");
};

EqualsExpression.prototype.transpileIs = function(transpiler) {
    this.left.transpile(transpiler);
    transpiler.append(" === ");
    this.right.transpile(transpiler);
};

EqualsExpression.prototype.transpileIsNot = function(transpiler) {
    this.left.transpile(transpiler);
    transpiler.append(" !== ");
    this.right.transpile(transpiler);
};

EqualsExpression.prototype.transpileEquals = function(transpiler) {
    var lt = this.left.check(transpiler.context);
    if(lt === BooleanType.instance || lt === IntegerType.instance || lt === DecimalType.instance || lt === CharacterType.instance || lt === TextType.instance) {
        this.left.transpile(transpiler);
        transpiler.append(" === ");
        this.right.transpile(transpiler);
    } else {
        transpiler.append("equalObjects(");
        this.left.transpile(transpiler);
        transpiler.append(", ");
        this.right.transpile(transpiler);
        transpiler.append(")");
    }
};


EqualsExpression.prototype.transpileNotEquals = function(transpiler) {
    var lt = this.left.check(transpiler.context);
    if(lt === BooleanType.instance || lt === IntegerType.instance || lt === DecimalType.instance || lt === CharacterType.instance || lt === TextType.instance) {
        this.left.transpile(transpiler);
        transpiler.append(" !== ");
        this.right.transpile(transpiler);
    } else {
        transpiler.append("!equalObjects(");
        this.left.transpile(transpiler);
        transpiler.append(", ");
        this.right.transpile(transpiler);
        transpiler.append(")");
    }
};


EqualsExpression.prototype.transpileContains = function(transpiler) {
    this.left.transpile(transpiler);
    transpiler.append(".contains(");
    this.right.transpile(transpiler);
    transpiler.append(")");
};


EqualsExpression.prototype.transpileNotContains = function(transpiler) {
    transpiler.append("!");
    this.transpileContains(transpiler);
};


EqualsExpression.prototype.transpileIsNotA = function(transpiler) {
    transpiler.append("!(");
    this.transpileIsA(transpiler);
    transpiler.append(")");
};


EqualsExpression.prototype.transpileIsA = function(transpiler) {
    if(this.right.value===BooleanType.instance) {
        transpiler.append("isABoolean(");
        this.left.transpile(transpiler);
        transpiler.append(")");
    } else if(this.right.value===IntegerType.instance) {
        transpiler.append("isAnInteger(");
        this.left.transpile(transpiler);
        transpiler.append(")");
    } else if(this.right.value===DecimalType.instance) {
        transpiler.append("isADecimal(");
        this.left.transpile(transpiler);
        transpiler.append(")");
    } else if(this.right.value===TextType.instance) {
        transpiler.append("isAText(");
        this.left.transpile(transpiler);
        transpiler.append(")");
    } else if(this.right.value===CharacterType.instance) {
        transpiler.append("isACharacter(");
        this.left.transpile(transpiler);
        transpiler.append(")");
    } else {
        this.left.transpile(transpiler);
        transpiler.append(" instanceof ");
        this.right.transpile(transpiler);
    }
};

EqualsExpression.prototype.declareQuery = function(transpiler) {
    transpiler.require(MatchOp);
    this.left.declare(transpiler);
    this.right.declare(transpiler);
};

EqualsExpression.prototype.transpileQuery = function(transpiler, builder) {
    var decl = this.left.checkAttribute(transpiler.context);
    if(!decl || !decl.storable)
        throw new SyntaxError("Unable to transpile predicate");
    var info = decl.getAttributeInfo();
    var matchOp = this.getMatchOp();
    // TODO check for dbId field of instance value
    transpiler.append(builder).append(".verify(").append(info.toTranspiled()).append(", MatchOp.").append(matchOp.name).append(", ");
    this.right.transpile(transpiler);
    transpiler.append(");").newLine();
    if (this.operator == EqOp.NOT_EQUALS)
        transpiler.append(builder).append(".not();").newLine();
};

exports.EqualsExpression = EqualsExpression;


