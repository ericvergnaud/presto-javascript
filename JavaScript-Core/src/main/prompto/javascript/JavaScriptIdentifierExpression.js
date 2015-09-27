var JavaScriptExpression = require("./JavaScriptExpression").JavaScriptExpression;
var PrestoError = require("../error/PrestoError").PrestoError;

function JavaScriptIdentifierExpression(id) {
	JavaScriptExpression.call(this);
	this.id = id;
	return this;
}

JavaScriptIdentifierExpression.prototype = Object.create(JavaScriptExpression.prototype);
JavaScriptIdentifierExpression.prototype.constructor = JavaScriptIdentifierExpression;

JavaScriptIdentifierExpression.prototype.toString = function() {
	if(this.parent==null) {
		return this.id.name;
	} else {
		return this.parent.toString() + '.' + this.id.name;
	}
};

JavaScriptIdentifierExpression.prototype.toDialect = function(writer) {
    if(this.parent!=null) {
        this.parent.toDialect(writer);
        writer.append('.');
    }
    writer.append(this.id.name);
};


JavaScriptIdentifierExpression.prototype.interpret = function(context, module) {
    var o = this.interpret_presto(context);
    if(o!=null) {
        return o;
    }
	o = this.interpret_instance(context);
	if(o!=null) {
		return o;
	}
	o = this.interpret_module(module); // as a module import
	if(o!=null) {
		return o;
	}
	o = this.interpret_global(); // as a global declaration
	if(o!=null) {
		return o;
	}
	return null;
};

JavaScriptIdentifierExpression.prototype.interpret_presto = function(context) {
    if ("$context" == this.id.name)
        return context;
    else
        return null;
};

JavaScriptIdentifierExpression.prototype.interpret_instance = function(context) {
	if(context==null) {
		return null;
	} else {
		try {
			return context.getValue(this.id);
		} catch (e) {
			if (e instanceof PrestoError) {
				return null;
			} else {
				throw e;
			}
		}
	}
};

JavaScriptIdentifierExpression.prototype.interpret_module = function(module) {
	if(module==null) {
		return null;
	} else {
		try {
			m = module.resolve();
			o = m[this.id.name]
			if(o) {
				return o;
			} else {
				return m;
			}
		} catch (e) {
			return null;
		}
	}
};


JavaScriptIdentifierExpression.prototype.interpret_global = function() {
	try {
		return eval(this.id.name);
	} catch (e) {
		return null;
	}
};

exports.JavaScriptIdentifierExpression = JavaScriptIdentifierExpression;