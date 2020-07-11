var Expression = require("./Expression").Expression;
var CodeWriter = require("../utils/CodeWriter").CodeWriter;
var Dialect = require("../parser/Dialect").Dialect;
var BooleanValue = require("../value/BooleanValue").BooleanValue;

function AndExpression(left, right) {
    Expression.call(this);
    this.left = left;
    this.right = right;
    return this;
}

AndExpression.prototype = Object.create(Expression.prototype);
AndExpression.prototype.constructor = AndExpression;

AndExpression.prototype.toString = function() {
    return this.left.toString() + " and " + this.right.toString();
};

AndExpression.prototype.operatorToDialect = function(dialect) {
    return dialect==Dialect.O ? " && " : " and ";
};

AndExpression.prototype.toEDialect = function(writer) {
    this.left.toDialect(writer);
    writer.append(" and ");
    this.right.toDialect(writer);
};

AndExpression.prototype.toODialect = function(writer) {
    this.left.toDialect(writer);
    writer.append(" && ");
    this.right.toDialect(writer);
};

AndExpression.prototype.toMDialect = function(writer) {
    this.left.toDialect(writer);
    writer.append(" and ");
    this.right.toDialect(writer);
};


AndExpression.prototype.check = function(context) {
    var lt = this.left.check(context);
    var rt = this.right.check(context);
    return lt.checkAnd(context, rt);
};


AndExpression.prototype.checkQuery = function(context) {
    if (!this.left["checkQuery"]) {
        context.problemListener.reportIllegalOperation(this, "Not a predicate: " + this.left.toString());
        return;
    }
    this.left.checkQuery(context);
    if (!this.right["checkQuery"]) {
        context.problemListener.reportIllegalOperation(this, "Not a predicate: " + this.right.toString());
        return;
    }
    this.right.checkQuery(context);
};


AndExpression.prototype.interpret = function(context) {
    var lval = this.left.interpret(context);
    if(lval instanceof BooleanValue && !lval.value)
        return lval;
    var rval = this.right.interpret(context);
    return lval.And(rval);
};


AndExpression.prototype.declare = function(transpiler) {
    this.left.declare(transpiler);
    this.right.declare(transpiler);
};


AndExpression.prototype.transpile = function(transpiler) {
    this.left.transpile(transpiler);
    transpiler.append(" && ");
    this.right.transpile(transpiler);
};

AndExpression.prototype.interpretAssert = function(context, test) {
    var lval = this.left.interpret(context);
    var rval = lval;
    if(lval instanceof BooleanValue && lval.value)
        rval = this.right.interpret(context);
    if(rval==BooleanValue.TRUE)
        return true;
    var expected = this.getExpected(context, test.dialect);
    var actual = lval.toString() + this.operatorToDialect(test.dialect) + rval.toString();
    test.printFailedAssertion(context, expected, actual);
    return false;
};

AndExpression.prototype.getExpected = function(context, dialect, escapeMode) {
    var writer = new CodeWriter(dialect, context);
    writer.escapeMode = escapeMode;
    this.toDialect(writer);
    return writer.toString();
};


AndExpression.prototype.transpileFound = function(transpiler, dialect) {
    transpiler.append("(");
    this.left.transpile(transpiler);
    transpiler.append(") + '").append(this.operatorToDialect(dialect)).append("' + (");
    this.right.transpile(transpiler);
    transpiler.append(")");
};



AndExpression.prototype.interpretQuery = function(context, query) {
    if (!this.left["interpretQuery"])
        context.problemListener.reportIllegalOperation(this, "Not a predicate: " + this.left.toString());
    this.left.interpretQuery(context, query);
    if (!this.right["interpretQuery"])
        context.problemListener.reportIllegalOperation(this, "Not a predicate: " + this.right.toString());
    this.right.interpretQuery(context, query);
    query.and();
};


AndExpression.prototype.declareQuery = function(transpiler) {
    this.left.declareQuery(transpiler);
    this.right.declareQuery(transpiler);
};


AndExpression.prototype.transpileQuery = function(transpiler, builderName) {
    this.left.transpileQuery(transpiler, builderName);
    this.right.transpileQuery(transpiler, builderName);
    transpiler.append(builderName).append(".and();").newLine();
};

exports.AndExpression = AndExpression;

