var SimpleStatement = require("./SimpleStatement").SimpleStatement;
var ResourceType = require("../type/ResourceType").ResourceType;
var Variable = require("../runtime/Variable").Variable;
var VoidType = require("../type/VoidType").VoidType;

function AssignVariableStatement(id, expression) {
	SimpleStatement.call(this);
	this.id = id;
	this.expression = expression;
	return this;
}


AssignVariableStatement.prototype = Object.create(SimpleStatement.prototype);
AssignVariableStatement.prototype.constructor = AssignVariableStatement;

Object.defineProperty(AssignVariableStatement.prototype, "name", {
    get : function() {
        return this.id.name;
    }
});

AssignVariableStatement.prototype.toDialect = function(writer) {
    writer.append(this.name);
    writer.append(" = ");
    this.expression.toDialect(writer);
};

AssignVariableStatement.prototype.checkResource = function(context) {
	var type = this.expression.check(context);
	if(!(type instanceof ResourceType)) {
		throw new SyntaxError("Not a resource!");
	}
	var actual = context.getRegisteredValue(this.name);
	if(actual==null) {
		context.registerValue(new Variable(this.id, type));
	} else {
		// need to check type compatibility
		var actualType = actual.getType(context);
        actualType.checkAssignableFrom(context, type);
	}
	return VoidType.instance;
};

AssignVariableStatement.prototype.equals = function(obj) {
	if(obj==this) {
		return true;
	}
	if(!(obj instanceof AssignVariableStatement)) {
		return false;
	}
	return this.name==obj.name && this.expression==obj.expression;
};

AssignVariableStatement.prototype.check = function(context) {
	var actual = context.getRegisteredValue(this.name);
	if(actual==null) {
        var actualType = this.expression.check(context);
		context.registerValue(new Variable(this.name, actualType));
	} else {
		// need to check type compatibility
		var actualType = actual.getType(context);
		var newType = expression.check(context);
        actualType.checkAssignableFrom(context, newType);
	}
	return VoidType.instance;
};

AssignVariableStatement.prototype.interpret = function(context) {
	if(context.getRegisteredValue(this.name)==null) {
        var actualType = this.expression.check(context);
		context.registerValue(new Variable(this.id, actualType));
	}
	context.setValue(this.id, this.expression.interpret(context));
	return null;
};


AssignVariableStatement.prototype.transpile = function(transpiler) {
    if(transpiler.context.getRegisteredValue(this.name)==null)
        transpiler.append("var ");
    transpiler.append(this.name).append(" = ");
    this.expression.transpile(transpiler);
};


exports.AssignVariableStatement = AssignVariableStatement;