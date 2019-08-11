var UnresolvedIdentifier = require("../expression/UnresolvedIdentifier").UnresolvedIdentifier;
var Identifier = require("../grammar/Identifier").Identifier;
var ArgumentList = null;
var Argument = null;
var CategoryDeclaration = null;
var ConcreteCategoryDeclaration = null;
var SingletonCategoryDeclaration = null;
var EnumeratedNativeDeclaration = null;
var EnumeratedCategoryDeclaration = null;
var EnumeratedCategoryType = null;
var EnumeratedNativeType = null;
var ValueExpression = require("../expression/ValueExpression").ValueExpression;
var ArrowExpression = require("../expression/ArrowExpression").ArrowExpression;
var Operator = require("../grammar/Operator").Operator;
var BaseType = require("./BaseType").BaseType;
var NullType = require("./NullType").NullType;
var TextType = require("./TextType").TextType;
var AnyType = require("./AnyType").AnyType;
var MissingType = require("./MissingType").MissingType;
var MethodType = require("./MethodType").MethodType;
var PromptoError = require("../error/PromptoError").PromptoError;
var SyntaxError = require("../error/SyntaxError").SyntaxError;
var MethodCall = require("../statement/MethodCall").MethodCall;
var MethodSelector = require("../expression/MethodSelector").MethodSelector;
var MethodFinder = require("../runtime/MethodFinder").MethodFinder;
var $DataStore = require("../store/DataStore").$DataStore;
var InstanceExpression = require("../expression/InstanceExpression").InstanceExpression;
var Score = require("../runtime/Score").Score;
var compareValues = require("../utils/Utils").compareValues;

exports.resolve = function() {
	ArgumentList = require("../grammar/ArgumentList").ArgumentList;
	Argument = require("../grammar/Argument").Argument;
    CategoryDeclaration = require("../declaration/CategoryDeclaration").CategoryDeclaration;
    ConcreteCategoryDeclaration = require("../declaration/ConcreteCategoryDeclaration").ConcreteCategoryDeclaration;
    SingletonCategoryDeclaration = require("../declaration/SingletonCategoryDeclaration").SingletonCategoryDeclaration;
    EnumeratedNativeDeclaration = require("../declaration/EnumeratedNativeDeclaration").EnumeratedNativeDeclaration;
    EnumeratedCategoryDeclaration = require("../declaration/EnumeratedCategoryDeclaration").EnumeratedCategoryDeclaration;
    EnumeratedCategoryType = require("./EnumeratedCategoryType").EnumeratedCategoryType;
    EnumeratedNativeType = require("./EnumeratedNativeType").EnumeratedNativeType;
};


function CategoryType(id, mutable) {
	BaseType.call(this, id);
    this.mutable = mutable || false;
	return this;
}

CategoryType.prototype = Object.create(BaseType.prototype);
CategoryType.prototype.constructor =  CategoryType;

CategoryType.prototype.toDialect = function(writer) {
    if (this.mutable)
        writer.append("mutable ");
    writer.append(this.name);
};


CategoryType.prototype.declare = function(transpiler) {
    if(this.name==="Any") {
        var Any = require("../intrinsic/Any").Any;
        transpiler.require(Any);
    } else  {
        var decl = this.getDeclaration(transpiler.context);
        decl.declare(transpiler);
    }
};

CategoryType.prototype.transpile = function(transpiler) {
    transpiler.append(this.name);
};


CategoryType.prototype.transpileInstance = function(transpiler) {
    var decl = this.getDeclaration(transpiler.context);
    if(decl instanceof SingletonCategoryDeclaration)
        transpiler.append(this.name).append(".instance");
    else
        transpiler.append("this");
};

CategoryType.prototype.newInstanceFromStored = function(context, stored) {
    var decl = this.getDeclaration(context);
    var inst = decl.newInstanceFromStored(context, stored);
    inst.mutable = this.mutable;
    return inst;
};

CategoryType.prototype.checkUnique = function(context) {
	var actual = context.getRegisteredDeclaration(this.name) || null;
	if(actual!=null) {
		throw new SyntaxError("Duplicate name: \"" + this.name + "\"");
	}
};

CategoryType.prototype.getDeclaration = function(context) {
	var decl = context.getRegisteredDeclaration(this.name) || null;
	if(decl==null) {
        if(context.problemListener)
            context.problemListener.reportUnknownCategory(this.id);
        else
		    throw new SyntaxError("Unknown category: \"" + this.name + "\"");
	}
	return decl;
};


CategoryType.prototype.checkMultiply = function(context, other, tryReverse) {
    var type = this.checkOperator(context, other, tryReverse, Operator.MULTIPLY);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkMultiply.call(this, context, other, tryReverse);
}


CategoryType.prototype.declareMultiply = function(transpiler, other, tryReverse, left, right) {
    var type = this.checkOperator(transpiler.context, other, tryReverse, Operator.MULTIPLY);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return NativeType.prototype.declareMultiply.call(this, transpiler, other, tryReverse, left, right);
};


CategoryType.prototype.transpileMultiply = function(transpiler, other, tryReverse, left, right) {
    var type = this.checkOperator(transpiler.context, other, tryReverse, Operator.MULTIPLY);
    if(type!=null) {
        left.transpile(transpiler);
        transpiler.append(".operator_MULTIPLY").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
        right.transpile(transpiler);
        transpiler.append(")");
    } else
        return NativeType.prototype.transpileMultiply.call(this, context, other, tryReverse, left, right);

};


CategoryType.prototype.checkDivide = function(context, other) {
    var type = this.checkOperator(context, other, false, Operator.DIVIDE);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkDivide.call(this, context, other);
}


CategoryType.prototype.declareDivide = function(transpiler, other, left, right) {
    var type = this.checkOperator(transpiler.context, other, false, Operator.DIVIDE);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return NativeType.prototype.declareDivide.call(this, context, other, left, right);
};


CategoryType.prototype.transpileDivide = function(transpiler, other, left, right) {
    left.transpile(transpiler);
    transpiler.append(".operator_DIVIDE").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
    right.transpile(transpiler);
    transpiler.append(")");
};



CategoryType.prototype.checkIntDivide = function(context, other) {
    var type = this.checkOperator(context, other, false, Operator.IDIVIDE);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkIntDivide.call(this, context, other);
}

CategoryType.prototype.declareIntDivide = function(transpiler, other, left, right) {
    var type = this.checkOperator(transpiler.context, other, false, Operator.IDIVIDE);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return NativeType.prototype.declareDivide.call(this, context, other, left, right);
};


CategoryType.prototype.transpileIntDivide = function(transpiler, other, left, right) {
    left.transpile(transpiler);
    transpiler.append(".operator_IDIVIDE").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
    right.transpile(transpiler);
    transpiler.append(")");
};


CategoryType.prototype.checkModulo = function(context, other) {
    var type = this.checkOperator(context, other, false, Operator.MODULO);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkModulo.call(this, context, other);
}


CategoryType.prototype.declareModulo = function(transpiler, other, left, right) {
    var type = this.checkOperator(transpiler.context, other, false, Operator.MODULO);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return NativeType.prototype.declareModulo.call(this, context, other, left, right);
};


CategoryType.prototype.transpileModulo = function(transpiler, other, left, right) {
    left.transpile(transpiler);
    transpiler.append(".operator_MODULO").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
    right.transpile(transpiler);
    transpiler.append(")");
};


CategoryType.prototype.checkAdd = function(context, other, tryReverse) {
    var type = this.checkOperator(context, other, tryReverse, Operator.PLUS);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkAdd.call(this, context, other, tryReverse);
}


CategoryType.prototype.declareAdd = function(transpiler, other, tryReverse, left, right) {
    var type = this.checkOperator(transpiler.context, other, tryReverse, Operator.PLUS);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return BaseType.prototype.declareAdd.call(this, transpiler, other, tryReverse, left, right);
};

CategoryType.prototype.transpileAdd = function(transpiler, other, tryReverse, left, right) {
    left.transpile(transpiler);
    transpiler.append(".operator_PLUS").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
    right.transpile(transpiler);
    transpiler.append(")");
};


CategoryType.prototype.checkSubtract = function(context, other) {
    var type = this.checkOperator(context, other, false, Operator.MINUS);
    if(type!=null)
        return type;
    else
        return BaseType.prototype.checkSubtract.call(this, context, other);
}


CategoryType.prototype.declareSubtract = function(transpiler, other, left, right) {
    var type = this.checkOperator(transpiler.context, other, false, Operator.MINUS);
    if(type!=null) {
        left.declare(transpiler);
        right.declare(transpiler);
        type.declare(transpiler);
    } else
        return NativeType.prototype.declareDivide.call(this, context, other, left, right);
};


CategoryType.prototype.transpileSubtract = function(transpiler, other, left, right) {
    left.transpile(transpiler);
    transpiler.append(".operator_MINUS").append("$").append(other.getTranspiledName(transpiler.context)).append("(");
    right.transpile(transpiler);
    transpiler.append(")");
};



CategoryType.prototype.checkOperator = function(context, other, tryReverse, operator) {
    var actual = this.getDeclaration(context);
    if(actual instanceof ConcreteCategoryDeclaration) try {
        var method = actual.getOperatorMethod(context, operator, other);
        if(method==null)
            return null;
        context = context.newInstanceContext(null, this);
        var local = context.newLocalContext();
        method.registerArguments(local);
        return method.check(local);
    } catch(e) {
        // ok to pass, will try reverse
    }
    if(tryReverse)
        return null;
    else
        throw new SyntaxError("Unsupported operation: " + this.name + " " + operator.token + " " + other.name);
};



CategoryType.prototype.checkExists = function(context) {
	this.getDeclaration(context);
};

CategoryType.prototype.checkMember = function(context, section, name) {
    var cd = context.getRegisteredDeclaration(this.name);
    if (cd == null) {
        throw new SyntaxError("Unknown category:" + this.name);
    }
    if (cd instanceof EnumeratedNativeDeclaration) {
        cd.getType(context).checkMember(context, section, name);
    } else if (cd instanceof CategoryDeclaration) {
        if(cd.storable && "dbId" === name.toString())
            return AnyType.instance;
        else if (cd.hasAttribute(context, name)) {
            var ad = context.getRegisteredDeclaration(name);
            if (ad == null) {
                throw new SyntaxError("Unknown attribute:" + name);
            }
            return ad.getType(context);
        } else if ("text" == name.toString()) {
            return TextType.instance
        } else if (cd.hasMethod(context, name)) {
            var method = cd.getMemberMethodsMap(context, name).getFirst();
            return new MethodType(method);
        } else {
            context.problemListener.reportUnknownAttribute(section);
        }
	} else {
        throw new SyntaxError("Not a category:" + this.name);
    }
};

CategoryType.prototype.declareMember = function(transpiler, name) {
    // TODO visit attributes
};


CategoryType.prototype.transpileMember = function(transpiler, name) {
    if ("text" == name)
        transpiler.append("getText()");
    else
        transpiler.append(name);
};

CategoryType.prototype.isAssignableFrom = function(context, other) {
    return BaseType.prototype.isAssignableFrom.call(this, context, other)
        || ((other instanceof CategoryType) && this.isAssignableFromCategory(context, other));
};



CategoryType.prototype.isAssignableFromCategory = function(context, other) {
    return "Any"===this.name
            || other.isDerivedFrom(context, this)
            || other.isDerivedFromAnonymous(context, this);
};



CategoryType.prototype.isDerivedFrom = function(context, other) {
    try {
        var thisDecl = this.getDeclaration(context);
        if (thisDecl instanceof CategoryDeclaration)
            return this.isDerivedFromCategory(context, thisDecl, other);
    } catch (e) {
    }
    return false; // TODO
};



CategoryType.prototype.isDerivedFromCategory = function(context, decl, other) {
    if(decl.derivedFrom==null) {
        return false;
    }
    for(var i=0;i<decl.derivedFrom.length; i++) {
        var ct = new CategoryType(decl.derivedFrom[i]);
        if (ct.equals(other) || ct.isDerivedFrom(context, other)) {
            return true;
        }
    }
    return false;
};


CategoryType.prototype.isDerivedFromAnonymous = function(context, other) {
    if (!(other instanceof CategoryType) || !other.isAnonymous())
        return false;
    try {
        var thisDecl = this.getDeclaration(context);
        if (thisDecl instanceof CategoryDeclaration) {
            var otherDecl = other.getDeclaration(context);
            if (otherDecl instanceof CategoryDeclaration)
                return this.isDerivedFromAnonymousCategory(context, thisDecl, otherDecl);
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            return false;
        } else {
            throw e;
        }
    }
};

CategoryType.prototype.isDerivedFromAnonymousCategory = function(context, thisDecl, otherDecl) {
    // an anonymous category extends 1 and only 1 category
    var baseId = otherDecl.derivedFrom[0];
    // check we derive from root category (if not extending 'Any')
    if("any"!=baseId.name && !thisDecl.isDerivedFrom(context,new CategoryType(baseId)))
        return false;
    var allAttributes = otherDecl.getAllAttributes(context);
    for(var attr of allAttributes) {
        if(!thisDecl.hasAttribute(context, attr.name)) {
            return false;
        }
    }
    return true;
};

CategoryType.prototype.isAnonymous = function() {
	return this.name[0]==this.name[0].toLowerCase(); // since it's the name of the argument
}

CategoryType.prototype.isMoreSpecificThan = function(context, other) {
    if(other instanceof NullType || other instanceof AnyType || other instanceof MissingType)
        return true;
	if(!(other instanceof CategoryType)) {
		return false;
	}
	if(other.isAnonymous()) {
		return true;
	}
	var thisDecl = context.getRegisteredDeclaration(this.name);
	if(thisDecl.isDerivedFrom(context, other)) {
		return true;
	} else {
		return false;
	}
};

CategoryType.prototype.scoreMostSpecific = function(context, t1, t2) {
	if(t1.equals(t2)) {
		return Score.SIMILAR;
	} else if(this.equals(t1)) {
		return Score.BETTER;
	} else  if(this.equals(t2)) {
		return Score.WORSE;
	}
	// since this derives from both t1 and t2, return the most specific of t1 and t2
	if(t1.isMoreSpecificThan(context,t2)) {
		return Score.BETTER;
	} else if(t2.isMoreSpecificThan(context,t1)) {
		return Score.WORSE;
	} else {
		return Score.SIMILAR;
	} // should never happen
};


CategoryType.prototype.newInstance = function(context) {
	var decl = context.getRegisteredDeclaration(this.name);
	return decl.newInstance(context);
};


CategoryType.prototype.getSortedComparator = function(context, key, desc) {
    key = key || null;
	if (key == null)
		key = new UnresolvedIdentifier(new Identifier("key"));
    var keyname = key.toString();
    var decl = this.getDeclaration(context);
	if (decl.hasAttribute(context, keyname)) {
		return this.getAttributeSortedComparator(context, keyname, desc);
	} else if (decl.hasMethod(context, keyname)) {
		return this.getMemberMethodSortedComparator(context, keyname, desc);
	} else {
		var method = this.findGlobalMethod(context, keyname);
		if(method!=null) {
            return this.getGlobalMethodSortedComparator(context, method, desc);
        } else if(key instanceof ArrowExpression) {
            return key.getSortedComparator(context, this, desc);
        } else {
			return this.getExpressionSortedComparator(context, key, desc);
		}
	}
};

CategoryType.prototype.getExpressionSortedComparator = function(context, exp, desc) {
    return function(o1, o2) {
		var ctx = context.newInstanceContext(o1, null);
		var value1 = exp.interpret(ctx);
        ctx = context.newInstanceContext(o2, null);
		var value2 = exp.interpret(ctx);
		return desc ? compareValues(value2, value1) : compareValues(value1, value2);
	};
};

CategoryType.prototype.getAttributeSortedComparator = function(context, name, desc) {
    if(desc)
        return function(o1, o2) {
            var value1 = o1.getMemberValue(context, name);
            var value2 = o2.getMemberValue(context, name);
            return compareValues(value2, value1);
	    };
    else
        return function(o1, o2) {
            var value1 = o1.getMemberValue(context, name);
            var value2 = o2.getMemberValue(context, name);
            return compareValues(value1, value2);
        };
};


CategoryType.prototype.getGlobalMethodSortedComparator = function(context, method, desc) {
    var cmp = function(o1, o2) {
        var assignment = method.assignments[0];
        assignment._expression = new ValueExpression(this, o1);
        var value1 = method.interpret(context);
        assignment._expression = new ValueExpression(this, o2);
        var value2 = method.interpret(context);
        return desc ? compareValues(value2, value1) : compareValues(value1, value2);
    };
    return cmp.bind(this);
};


CategoryType.prototype.getMemberMethods = function(context, name) {
    var cd = this.getDeclaration(context);
    if (!(cd instanceof ConcreteCategoryDeclaration))
        throw new SyntaxError("Unknown category:" + this.name);
    else {
        var methods = cd.getMemberMethodsMap(context, name);
        return methods.getAll();
    }
};



/* look for a method which takes this category as sole parameter */
CategoryType.prototype.findGlobalMethod = function(context, name, returnDecl) {
	try {
		var exp = new ValueExpression(this, this.newInstance(context));
		var arg = new Argument(null, exp);
		var args = new ArgumentList([arg]);
		var call = new MethodCall(new MethodSelector(null, new Identifier(name)), args);
		var finder = new MethodFinder(context, call);
		var decl = finder.findMethod(true);
		return decl==null ? null : returnDecl ? decl : call;
	} catch (e) {
		if(e instanceof PromptoError) {
			return null;
		} else {
			throw e;
		}
	}
};


CategoryType.prototype.convertJavaScriptValueToPromptoValue = function(context, value, returnType) {
    var decl = this.getDeclaration(context)
    if (decl == null)
        return BaseType.prototype.convertPythonValueToPromptoValue(context, value, returnType);
    if(decl instanceof EnumeratedNativeDeclaration || decl instanceof EnumeratedCategoryDeclaration)
        return this.loadEnumValue(context, decl, value);
    if ($DataStore.instance.isDbIdType(typeof(value)))
        value = $DataStore.instance.fetchUnique(value);
    return decl.newInstanceFromStored(context, value);
};


CategoryType.prototype.loadEnumValue = function(context, value, name) {
    return context.getRegisteredValue(name);
};


CategoryType.prototype.declareSorted = function(transpiler, key) {
    var keyname = key ? key.toString() : "key";
    var decl = this.getDeclaration(transpiler.context);
    if (decl.hasAttribute(transpiler.context, keyname) || decl.hasMethod(transpiler.context, keyname, null)) {
        return;
    } else {
        var decl = this.findGlobalMethod(transpiler.context, keyname, true);
        if (decl != null) {
            decl.declare(transpiler);
        } else if(key instanceof ArrowExpression) {
            // TODO
        } else {
            key.declare(transpiler);
        }
    }
};

CategoryType.prototype.transpileSortedComparator = function(transpiler, key, desc) {
    var keyname = key ? key.toString() : "key";
    var decl = this.getDeclaration(transpiler.context);
    if (decl.hasAttribute(transpiler.context, keyname)) {
        this.transpileAttributeSortedComparator(transpiler, key, desc);
    } else if (decl.hasMethod(transpiler.context, keyname, null)) {
        this.transpileMemberMethodSortedComparator(transpiler, key, desc);
    } else {
        decl = this.findGlobalMethod(transpiler.context, keyname, true);
        if (decl != null) {
            this.transpileGlobalMethodSortedComparator(transpiler, decl.getTranspiledName(transpiler.context), desc);
        } else if(key instanceof ArrowExpression) {
            return key.transpileSortedComparator(transpiler, this, desc);
        } else {
            this.transpileExpressionSortedComparator(transpiler, key, desc);
        }
    }
};


CategoryType.prototype.transpileExpressionSortedComparator = function(transpiler, key, desc) {
    this.transpileAttributeSortedComparator(transpiler, key, desc);
};


CategoryType.prototype.transpileAttributeSortedComparator = function(transpiler, key, desc) {
    key = key || new InstanceExpression(new Identifier("key"));
    transpiler.append("function(o1, o2) { return ");
    this.transpileEqualKeys(transpiler, key);
    transpiler.append(" ? 0 : ");
    this.transpileGreaterKeys(transpiler, key);
    transpiler.append(" ? ");
    if(desc)
        transpiler.append("-1 : 1; }");
    else
        transpiler.append("1 : -1; }");
};


CategoryType.prototype.transpileEqualKeys = function(transpiler, key) {
    transpiler.append("o1.");
    key.transpile(transpiler);
    transpiler.append(" === o2.");
    key.transpile(transpiler);
};


CategoryType.prototype.transpileGreaterKeys = function(transpiler, key) {
    transpiler.append("o1.");
    key.transpile(transpiler);
    transpiler.append(" > o2.");
    key.transpile(transpiler);
};


CategoryType.prototype.transpileGlobalMethodSortedComparator = function(transpiler, name, desc) {
    transpiler.append("function(o1, o2) { return ")
        .append(name).append("(o1) === ").append(name).append("(o2)").append(" ? 0 : ")
        .append(name).append("(o1) > ").append(name).append("(o2)").append(" ? ");
    if(desc)
        transpiler.append("-1 : 1; }");
    else
        transpiler.append("1 : -1; }");
};

CategoryType.prototype.transpileAssignMemberValue = function(transpiler, name, expression) {
    transpiler.append(".setMember('").append(name).append("', ");
    expression.transpile(transpiler);
    var type = expression.check(transpiler.context);
    if(type instanceof EnumeratedCategoryType || type instanceof EnumeratedNativeType) {
        transpiler.append(", false, true"); // set isEnum flag
    }
    transpiler.append(")");
};


exports.CategoryType = CategoryType;