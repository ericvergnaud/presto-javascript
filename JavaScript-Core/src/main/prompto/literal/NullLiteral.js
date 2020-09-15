var Literal = require("./Literal").Literal;
var NullType = require("../type/NullType").NullType;
var NullValue = require("../value/NullValue").NullValue;

function NullLiteral() {
    Literal.call(this, "<null>", NullValue.instance);
    return this;
}

NullLiteral.prototype = Object.create(Literal.prototype);
NullLiteral.prototype.constructor = NullLiteral;


NullLiteral.instance = new NullLiteral();

NullLiteral.prototype.check = function(context) {
    return NullType.instance;
};

NullLiteral.prototype.interpret = function(context) {
    return NullValue.instance;
};

NullLiteral.prototype.declare = function(transpiler) {
    // nothing to do
};

NullLiteral.prototype.transpile = function(transpiler) {
    transpiler.append("null");
};

NullLiteral.prototype.toDialect = function(writer) {
    writer.toDialect(this);
};

NullLiteral.prototype.toEDialect = function(writer) {
    writer.append("nothing");
};

NullLiteral.prototype.toODialect = function(writer)
{
    writer.append("null");
};

NullLiteral.prototype.toMDialect = function(writer)
{
    writer.append("None");
}

exports.NullLiteral = NullLiteral;