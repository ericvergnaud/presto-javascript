var Section = require("../parser/Section").Section;
var Variable = require("../runtime/Variable").Variable;
var Identifier = require("../grammar/Identifier").Identifier;
var IteratorType = require("../type/IteratorType").IteratorType;
var IterableValue = require("../value/IterableValue").IterableValue;

function IteratorExpression(name, source, expression) {
    Section.call(this);
    this.name = name;
    this.source = source;
    this.expression = expression;
    return this;
}

IteratorExpression.prototype = Object.create(Section.prototype);
IteratorExpression.prototype.constructor = IteratorExpression;


IteratorExpression.prototype.check = function(context) {
    var elemType = this.source.check(context).checkIterator(context);
    var child = context.newChildContext();
    context.registerValue(new Variable(this.name, elemType));
    var itemType = this.expression.check(child);
    return new IteratorType(itemType);
};


IteratorExpression.prototype.interpret = function(context) {
    var elemType = this.source.check(context).checkIterator(context);
    var items = this.source.interpret(context);
    var length = items.getMemberValue(context, new Identifier("count"), false);
    var iterator = this.getIterator(context, items);
    return new IterableValue(context, this.name, elemType, iterator, length, this.expression);
};


IteratorExpression.prototype.declare = function(transpiler) {
    var sourceType = this.source.check(transpiler.context);
    sourceType.declareIterator(transpiler, this.name, this.expression);
};


IteratorExpression.prototype.transpile = function(transpiler) {
    var sourceType = this.source.check(transpiler.context);
    this.source.transpile(transpiler);
    sourceType.transpileIterator(transpiler, this.name, this.expression);
};


IteratorExpression.prototype.getIterator = function(context, src) {
    if (src.getIterator)
        return src.getIterator();
    else
        throw new InternalError("Should never get there!");
};

IteratorExpression.prototype.toDialect = function(writer) {
    writer.toDialect(this);
};

IteratorExpression.prototype.toMDialect = function(writer) {
    this.expression.toDialect(writer);
    writer.append(" for ");
    writer.append(this.name.toString());
    writer.append(" in ");
    this.source.toDialect(writer);
};

IteratorExpression.prototype.toODialect = function(writer) {
    this.expression.toDialect(writer);
    writer.append(" for each ( ");
    writer.append(this.name.toString());
    writer.append(" in ");
    this.source.toDialect(writer);
    writer.append(" )");
};

IteratorExpression.prototype.toEDialect = function(writer) {
    this.expression.toDialect(writer);
    writer.append(" for each ");
    writer.append(this.name.toString());
    writer.append(" in ");
    this.source.toDialect(writer);
};

exports.IteratorExpression = IteratorExpression;
