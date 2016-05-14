var NativeType = require("./NativeType").NativeType;
var Identifier = require("../grammar/Identifier").Identifier;
var AnyType = require("./AnyType").AnyType;
var Bool = null;

exports.resolve = function() {
    Bool = require("../value/Bool").Bool;
}

function BooleanType()  {
	NativeType.call(this, new Identifier("Boolean"));
	return this;
}

BooleanType.prototype = Object.create(NativeType.prototype);
BooleanType.prototype.constructor = BooleanType;

BooleanType.instance = new BooleanType();

BooleanType.prototype.checkAnd = function(context, other) {
	if(other instanceof BooleanType) {
		return BooleanType.instance;
	} else {
		return NativeType.prototype.checkAnd.call(this, context, other);
	}
};

BooleanType.prototype.checkOr = function(context, other) {
	if(other instanceof BooleanType) {
		return BooleanType.instance;
	} else {
		return NativeType.prototype.checkOr.call(this, context, other);
	}
};

BooleanType.prototype.checkNot = function(context) {
	return BooleanType.instance;
};


BooleanType.prototype.convertJavaScriptValueToPromptoValue = function(context, value, returnType) {
	if (typeof(value)=='boolean') {
		return Bool.ValueOf(value);
	} else {
		return value; // TODO for now
	}
};

exports.BooleanType = BooleanType;