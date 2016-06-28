var NativeType = require("./NativeType").NativeType;
var BooleanType = require("./BooleanType").BooleanType;
var IntegerType = require("./IntegerType").IntegerType;
var TextType = require("./TextType").TextType;
var AnyType = require("./AnyType").AnyType;
var Character = null;
var RangeType = require("./RangeType").RangeType;
var CharacterRange = require("../value/CharacterRange").CharacterRange;
var Identifier = require("../grammar/Identifier").Identifier;

exports.resolve = function() {
    Character = require("../value/Character").Character;
};

function CharacterType()  {
	NativeType.call(this, new Identifier("Character"));
	return this;
}

CharacterType.prototype = Object.create(NativeType.prototype);
CharacterType.prototype.constructor = CharacterType;

CharacterType.instance = new CharacterType();


CharacterType.prototype.nativeCast = function(context, value) {
    if(value.type instanceof TextType && value.value.length>=1)
        return new Character(value.value.substring(0, 1));
    else
        throw new InvalidDataError("Cannot convert " + value.toString() + " to Character");
};


CharacterType.prototype.checkMember = function(context, name) {
    if ("codePoint"==name) {
        return IntegerType.instance;
    } else {
        return NativeType.prototype.checkMember.call(this, context, name);
    }
};


CharacterType.prototype.checkAdd = function(context, other, tryReverse) {
	return TextType.instance;
};

CharacterType.prototype.checkMultiply = function(context, other, tryReverse) {
	if(other instanceof IntegerType) {
		return TextType.instance;
	}
	return NativeType.prototype.checkMultiply.apply(this, context, other, tryReverse);
};

CharacterType.prototype.checkCompare = function(context, other) {
	if(other instanceof CharacterType || other instanceof TextType) {
		return BooleanType.instance;
	}
	return NativeType.prototype.checkCompare.apply(this, context, other);
};

CharacterType.prototype.checkRange = function(context, other) {
	if(other instanceof CharacterType) {
		return new RangeType(this);
	} else {
		return NativeType.prototype.checkRange.call(this, context, other);
	}
};

CharacterType.prototype.newRange = function(left, right) {
	if(left instanceof Character && right instanceof Character) {
		return new CharacterRange(left, right);
	} else {
		return CharacterType.prototype.newRange.call(this, left, right);
	}
};


exports.CharacterType = CharacterType;