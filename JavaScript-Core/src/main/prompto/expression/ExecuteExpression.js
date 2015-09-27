var Section = require("../parser/Section").Section;
var CodeExpression = require("../expression/CodeExpression").CodeExpression;
var PrestoError = require("../error/PrestoError").PrestoError;

function ExecuteExpression(id) {
	Section.call(this);
	this.id = id;
	return this;
}


ExecuteExpression.prototype  = Object.create(Section.prototype);
ExecuteExpression.prototype.constructor = ExecuteExpression;

Object.defineProperty(ExecuteExpression.prototype, "name", {
    get : function() {
        return this.id.name;
    }
});

ExecuteExpression.prototype.toString = function() {
	return "execute: " + this.name;
};

ExecuteExpression.prototype.toDialect = function(writer) {
    writer.toDialect(this);
};

ExecuteExpression.prototype.toEDialect = function(writer) {
    writer.append("execute: ");
    writer.append(this.name);
};

ExecuteExpression.prototype.toODialect = function(writer) {
    writer.append("execute(");
    writer.append(this.name);
    writer.append(")");
};

ExecuteExpression.prototype.toSDialect = function(writer) {
    this.toODialect(writer);
};

ExecuteExpression.prototype.check = function(context) {
	try {
		var value = context.getValue(this.id);
		if(value instanceof CodeExpression) {
			return value.checkCode(context);
		} else {
			throw new SyntaxError("Expected code, got:" + value.toString());
		}
	} catch(e) {
		if(e instanceof PrestoError) {
			throw new SyntaxError(e.message);
		}
	}
};

ExecuteExpression.prototype.interpret = function(context) {
	var value = context.getValue(this.id);
	if(value instanceof CodeExpression) {
		return value.interpretCode(context);
	} else {
		throw new SyntaxError("Expected code, got:" + value.toString());
	}
};

exports.ExecuteExpression = ExecuteExpression;