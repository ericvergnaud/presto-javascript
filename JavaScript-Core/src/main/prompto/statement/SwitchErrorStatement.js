var BaseSwitchStatement = require("./BaseSwitchStatement").BaseSwitchStatement;
var ErrorVariable = require("../runtime/ErrorVariable").ErrorVariable;
var Identifier = require("../grammar/Identifier").Identifier;
var EnumeratedCategoryType = require("../type/EnumeratedCategoryType").EnumeratedCategoryType;
var VoidType = require("../type/VoidType").VoidType;
var ExecutionError = require("../error/ExecutionError").ExecutionError;

function SwitchErrorStatement(errorId, statements, handlers, anyStmts, alwaysStmts) {
	BaseSwitchStatement.call(this, handlers, anyStmts);
	this.errorId = errorId;
	this.statements = statements || null;
	this.alwaysInstructions = alwaysStmts || null;
	return null;
}

SwitchErrorStatement.prototype = Object.create(BaseSwitchStatement.prototype);
SwitchErrorStatement.prototype.constructor = SwitchErrorStatement;

SwitchErrorStatement.prototype.checkSwitchCasesType = function(context) {
	var local = context.newLocalContext();
	local.registerValue(new ErrorVariable(this.errorId));
	BaseSwitchStatement.prototype.checkSwitchCasesType.call(this, local);
};

SwitchErrorStatement.prototype.checkSwitchType = function(context) {
	return new EnumeratedCategoryType(new Identifier("Error"));
};

SwitchErrorStatement.prototype.collectReturnTypes = function(context, types) {
	var type = this.statements.check(context, null);
	if(type!=VoidType.instance) {
		types[type.name] = type;
	}
	var local = context.newLocalContext();
	local.registerValue(new ErrorVariable(this.errorId));
	BaseSwitchStatement.prototype.collectReturnTypes.call(this, local, types);
	if(this.alwaysInstructions!=null) {
		type = this.alwaysInstructions.check(context, null);
		if(type!=VoidType.instance) {
			types[type.name] = type;
		}
	}
};

SwitchErrorStatement.prototype.interpret = function(context) {
	var result = null;
	try {
		result = this.statements.interpret(context);
	} catch ( e) {
		if(e instanceof ExecutionError) {
			var switchValue = this.populateError(e, context);
			result = this.interpretSwitch(context, switchValue, e);
		} else {
			throw e;
		}
	} finally {
		if(this.alwaysInstructions!=null) {
			this.alwaysInstructions.interpret(context);
		}
	}
	return result;
};

SwitchErrorStatement.prototype.populateError = function(e, context) {
	var error = e.getExpression(context);
	if(error==null) {
		var args = new ArgumentAssignmentList();
		args.add(new ArgumentAssignment(new UnresolvedArgument("name"), new TextLiteral(typeof(e))));
		args.add(new ArgumentAssignment(new UnresolvedArgument("text"), new TextLiteral(e.message)));
		error = new ConstructorExpression(new CategoryType("Error"), args);
	}
	if(context.getRegisteredValue(this.errorId)==null) {
		context.registerValue(new ErrorVariable(this.errorId));
	}
	if(error.interpret) {
		error = error.interpret(context);
	}
	context.setValue(this.errorId, error);
	return error;
};

SwitchErrorStatement.prototype.toDialect = function(writer) {
    writer = writer.newLocalWriter();
    writer.context.registerValue(new ErrorVariable(this.errorId));
    BaseSwitchStatement.prototype.toDialect.call(this, writer);
};

SwitchErrorStatement.prototype.toODialect = function(writer) {
    writer.append("try (");
    writer.append(this.errorId.name);
    writer.append(") {\n");
    writer.indent();
    this.statements.toDialect(writer);
    writer.dedent();
    writer.append("} ");
    this.switchCases.forEach(function(switchCase) {
        switchCase.catchToODialect(writer);
    });
    if(this.defaultCase!=null) {
        writer.append("catch(any) {\n");
        writer.indent();
        this.defaultCase.toDialect(writer);
        writer.dedent();
        writer.append("}");
    }
    if(this.alwaysInstructions!=null) {
        writer.append("finally {\n");
        writer.indent();
        this.alwaysInstructions.toDialect(writer);
        writer.dedent();
        writer.append("}");
    }
    writer.newLine();
}

SwitchErrorStatement.prototype.toMDialect = function(writer) {
    writer.append("try ");
    writer.append(this.errorId.name);
    writer.append(":\n");
    writer.indent();
    this.statements.toDialect(writer);
    writer.dedent();
    this.switchCases.forEach(function(switchCase) {
        switchCase.catchToPDialect(writer);
    });
    if(this.defaultCase!=null) {
        writer.append("except:\n");
        writer.indent();
        this.defaultCase.toDialect(writer);
        writer.dedent();
    }
    if(this.alwaysInstructions!=null) {
        writer.append("finally:\n");
        writer.indent();
        this.alwaysInstructions.toDialect(writer);
        writer.dedent();
    }
    writer.newLine();
}

SwitchErrorStatement.prototype.toEDialect = function(writer) {
    writer.append("switch on ");
    writer.append(this.errorId.name);
    writer.append(" doing:\n");
    writer.indent();
    this.statements.toDialect(writer);
    writer.dedent();
    this.switchCases.forEach(function(switchCase) {
        switchCase.catchToEDialect(writer);
    });
    if(this.defaultCase!=null) {
        writer.append("when any:\n");
        writer.indent();
        this.defaultCase.toDialect(writer);
        writer.dedent();
    }
    if(this.alwaysInstructions!=null) {
        writer.append("always:\n");
        writer.indent();
        this.alwaysInstructions.toDialect(writer);
        writer.dedent();
    }
}

SwitchErrorStatement.prototype.declare = function(transpiler) {
    this.statements.declare(transpiler);
    transpiler = transpiler.newLocalTranspiler();
    transpiler.context.registerValue(new ErrorVariable(this.errorId));
    this.declareSwitch(transpiler);
};



SwitchErrorStatement.prototype.transpile = function(transpiler) {
    transpiler.append("try {").indent();
    this.statements.transpile(transpiler);
    transpiler.dedent().append("} catch(").append(this.errorId.name).append(") {").indent();
    transpiler = transpiler.newLocalTranspiler();
    transpiler.context.registerValue(new ErrorVariable(this.errorId));
    transpiler.append("switch(translateError(").append(this.errorId.name).append(")) {").indent();
    this.switchCases.forEach(function(switchCase) {
        switchCase.transpileError(transpiler);
    }, this);
    if(this.defaultCase!=null) {
        transpiler.append("default:").indent();
        this.defaultCase.transpile(transpiler);
        transpiler.dedent();
    }
    transpiler.dedent().append("}");
    if(this.alwaysInstructions) {
        transpiler.append(" finally {").indent();
        this.alwaysInstructions.transpile(transpiler);
        transpiler.dedent().append("}");
    }
    transpiler.dedent().append("}");
    transpiler.flush();
    return true;
};


exports.SwitchErrorStatement = SwitchErrorStatement;
