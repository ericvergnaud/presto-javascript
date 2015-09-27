var MethodCall = require("../statement/MethodCall").MethodCall;
var CategoryDeclaration = null;
var EnumeratedNativeDeclaration = require("../declaration/EnumeratedNativeDeclaration").EnumeratedNativeDeclaration;
var ConstructorExpression = null;
var InstanceExpression = require("../expression/InstanceExpression").InstanceExpression;
var SymbolExpression = require("../expression/SymbolExpression").SymbolExpression;
var TypeExpression = require("../expression/TypeExpression").TypeExpression;
var ProblemListener = require("../parser/ProblemListener").ProblemListener;
var PrestoError = require("../error/PrestoError").PrestoError;
var Section = require("../parser/Section").Section;
var CategoryType = null;
var MethodSelector = null;

exports.resolve = function() {
	CategoryType = require("../type/CategoryType").CategoryType;
	MethodSelector = require("../expression/MethodSelector").MethodSelector;
	CategoryDeclaration = require("../declaration/CategoryDeclaration").CategoryDeclaration;
	ConstructorExpression = require("../expression/ConstructorExpression").ConstructorExpression;
}

function UnresolvedIdentifier(id) {
    Section.call(this);
	this.id = id;
	this.resolved = null;
	return this;
}

UnresolvedIdentifier.prototype = Object.create(Section.prototype);
UnresolvedIdentifier.prototype.constructor = UnresolvedIdentifier;

Object.defineProperty(UnresolvedIdentifier.prototype, "name", {
    get : function() {
        return this.id.name;
    }
});

UnresolvedIdentifier.prototype.toString = function() {
	return this.id.name;
};


UnresolvedIdentifier.prototype.toDialect = function(writer) {
    try {
        this.resolve(writer.context, false);
    } catch(e) {
    }
    if(this.resolved!=null)
        this.resolved.toDialect(writer);
    else
        writer.append(this.id.name);
};

UnresolvedIdentifier.prototype.check = function(context) {
	return this.resolveAndCheck(context, false);
};

UnresolvedIdentifier.prototype.checkMember = function(context) {
	return this.resolveAndCheck(context, true);
};


UnresolvedIdentifier.prototype.interpret = function(context) {
	if(this.resolved==null) {
		this.resolveAndCheck(context, false);
	}
	return this.resolved.interpret(context);
};

UnresolvedIdentifier.prototype.resolveAndCheck = function(context, forMember) {
    this.resolve(context, forMember);
    return this.resolved.check(context);
};

UnresolvedIdentifier.prototype.resolve = function(context, forMember) {
	if(this.resolved==null) {
        // don't collect problems during resolution
        var listener = context.problemListener;
        context.problemListener = new ProblemListener();
        // try out various solutions
        this.resolved = this.resolveSymbol(context);
        if (this.resolved == null) {
            // is first char uppercase?
            if (this.resolved == null && this.id.name[0].toUpperCase() == this.id.name[0]) {
                if (forMember) {
                    this.resolved = this.resolveType(context);
                } else {
                    this.resolved = this.resolveConstructor(context);
                }
            }
            if (this.resolved == null) {
                this.resolved = this.resolveMethod(context);
                if (this.resolved == null) {
                    this.resolved = this.resolveInstance(context);
                }
            }
        }
        // restore listener
        context.problemListener = listener;
    }
	if(this.resolved==null)
        context.problemListener.reportUnknownIdentifier(this.id);
    return this.resolved;
};

UnresolvedIdentifier.prototype.resolveInstance = function(context) {
	try {
		var id = new InstanceExpression(this.id);
		id.check(context);
		return id;
	} catch(e) {
		if(e instanceof SyntaxError) {
			return null;
		} else {
			throw e;
		}
	}
};

UnresolvedIdentifier.prototype.resolveMethod = function(context) {
	try {
		var method = new MethodCall(new MethodSelector(null, this.id));
		method.check(context);
		return method;
	} catch(e) {
		if(e instanceof PrestoError) {
			return null;
		} else {
			throw e;
		}
	}
};

UnresolvedIdentifier.prototype.resolveConstructor = function(context) {
	try {
		var method = new ConstructorExpression(new CategoryType(this.id), false, null);
		method.check(context);
		return method;
	} catch(e) {
		if(e instanceof SyntaxError) {
			return null;
		} else {
			throw e;
		}
	}
};

UnresolvedIdentifier.prototype.resolveType = function(context) {
	var decl = context.getRegisteredDeclaration(this.name);
	if(decl instanceof CategoryDeclaration) {
		return new TypeExpression(new CategoryType(this.id));
	} else if(decl instanceof EnumeratedNativeDeclaration) {
		return new TypeExpression(decl.getType(context));
	} else {
		var allTypes = NativeType.getAll();
		for(var i=0;i<allTypes.length;i++) {
			if (this.name == allTypes[i].name) {
				return new TypeExpression(allTypes[i]);
			}
		}
	}
	return null;
};

UnresolvedIdentifier.prototype.resolveSymbol = function(context) {
	if(this.id.name==this.id.name.toUpperCase()) {
		return new SymbolExpression(this.id);
	} else {
		return null;
	}
};

exports.UnresolvedIdentifier = UnresolvedIdentifier;
