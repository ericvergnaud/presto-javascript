var ContainerType = require("./ContainerType").ContainerType;
var Identifier = require("../grammar/Identifier").Identifier;
var IntegerType = null;
var BooleanType = null;

exports.resolve = function() {
	IntegerType = require("./IntegerType").IntegerType;
    BooleanType = require("./BooleanType").BooleanType;
};

function RangeType(itemType) {
    ContainerType.call(this, new Identifier(itemType.name+"[..]"),itemType);
	return this;
}

RangeType.prototype = Object.create(ContainerType.prototype);
RangeType.prototype.constructor = RangeType;

RangeType.prototype.checkItem = function(context, other) {
	if (other == IntegerType.instance) {
		return this.itemType;
	} else {
		return ContainerType.prototype.checkItem.call(this, context, other);
	}
};

RangeType.prototype.checkSlice = function(context) {
	return this;
};

RangeType.prototype.checkIterator = function(context) {
	return this.itemType;
};


RangeType.prototype.checkContainsAllOrAny = function(context, other) {
    return BooleanType.instance;
};


exports.RangeType = RangeType;