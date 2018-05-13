var MissingType = require("./MissingType").MissingType;
var NativeType = require("./NativeType").NativeType;
var TextType = require("./TextType").TextType;
var NullType = require("./NullType").NullType;
var AnyType = require("./AnyType").AnyType;
var Identifier = require("../grammar/Identifier").Identifier;
var TextValue = require("../value/TextValue").TextValue;
var IntegerValue = require("../value/IntegerValue").IntegerValue;



function DocumentType() {
	NativeType.call(this, new Identifier("Document"));
	return this;
}

DocumentType.prototype = Object.create(NativeType.prototype);
DocumentType.prototype.constructor = DocumentType;

DocumentType.instance = new DocumentType();


DocumentType.prototype.isMoreSpecificThan = function(context, other) {
    if ((other instanceof NullType) || (other instanceof AnyType) || (other instanceof MissingType))
        return true;
    else
        return NativeType.prototype.isMoreSpecificThan.call(this, context, other);
};


DocumentType.prototype.checkMember = function(context, name) {
	return AnyType.instance;
};


DocumentType.prototype.declareMember = function(transpiler, name) {
    // nothing to do
};


DocumentType.prototype.transpileMember = function(transpiler, name) {
    if ("text"!==name) {
        transpiler.append(name);
    } else {
        ContainerType.prototype.transpileMember.call(this, transpiler, name);
    }
};


DocumentType.prototype.checkItem = function(context, itemType) {
    if(itemType===TextType.instance)
        return AnyType.instance;
    else
        throw ("text");
};

DocumentType.prototype.readJSONValue = function(context, node, parts) {
    var DocumentValue = require("../value/DocumentValue").DocumentValue;
    var instance = new DocumentValue();
    for(key in node) {
        var value = this.readJSONField(context, node[key], parts);
        instance.setMember(context, key, value);
    }
    return instance;
};

DocumentType.prototype.readJSONField = function(context, node, parts) {
    if(!node)
        return NullValue.instance;
    else if(typeof(node)===typeof(true))
        return Boolean.ValueOf(node);
    else if(typeof(node)===typeof(1))
        return new IntegerValue(node);
    else if(typeof(node)===typeof(1.0))
        return new Decimal(node)
    else if(typeof(node)===typeof(""))
        return new TextValue(node)
    else if(typeof(node)===typeof([]))
        throw new Error("list");
    else if(typeof(node)===typeof({}))
        throw new Error("dict/object");
    else
        throw new Error(typeof(node).toString());
};

exports.DocumentType = DocumentType;
