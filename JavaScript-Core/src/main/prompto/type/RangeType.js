var ContainerType = require("./ContainerType").ContainerType;
var StrictSet = require("../intrinsic/StrictSet").StrictSet;
var Identifier = require("../grammar/Identifier").Identifier;
var IntegerType = null;
var BooleanType = null;

exports.resolve = () => {
	IntegerType = require("./IntegerType").IntegerType;
    BooleanType = require("./BooleanType").BooleanType;
};

class RangeType extends ContainerType {
    constructor(itemType) {
        super(new Identifier(itemType.name+"[..]"), itemType);
        return this;
    }

    withItemType(itemType) {
        return new RangeType(itemType);
    }

    checkItem(context, other, expression) {
        if (other == IntegerType.instance) {
            return this.itemType;
        } else {
            return ContainerType.prototype.checkItem.call(this, context, other, expression);
        }
    }

    declareItem(transpiler, itemType, item) {
        // nothing to do
    }

    transpileItem(transpiler, itemType, item) {
        transpiler.append(".item(");
        item.transpile(transpiler);
        transpiler.append(")");
    }

    checkSlice(context) {
        return this;
    }

    declareSlice(transpiler, first, last) {
        if(first) {
            first.declare(transpiler);
        }
        if(last) {
            last.declare(transpiler);
        }
    }

    transpileSlice(transpiler, first, last) {
        transpiler.append(".slice1Based(");
        if(first) {
            first.transpile(transpiler);
        } else
            transpiler.append("null");
        if(last) {
            transpiler.append(",");
            last.transpile(transpiler);
        }
        transpiler.append(")");
    }

    checkIterator(context, source) {
        return this.itemType;
    }

    checkContainsAllOrAny(context, other) {
        return BooleanType.instance;
    }

    declareContains(transpiler, other, container, item) {
        transpiler.require(StrictSet);
        container.declare(transpiler);
        item.declare(transpiler);
    }

    transpileContains(transpiler, other, container, item) {
        container.transpile(transpiler);
        transpiler.append(".has(");
        item.transpile(transpiler);
        transpiler.append(")");
    }

    declareContainsAllOrAny(transpiler, other, container, items) {
        transpiler.require(StrictSet);
        container.declare(transpiler);
        items.declare(transpiler);
    }

    transpileContainsAll(transpiler, other, container, items) {
        container.transpile(transpiler);
        transpiler.append(".hasAll(");
        items.transpile(transpiler);
        transpiler.append(")");
    }

    transpileContainsAny(transpiler, other, container, items) {
        container.transpile(transpiler);
        transpiler.append(".hasAny(");
        items.transpile(transpiler);
        transpiler.append(")");
    }
}


exports.RangeType = RangeType;