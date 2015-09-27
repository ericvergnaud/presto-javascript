var SimpleStatement = require("./SimpleStatement").SimpleStatement;
var CategoryType = require("../type/CategoryType").CategoryType;
var UserError = require("../error/UserError").UserError;
var Dialect = require("../parser/Dialect").Dialect;
var Identifier = require("../grammar/Identifier").Identifier;

function RaiseStatement(expression) {
	SimpleStatement.call(this);
	this.expression = expression;
	return this;
}

RaiseStatement.prototype = Object.create(SimpleStatement.prototype);
RaiseStatement.prototype.constructor = RaiseStatement;

RaiseStatement.prototype.toString = function() {
	return "raise " + this.expression.toString();
};

RaiseStatement.prototype.equals = function(obj) {
	if(obj==this) {
		return true;
	} else if(!(obj instanceof RaiseStatement)) {
		return false;
	} else {
		return this.expression.equals(other.expression);
	}
};

RaiseStatement.prototype.check = function(context) {
	var type = this.expression.check(context);
	if(!type.isAssignableTo(context, new CategoryType(new Identifier("Error")))) {
		throw new SyntaxError(type.name + " does not extend Error");
	}
	return type;
};

RaiseStatement.prototype.interpret = function(context) {
	throw new UserError(this.expression);
};

RaiseStatement.prototype.toDialect = function(writer) {
    switch(writer.dialect) {
        case Dialect.E:
        case Dialect.S:
            writer.append("raise ");
            break;
        case Dialect.O:
            writer.append("throw ");
            break;
    }
    this.expression.toDialect(writer);
};

exports.RaiseStatement = RaiseStatement;