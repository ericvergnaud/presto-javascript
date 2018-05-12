var NativeType = require("./NativeType").NativeType;
var BooleanType = require("./BooleanType").BooleanType;
var IntegerType = null; // circular dependency
var AnyType = require("./AnyType").AnyType;
var DecimalValue = require("../value/DecimalValue").DecimalValue;
var Identifier = require("../grammar/Identifier").Identifier;

exports.resolve = function() {
	IntegerType = require("./IntegerType").IntegerType;
}

function DecimalType()  {
	NativeType.call(this, new Identifier("Decimal"));
	return this;
}

DecimalType.prototype = Object.create(NativeType.prototype);
DecimalType.prototype.constructor = DecimalType;

DecimalType.instance = new DecimalType();


DecimalType.prototype.isAssignableFrom = function(context, other) {
    return NativeType.prototype.isAssignableFrom.call(this, context, other)
        || (other == IntegerType.instance);
};


DecimalType.prototype.checkAdd = function(context, other, tryReverse) {
	if(other instanceof IntegerType) {
		return this;
	} else if(other instanceof DecimalType) {
		return this;
	} else {
		return NativeType.prototype.checkAdd.call(this, context, other, tryReverse);
	}
};


DecimalType.prototype.transpileAdd = function(transpiler, other, tryReverse, left, right) {
    if (other instanceof IntegerType || other instanceof DecimalType) {
        left.transpile(transpiler);
        transpiler.append(" + ");
        right.transpile(transpiler);
    } else
        return NativeType.prototype.transpileAdd.call(this, context, other, tryReverse, left, right);
};


DecimalType.prototype.checkSubtract = function(context, other) {
	if(other instanceof IntegerType || other instanceof DecimalType) {
		return this;
	} else {
		return NativeType.prototype.checkSubtract.call(this, context, other);
	}
};


DecimalType.prototype.transpileSubtract = function(transpiler, other, left, right) {
    if (other instanceof IntegerType || other instanceof DecimalType) {
        left.transpile(transpiler);
        transpiler.append(" - ");
        right.transpile(transpiler);
    } else
        return NativeType.prototype.transpileSubtract.call(this, context, other, left, right);
};


DecimalType.prototype.checkMultiply = function(context, other, tryReverse) {
	if(other instanceof IntegerType || other instanceof DecimalType) {
		return this;
	} else {
		return NativeType.prototype.checkMultiply.call(this, context, other, tryReverse);
	}
};


DecimalType.prototype.transpileMultiply = function(transpiler, other, tryReverse, left, right) {
    if (other instanceof IntegerType || other instanceof DecimalType) {
        left.transpile(transpiler);
        transpiler.append(" * ");
        right.transpile(transpiler);
    } else
        return NativeType.prototype.transpileMultiply.call(this, context, other, tryReverse, left, right);
};

DecimalType.prototype.checkDivide = function(context, other) {
	if(other instanceof IntegerType || other instanceof DecimalType) {
		return this;
	} else {
		return NativeType.prototype.checkDivide.call(this, context, other);
	}
};


DecimalType.prototype.transpileDivide = function(transpiler, other, left, right) {
    if (other instanceof IntegerType || other instanceof DecimalType) {
        left.transpile(transpiler);
        transpiler.append(" / ");
        right.transpile(transpiler);
    } else
        return NativeType.prototype.transpileDivide.call(this, context, other, left, right);
};


DecimalType.prototype.checkIntDivide = function(context, other) {
    if(other instanceof IntegerType) {
        return IntegerType.instance;
    } else {
        return NativeType.prototype.checkIntDivide.call(this, context, other);
    }
};


DecimalType.prototype.transpileIntDivide = function(transpiler, other, left, right) {
    if (other instanceof IntegerType ) {
        transpiler.append("Math.floor(");
        left.transpile(transpiler);
        transpiler.append(" / ");
        right.transpile(transpiler);
        transpiler.append(")");
    } else
        return NativeType.prototype.transpileIntDivide.call(this, transpiler, other, left, right);
};


DecimalType.prototype.checkModulo = function(context, other) {
    if(other instanceof IntegerType || other instanceof DecimalType) {
        return this;
    } else {
        return NativeType.prototype.checkModulo.call(this, context, other);
    }
};


DecimalType.prototype.transpileModulo = function(transpiler, other, left, right) {
    if (other instanceof IntegerType  || other instanceof DecimalType) {
        left.transpile(transpiler);
        transpiler.append(" % ");
        right.transpile(transpiler);
    } else
        return NativeType.prototype.transpileModulo.call(this, transpiler, other, left, right);
};

DecimalType.prototype.checkMinus = function(context) {
	return this;
};


DecimalType.prototype.transpileMinus = function(transpiler, value) {
    transpiler.append(" -");
    value.transpile(transpiler);
};


DecimalType.prototype.transpileMember = function(transpiler, name) {
    if("text" == name)
        transpiler.append("toDecimalString()");
    else
        NativeType.prototype.transpileMember.call(this, transpiler, name);
};


DecimalType.prototype.checkCompare = function(context, other) {
	if(other instanceof IntegerType || other instanceof DecimalType) {
		return BooleanType.instance;
	} else {
		return NativeType.prototype.checkCompare.call(this, context, other);
	}
};

DecimalType.prototype.convertJavaScriptValueToPromptoValue = function(context, value, returnType) {
    if (typeof(value)=='number') {
        return new DecimalValue(value);
    } else {
        return value; // TODO for now
    }
};

exports.DecimalType = DecimalType;