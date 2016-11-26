var BaseType = require("./BaseType").BaseType;
var ListType = require("./ListType").ListType;
var TextType = require("./TextType").TextType;

function EnumeratedNativeType(name, derivedFrom) {
	BaseType.call(this, name);
	this.derivedFrom = derivedFrom;
	return this;
}

EnumeratedNativeType.prototype = Object.create(BaseType.prototype);
EnumeratedNativeType.prototype.constructor = EnumeratedNativeType;

EnumeratedNativeType.prototype.checkMember = function(context, name) {
	if ("symbols"==name) {
		return new ListType(this.derivedFrom);
	} else if ("value"==name) {
		return this;
	} else if ("name"==name) {
		return TextType.instance;
	} else {
		return BaseType.prototype.checkMember.apply(this, context, name);
	}
};

EnumeratedNativeType.prototype.getMemberValue = function(context, name) {
	var decl = context.getRegisteredDeclaration(this.name);
	if(!decl || !decl.symbols) {
		throw new SyntaxError(name + " is not an enumerated type!");
	}
	if ("symbols"==name) {
		return decl.symbols;
	} else {
		throw new SyntaxError("Unknown member:" + name);
	}
};


exports.EnumeratedNativeType = EnumeratedNativeType;
