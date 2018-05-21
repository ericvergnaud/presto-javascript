var CategoryDeclaration = require("./CategoryDeclaration").CategoryDeclaration;
var SetterMethodDeclaration = require("./SetterMethodDeclaration").SetterMethodDeclaration;
var GetterMethodDeclaration = require("./GetterMethodDeclaration").GetterMethodDeclaration;
var MethodDeclarationMap = null;
var ConcreteInstance = require("../value/ConcreteInstance").ConcreteInstance;
var CategoryType = require("../type/CategoryType").CategoryType;
var mergeObjects = require("../utils/Utils").mergeObjects;


exports.resolve = function() {
    MethodDeclarationMap = require("../runtime/Context").MethodDeclarationMap;
}

function ConcreteCategoryDeclaration(id, attributes, derivedFrom, methods) {
	CategoryDeclaration.call(this, id, attributes);
	this.derivedFrom = derivedFrom || null;
	this.methodsMap = null;
	this.methods = methods || [];
	return this;
}

ConcreteCategoryDeclaration.prototype = Object.create(CategoryDeclaration.prototype);
ConcreteCategoryDeclaration.prototype.constructor = ConcreteCategoryDeclaration;


ConcreteCategoryDeclaration.prototype.toEDialect = function(writer) {
    var hasMethods = this.methods!=null && this.methods.length>0;
    this.protoToEDialect(writer, hasMethods, false); // no bindings
    if(hasMethods)
        this.methodsToEDialect(writer, this.methods);
}

ConcreteCategoryDeclaration.prototype.categoryTypeToEDialect = function(writer) {
    if(this.derivedFrom==null)
        writer.append("category");
    else
        this.derivedFrom.toDialect(writer, true);
};


ConcreteCategoryDeclaration.prototype.toODialect = function(writer) {
    var hasMethods = this.methods!=null && this.methods.length>0;
    this.allToODialect(writer, hasMethods);
};

ConcreteCategoryDeclaration.prototype.categoryTypeToODialect = function(writer) {
    writer.append("category");
};


ConcreteCategoryDeclaration.prototype.categoryExtensionToODialect = function(writer) {
    if(this.derivedFrom!=null) {
        writer.append(" extends ");
        this.derivedFrom.toDialect(writer, true);
    }
};


ConcreteCategoryDeclaration.prototype.bodyToODialect = function(writer) {
    this.methodsToODialect (writer, this.methods);
};


ConcreteCategoryDeclaration.prototype.toMDialect = function(writer) {
    this.protoToMDialect(writer, this.derivedFrom);
    this.methodsToMDialect(writer);
};


ConcreteCategoryDeclaration.prototype.categoryTypeToMDialect = function(writer) {
    writer.append("class");
};


ConcreteCategoryDeclaration.prototype.methodsToMDialect = function(writer) {
    writer.indent();
    if(this.methods==null || this.methods.length==0)
        writer.append("pass\n");
    else {
        writer.newLine();
        this.methods.forEach(function(method) {
            var w = writer.newMemberWriter();
            method.toDialect(w);
            writer.newLine();
        });
    }
    writer.dedent();
};

ConcreteCategoryDeclaration.prototype.hasAttribute = function(context, name) {
	if (CategoryDeclaration.prototype.hasAttribute.call(this, context, name)) {
		return true;
	} else {
		return this.hasDerivedAttribute(context, name);
	}
};

ConcreteCategoryDeclaration.prototype.hasDerivedAttribute = function(context, name) {
	if(this.derivedFrom==null) {
		return false;
	}
	for(var i=0;i<this.derivedFrom.length;i++) {
        var ancestor = this.derivedFrom[i].name;
		if(ConcreteCategoryDeclaration.ancestorHasAttribute(ancestor, context, name)) {
			return true;
		}
	}
	return false;
};

ConcreteCategoryDeclaration.ancestorHasAttribute = function(ancestor, context, name) {
	var actual = context.getRegisteredDeclaration(ancestor);
	if(!(actual instanceof CategoryDeclaration)) {
		return false;
	}
	return actual.hasAttribute(context, name);
};

ConcreteCategoryDeclaration.prototype.check = function(context) {
	this.checkDerived(context);
	this.checkMethods(context);
	return CategoryDeclaration.prototype.check.call(this, context);
}

ConcreteCategoryDeclaration.prototype.checkMethods = function(context) {
    this.registerMethods(context);
    for (var i = 0; i < this.methods.length; i++) {
        this.methods[i].memberCheck(this, context);
    }
};

ConcreteCategoryDeclaration.prototype.registerMethods = function(context) {
	if(this.methodsMap==null) {
        this.methodsMap = {};
		this.methods.forEach(function(method) {
            method.memberOf = this;
			this.registerMethod(method, context);
		}, this);
	}
};


ConcreteCategoryDeclaration.prototype.registerMethod = function(method, context) {
	var actual;
	if(method instanceof SetterMethodDeclaration) {
		var key = "setter:" + method.name;
		actual = this.methodsMap[key] || null;
		if(actual!=null)
            context.problemListener.reportDuplicateSetter(method.id);
		this.methodsMap[key] = method;
	} else if(method instanceof GetterMethodDeclaration) {
		var key = "getter:"+method.name;
		actual = this.methodsMap[key] || null;
		if(actual!=null)
            context.problemListener.reportDuplicateGetter(method.id);
		this.methodsMap[key] = method;
	} else {
		var key = method.name;
		actual = this.methodsMap[key] || null;
		if(actual==null) {
			actual = new MethodDeclarationMap(method.name);
			this.methodsMap[key] = actual;
		}
		actual.register(method, context);
	}
};

ConcreteCategoryDeclaration.prototype.checkDerived = function(context) {
	if(this.derivedFrom!=null) {
        this.derivedFrom.map( function(id) {
            var cd = context.getRegisteredDeclaration(id.name) || null;
			if (cd == null)
                context.problemListener.reportUnknownCategory(id);
		});
	}
};

ConcreteCategoryDeclaration.prototype.isDerivedFrom = function(context, categoryType) {
	if(this.derivedFrom==null) {
		return false;
	}
	for(var i=0;i<this.derivedFrom.length;i++) {
		var ancestor = this.derivedFrom[i].name;
		if(ancestor==categoryType.name) {
			return true;
		}
		if(ConcreteCategoryDeclaration.isAncestorDerivedFrom(ancestor,context,categoryType)) {
			return true;
		}
	}
	return false;
};

ConcreteCategoryDeclaration.isAncestorDerivedFrom = function(ancestor, context, categoryType) {
	var actual = context.getRegisteredDeclaration(ancestor);
	if(!(actual instanceof CategoryDeclaration)) {
		return false;
	}
	return actual.isDerivedFrom(context, categoryType);
};

ConcreteCategoryDeclaration.prototype.newInstance = function(context) {
	return new ConcreteInstance(context, this);
};

ConcreteCategoryDeclaration.prototype.getAllAttributes = function(context) {
    var result = CategoryDeclaration.prototype.getAllAttributes.call(this, context) || {};
    if(this.derivedFrom!=null) {
        this.derivedFrom.map(function (id) {
            var more = this.getAncestorAttributes(context, id);
            if (more != null)
                result = mergeObjects(result, more);
        }, this);
    }
    return Object.getOwnPropertyNames(result).length==0 ? null : result;
};

ConcreteCategoryDeclaration.prototype.getAncestorAttributes = function(context, id) {
    var decl = context.getRegisteredDeclaration(id.name);
    if(decl==null)
        return null;
    else
        return decl.getAllAttributes(context);
};


ConcreteCategoryDeclaration.prototype.findGetter = function(context, attrName) {
	if(this.methodsMap==null) {
		return null;
	}
	var method = this.methodsMap["getter:"+attrName] || null;
	if(method instanceof GetterMethodDeclaration) {
		return method;
	}
	if(method!=null)
        context.problemListener.reportBadGetter(method.id);
	return this.findDerivedGetter(context, attrName);
};

ConcreteCategoryDeclaration.prototype.findDerivedGetter = function(context, attrName) {
	if(this.derivedFrom==null) {
		return null;
	}
	for(var i=0;i<this.derivedFrom;i++) {
		var method = ConcreteCategoryDeclaration.findAncestorGetter(this.derivedFrom[i],context,attrName);
		if(method!=null) {
			return method;
		}
	}
	return null;
}

ConcreteCategoryDeclaration.findAncestorGetter = function(ancestor, context, attrName) {
	var actual = context.getRegisteredDeclaration(ancestor);
	if(!(actual instanceof ConcreteCategoryDeclaration)) {
		return null;
	}
	return actual.findGetter(context, attrName);
};

ConcreteCategoryDeclaration.prototype.findSetter = function(context, attrName) {
	if(this.methodsMap==null) {
		return null;
	}
	var method = this.methodsMap["setter:"+attrName] || null;
	if(method instanceof SetterMethodDeclaration) {
		return method;
	}
	if(method!=null)
        context.problemListener.reportBadSetter(method.id);
	return this.findDerivedSetter(context,attrName);
};

ConcreteCategoryDeclaration.prototype.findDerivedSetter = function(context, attrName) {
	if(this.derivedFrom==null) {
		return null;
	}
	for(var i=0;i<this.derivedFrom;i++) {
		var method = ConcreteCategoryDeclaration.findAncestorSetter(this.derivedFrom[i],context,attrName);
		if(method!=null) {
			return method;
		}
	}
	return null;
};

ConcreteCategoryDeclaration.findAncestorSetter = function(ancestor, context, attrName) {
	var actual = context.getRegisteredDeclaration(ancestor);
	if(!(actual instanceof ConcreteCategoryDeclaration)) {
		return null;
	}
	return actual.findSetter(context, attrName);
};


ConcreteCategoryDeclaration.prototype.getMemberMethods = function(context, name) {
	var methodsMap = new MethodDeclarationMap(name);
	this.registerMemberMethods(context,methodsMap);
	var names = Object.getOwnPropertyNames(methodsMap.protos);
	return names.map(function(name) {
        return methodsMap.protos[name];
	});
};


ConcreteCategoryDeclaration.prototype.registerMemberMethods = function(context, result) {
    this.registerMethods(context);
	this.registerThisMemberMethods(context,result);
	this.registerDerivedMemberMethods(context,result);
};


ConcreteCategoryDeclaration.prototype.registerThisMemberMethods = function(context, result) {
	if(this.methodsMap==null) {
		return;
	}
	var actual = this.methodsMap[result.name] || null;
	if(actual==null) {
		return;
	}
	if(!(actual instanceof MethodDeclarationMap))
        context.problemListener.reportBadMember(actual.id);
	var protos = Object.getOwnPropertyNames(actual.protos);
    protos.forEach(function(proto) {
        var method = actual.protos[proto];
		result.registerIfMissing(method, context);
	});
};

ConcreteCategoryDeclaration.prototype.registerDerivedMemberMethods = function(context, result) {
	if(this.derivedFrom!=null)
        this.derivedFrom.forEach(function(ancestor) {
		    this.registerAncestorMemberMethods(ancestor, context, result);
	    }, this);
};

ConcreteCategoryDeclaration.prototype.registerAncestorMemberMethods = function(ancestor, context, result) {
	var actual = context.getRegisteredDeclaration(ancestor);
	if(!(actual instanceof ConcreteCategoryDeclaration)) {
		return;
	}
	actual.registerMemberMethods(context, result);
};


ConcreteCategoryDeclaration.prototype.getOperatorMethod = function(context, operator, type) {
    var methodName = "operator_" + operator.name;
    var methods = this.getMemberMethods(context, methodName);
    if(methods==null)
        return null;
    // find best candidate
    var candidate = null;
    methods.forEach(function(method) {
        var potential = method.args[0].getType(context);
        if(!potential.isAssignableFrom(context, type))
            return;
        if(candidate==null)
            candidate = method;
        else {
            var currentBest = candidate.args[0].getType(context);
            if(potential.isAssignableFrom(context, currentBest))
                candidate = method;
        }
    });
    return candidate;
};

ConcreteCategoryDeclaration.prototype.collectCategories = function(context) {
    var cat_set = {};
    var cat_list = [];
    this.doCollectCategories(context, cat_set, cat_list);
    return cat_list;
};

ConcreteCategoryDeclaration.prototype.doCollectCategories = function(context, cat_set, cat_list) {
    if (this.derivedFrom != null) {
        this.derivedFrom.forEach(function (cat) {
            var decl = context.getRegisteredDeclaration(cat);
            decl.doCollectCategories(context, cat_set, cat_list);
        });
    }
    if(!(this.name in cat_set)) {
        cat_set[this.name] = this.name;
        cat_list.push(this.name);
    }
};

ConcreteCategoryDeclaration.prototype.declare = function(transpiler) {
    transpiler.declare(this);
    if (this.derivedFrom != null) {
        this.derivedFrom.forEach(function (cat) {
            var decl = transpiler.context.getRegisteredDeclaration(cat);
            decl.declare(transpiler);
        });
    }
};

ConcreteCategoryDeclaration.prototype.ensureDeclarationOrder = function(context, list, set) {
    if(set.has(this))
        return;
    if (this.derivedFrom != null) {
        this.derivedFrom.forEach(function (cat) {
            var decl = context.getRegisteredDeclaration(cat);
            decl.ensureDeclarationOrder(context, list, set);
        });
    }
    list.push(this);
    set.add(this);
};

ConcreteCategoryDeclaration.prototype.transpile = function(transpiler) {
    var parent = null;
    if(this.derivedFrom != null) {
        if (this.derivedFrom.length === 1) {
            parent = this.derivedFrom[0];
        } else
            throw new Error("Not supported yet!");
    }
    transpiler.append("function ").append(this.name).append("(copyFrom, values) {");
    transpiler.indent();
    if(parent) {
        transpiler.append(parent).append(".call(this, copyFrom, values);");
        transpiler.newLine();
    }
    if(this.attributes) {
        transpiler.append("values = Object.assign({}, copyFrom, values);").newLine();
        this.attributes.forEach(function (attr) {
            transpiler.append("this.").append(attr.name).append(" = values.").append(attr.name).append(" || null;");
            transpiler.newLine();
        }, this);
    }
    transpiler.append("return this;");
    transpiler.dedent();
    transpiler.append("}");
    transpiler.newLine();
    if(parent) {
        transpiler.append(this.name).append(".prototype = Object.create(").append(parent).append(".prototype);")
        transpiler.newLine();
        transpiler.append(this.name).append(".prototype.constructor = ").append(this.name).append(";")
        transpiler.newLine();
    }
    transpiler = transpiler.newInstanceTranspiler(new CategoryType(this.id));
    this.methods.forEach(function(method) {
        var t = transpiler.newMemberTranspiler();
        method.transpile(t);
        t.flush();
    }, this);
    transpiler.flush();
};

exports.ConcreteCategoryDeclaration = ConcreteCategoryDeclaration;
