var SimpleStatement = require("./SimpleStatement").SimpleStatement;
var MethodFinder = require("../runtime/MethodFinder").MethodFinder;
var MethodSelector = require("../expression/MethodSelector").MethodSelector;
var ArgumentAssignmentList = require("../grammar/ArgumentAssignmentList").ArgumentAssignmentList;
var AbstractMethodDeclaration = require("../declaration/AbstractMethodDeclaration").AbstractMethodDeclaration;
var ConcreteMethodDeclaration = require("../declaration/ConcreteMethodDeclaration").ConcreteMethodDeclaration;
var ClosureDeclaration = require("../declaration/ClosureDeclaration").ClosureDeclaration;
var ClosureValue = require("../value/ClosureValue").ClosureValue;
var NotMutableError = require("../error/NotMutableError").NotMutableError;
var PromptoError = require("../error/PromptoError").PromptoError;
var ThisExpression = null;
var VoidType = require("../type/VoidType").VoidType;
var Section = require("../parser/Section").Section;
var Dialect = require("../parser/Dialect").Dialect;
var BooleanValue = require("../value/BooleanValue").BooleanValue;
var IntegerType = require("../type/IntegerType").IntegerType;
var DecimalType = require("../type/DecimalType").DecimalType;
var Identifier = require("../grammar/Identifier").Identifier;

exports.resolve = function() {
    ThisExpression = require("../expression/ThisExpression").ThisExpression;
};


function MethodCall(selector, assignments) {
	SimpleStatement.call(this);
	this.selector = selector;
	this.assignments = assignments || null;
	return this;
}

MethodCall.prototype = Object.create(SimpleStatement.prototype);
MethodCall.prototype.constructor = MethodCall;

MethodCall.prototype.toDialect = function(writer) {
    if (this.requiresInvoke(writer))
        writer.append("invoke: ");
    this.selector.toDialect(writer);
    if (this.assignments != null)
        this.assignments.toDialect(writer);
    else if (writer.dialect!= Dialect.E)
        writer.append("()");
};

MethodCall.prototype.requiresInvoke = function(writer) {
    if (writer.dialect != Dialect.E)
        return false;
    if (this.assignments != null && this.assignments.length > 0)
        return false;
    try {
        finder = new MethodFinder(writer.context, this);
        var declaration = finder.findMethod(false);
        /* if method is abstract, need to prefix with invoke */
        if(declaration instanceof AbstractMethodDeclaration)
            return true;
    } catch(e) {
        // ok
    }
    return false;
}

MethodCall.prototype.toString = function() {
	return this.selector.toString() + " " + (this.assignments!==null ? this.assignments.toString() : "");
};


MethodCall.prototype.check = function(context, updateSelectorParent) {
	var finder = new MethodFinder(context, this);
	var declaration = finder.findMethod(false);
    if(!declaration)
        return VoidType.instance;
    if(updateSelectorParent && declaration.memberOf && !this.selector.parent)
        this.selector.parent = new ThisExpression();
    var local = this.selector.newLocalCheckContext(context, declaration);
    return this.checkDeclaration(declaration, context, local);
};

MethodCall.prototype.checkDeclaration = function(declaration, parent, local) {
	if(declaration instanceof ConcreteMethodDeclaration && declaration.mustBeCheckedInCallContext(parent)) {
		return this.fullCheck(declaration, parent, local);
	} else {
		return this.lightCheck(declaration, parent, local);
	}
};

MethodCall.prototype.lightCheck = function(declaration, parent, local) {
	declaration.registerArguments(local);
	return declaration.check(local);
};

MethodCall.prototype.fullCheck = function(declaration, parent, local) {
	try {
		var assignments = this.makeAssignments(parent,declaration);
		declaration.registerArguments(local);
		assignments.forEach(function(assignment) {
			var expression = assignment.resolve(local, declaration, true);
			var value = assignment.argument.checkValue(parent, expression);
			local.setValue(assignment.id, value);
		});
		return declaration.check(local);
	} catch (e) {
		if(e instanceof PromptoError) {
			throw new SyntaxError(e.message);
		}
	}
};


MethodCall.prototype.declare = function(transpiler) {
    var finder = new MethodFinder(transpiler.context,this);
    var declaration = finder.findMethod(false);
    if(declaration instanceof BuiltInMethodDeclaration) {
        if(declaration.declareCall)
            declaration.declareCall(transpiler);
    }else {
        if (this.assignments != null)
            this.assignments.declare(transpiler);
        var local = this.selector.newLocalCheckContext(transpiler.context, declaration);
        this.declareDeclaration(declaration, transpiler, local);
    }
};

MethodCall.prototype.declareDeclaration = function(declaration, transpiler, local) {
    if(declaration instanceof ConcreteMethodDeclaration && declaration.mustBeCheckedInCallContext(transpiler.context)) {
        return this.fullDeclare(declaration, transpiler, local);
    } else {
        return this.lightDeclare(declaration, transpiler, local);
    }
};

MethodCall.prototype.lightDeclare = function(declaration, transpiler, local) {
    transpiler = transpiler.copyTranspiler(local);
    declaration.declare(transpiler);
};


MethodCall.prototype.transpile = function(transpiler) {
    var finder = new MethodFinder(transpiler.context, this);
    var declaration = finder.findMethod(false);
    if(declaration instanceof BuiltInMethodDeclaration) {
        var parent = this.selector.resolveParent(transpiler.context);
        parent.transpile(transpiler);
        transpiler.append(".");
        declaration.transpileCall(transpiler, this.assignments);
    } else {
        var selector = new MethodSelector(this.selector.parent, new Identifier(declaration.getTranspiledName(transpiler.context)));
        selector.transpile(transpiler);
        var assignments = this.makeAssignments(transpiler.context, declaration);
        if(assignments.length > 0) {
            transpiler.append("(");
            assignments.forEach(function (assignment) {
                var argument = assignment.argument;
                var expression = assignment.resolve(transpiler.context, declaration, false);
                argument.transpileCall(transpiler, expression);
                transpiler.append(", ");
            });
            transpiler.trimLast(2);
            transpiler.append(")");
        } else
            transpiler.append("()");
    }
};



MethodCall.prototype.makeAssignments = function(context, declaration) {
	if(this.assignments==null) {
		return new ArgumentAssignmentList();
	} else {
		return this.assignments.makeAssignments(context, declaration);
	}
};

MethodCall.prototype.interpret = function(context) {
	var declaration = this.findDeclaration(context);
	var local = this.selector.newLocalContext(context, declaration);
	declaration.registerArguments(local);
	var assignments = this.makeAssignments(context, declaration);
	assignments.forEach(function(assignment) {
		var expression = assignment.resolve(local, declaration, true);
        var argument = assignment.argument;
		var value = argument.checkValue(context, expression);
        if(value!=null && argument.mutable && !value.mutable)
            throw new NotMutableError();
		local.setValue(assignment.id, value);
	});
	return declaration.interpret(local, true);
};

MethodCall.prototype.interpretAssert = function(context, testMethodDeclaration) {
    var value = this.interpret(context);
    if(value instanceof BooleanValue)
        return value.value;
    else {
        var expected = this.getExpected(context, this.dialect);
        throw new SyntaxError("Cannot test '" + expected + "'");
    }
};

MethodCall.prototype.getExpected = function(context, dialect) {
    var writer = new CodeWriter(this.dialect, context);
    this.toDialect(writer);
    return writer.toString();
};


MethodCall.prototype.transpileFound = function(transpiler, dialect) {
    transpiler.append("'<unknown>'");
};


MethodCall.prototype.findDeclaration = function(context) {
	// look for method as value
	try {
		var o = context.getValue(this.selector.id);
		if(o instanceof ClosureValue) {
			return new ClosureDeclaration(o);
		}
	} catch (e) {
		if(!(e instanceof PromptoError)) {
			throw e;
		}
	}
	// look for declared method
	var finder = new MethodFinder(context,this);
	return finder.findMethod(true);
};

exports.MethodCall = MethodCall;