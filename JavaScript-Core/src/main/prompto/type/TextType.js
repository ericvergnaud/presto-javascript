var BuiltInMethodDeclaration = null;
var NativeType = require("./NativeType").NativeType;
var CharacterType = null;
var IntegerType = require("./IntegerType").IntegerType;
var BooleanType = require("./BooleanType").BooleanType;
var AnyType = require("./AnyType").AnyType;
var Identifier = require("../grammar/Identifier").Identifier;
var Text = null; // circular dependency
var CategoryArgument = require("../argument/CategoryArgument").CategoryArgument;
var TextLiteral = null;
var ListValue = null;

exports.resolve = function() {
	CharacterType = require("./CharacterType").CharacterType;
    TextLiteral = require("../literal/TextLiteral").TextLiteral;
    ListValue = require("../value/ListValue").ListValue;
	Text = require("../value/Text").Text;
    resolveBuiltInMethodDeclaration();
}

function TextType()  {
	NativeType.call(this, new Identifier("Text"));
	return this;
}

TextType.prototype = Object.create(NativeType.prototype);
TextType.prototype.constructor = TextType;

TextType.instance = new TextType();

TextType.prototype.isAssignableFrom = function(context, other) {
	return NativeType.prototype.isAssignableFrom.call(this, context, other)
        || (other == CharacterType.instance);
};

TextType.prototype.checkAdd = function(context, other, tryReverse) {
	// can add anything to text
	return this;
};

TextType.prototype.checkMultiply = function(context, other, tryReverse) {
	if(other instanceof IntegerType) {
		return TextType.instance;
	}
	return NativeType.prototype.checkMultiply.call(this, context, other, tryReverse);
};

TextType.prototype.checkCompare = function(context, other) {
	if(other instanceof TextType || other instanceof CharacterType) {
		return BooleanType.instance;
	}
	return NativeType.prototype.checkCompare.call(this, context, other);
};

TextType.prototype.checkItem = function(context, other) {
	if(other==IntegerType.instance) {
		return CharacterType.instance;
	} else {
		return NativeType.prototype.checkItem.call(this, context, other);
	}
};

TextType.prototype.checkMember = function(context, name) {
   if ("count"==name) {
	   return IntegerType.instance;
   } else {
	   return NativeType.prototype.checkMember.call(this, context, name);
   }
};

TextType.prototype.checkContains = function(context, other) {
	if(other instanceof TextType || other instanceof CharacterType) {
		return BooleanType.instance;
	}
	return NativeType.prototype.checkContains.call(this, context, other);
};

TextType.prototype.checkContainsAllOrAny = function(context, other) {
	return BooleanType.instance;
};

TextType.prototype.checkSlice = function(context) {
	return this;
};

TextType.prototype.convertJavaScriptValueToPromptoValue = function(context, value, returnType) {
	if (typeof(value) == 'string') {
		return new Text(value);
	} else {
		return value; // TODO for now
	}
}

TextType.prototype.getMemberMethods = function(context, name) {
    switch (name) {
        case "toLowerCase":
            return [new ToLowerCaseMethodDeclaration()];
        case "toUpperCase":
            return [new ToUpperCaseMethodDeclaration()];
        case "toCapitalized":
            return [new ToCapitalizedMethodDeclaration()];
        case "split":
            return [new SplitMethodDeclaration()];
        default:
            return NativeType.prototype.getMemberMethods.call(context, name);
    }
};

function ToLowerCaseMethodDeclaration() {
    BuiltInMethodDeclaration.call(this, "toLowerCase");
    return this;
}

function ToUpperCaseMethodDeclaration() {
    BuiltInMethodDeclaration.call(this, "toUpperCase");
    return this;
}

function ToCapitalizedMethodDeclaration() {
    BuiltInMethodDeclaration.call(this, "toCapitalized");
    return this;
}

function SplitMethodDeclaration() {
    BuiltInMethodDeclaration.call(this, "split", new CategoryArgument(TextType.instance, "separator", new TextLiteral('" "')));
    return this;
}

function resolveBuiltInMethodDeclaration() {
    BuiltInMethodDeclaration = require("../declaration/BuiltInMethodDeclaration").BuiltInMethodDeclaration;

    ToLowerCaseMethodDeclaration.prototype = Object.create(BuiltInMethodDeclaration.prototype);
    ToLowerCaseMethodDeclaration.prototype.constructor = ToLowerCaseMethodDeclaration;

    ToLowerCaseMethodDeclaration.prototype.interpret = function(context) {
        var value = this.getValue(context).getStorableData();
        return new Text(value.toLowerCase());
    };

    ToLowerCaseMethodDeclaration.prototype.check = function(context) {
        return TextType.instance;
    };

    ToUpperCaseMethodDeclaration.prototype = Object.create(BuiltInMethodDeclaration.prototype);
    ToUpperCaseMethodDeclaration.prototype.constructor = ToUpperCaseMethodDeclaration;

    ToUpperCaseMethodDeclaration.prototype.interpret = function(context) {
        var value = this.getValue(context).getStorableData();
        return new Text(value.toUpperCase());
    };

    ToUpperCaseMethodDeclaration.prototype.check = function(context) {
        return TextType.instance;
    };

    ToCapitalizedMethodDeclaration.prototype = Object.create(BuiltInMethodDeclaration.prototype);
    ToCapitalizedMethodDeclaration.prototype.constructor = ToCapitalizedMethodDeclaration;

    ToCapitalizedMethodDeclaration.prototype.interpret = function(context) {
        var value = this.getValue(context).getStorableData();
        value = value.replace( /(^|\s)([a-z])/g , function(m, p1, p2){ return p1 + p2.toUpperCase(); } );
        return new Text(value);
    };

    ToCapitalizedMethodDeclaration.prototype.check = function(context) {
        return TextType.instance;
    };

    SplitMethodDeclaration.prototype = Object.create(BuiltInMethodDeclaration.prototype);
    SplitMethodDeclaration.prototype.constructor = SplitMethodDeclaration;

    SplitMethodDeclaration.prototype.interpret = function(context) {
        var value = this.getValue(context).getStorableData();
        var sep = context.getValue("separator").getStorableData();
        var list = value.split(sep);
        var texts = list.map(function(s) { return new Text(s); });
        return new ListValue(TextType.instance, texts);
    };

    SplitMethodDeclaration.prototype.check = function(context) {
        return TextType.instance;
    };
}



    exports.TextType = TextType;
