var ObjectList = require("../utils/ObjectList").ObjectList;
var Dialect = require("../parser/Dialect").Dialect;
var ContextualExpression = require("../value/ContextualExpression").ContextualExpression;
var ArgumentAssignment = require("./ArgumentAssignment").ArgumentAssignment;

function ArgumentAssignmentList(items, item) {
	ObjectList.call(this, items || []);
	if(item)
		this.add(item);
	return this;
}

ArgumentAssignmentList.prototype = Object.create(ObjectList.prototype);
ArgumentAssignmentList.prototype.constructor = ArgumentAssignmentList;
	

ArgumentAssignmentList.prototype.findIndex = function(name) {
	for(var i=0;i<this.length;i++) {
		if(name==this[i].name) {
			return i;
		}
	}
	return -1;
};

ArgumentAssignmentList.prototype.find = function(name) {
	for(var i=0;i<this.length;i++) {
		if(name==this[i].name) {
			return this[i];
		}
	}
	return null;
};

ArgumentAssignmentList.prototype.makeAssignments = function(context, declaration) {
	var assignments = new ArgumentAssignmentList();
	for(var i=0;i<declaration.args.length;i++) {
	    var argument = declaration.args[i];
        var assignment = this.find(argument.name);
        if(assignment==null && i==0 && this.length>0 && this[0].argument==null)
            assignment = this[0];
        if(assignment==null) {
            if (argument.defaultExpression != null)
                assignments.push(new ArgumentAssignment(argument, argument.defaultExpression));
            else
                throw new SyntaxError("Missing argument:" + argument.name);
        } else {
            var expression = new ContextualExpression(context, assignment.expression);
            assignments.push(new ArgumentAssignment(argument, expression));
        }
    }
	return assignments;
};



ArgumentAssignmentList.prototype.toDialect = function(writer) {
    writer.toDialect(this);
};

ArgumentAssignmentList.prototype.toEDialect = function(writer) {
    var idx = 0;
    // anonymous argument before 'with'
    if(this.length>0 && this[0].argument==null) {
        writer.append(' ');
        this[idx++].toDialect(writer);
    }
    if(idx<this.length) {
        writer.append(" with ");
        this[idx++].toDialect(writer);
        writer.append(", ");
        while(idx<this.length-1) {
            this[idx++].toDialect(writer);
            writer.append(", ");
        }
        writer.trimLast(2);
        if(idx<this.length) {
            writer.append(" and ");
            this[idx++].toDialect(writer);
        }
    }
};

ArgumentAssignmentList.prototype.toODialect = function(writer) {
    writer.append("(");
    this.forEach(function(arg) {
        arg.toDialect(writer);
        writer.append(", ");
    });
    if(this.length>0)
        writer.trimLast(2);
    writer.append(")");
};

ArgumentAssignmentList.prototype.toMDialect = function(writer) {
    this.toODialect(writer);
};


ArgumentAssignmentList.prototype.declare = function(transpiler) {
    this.forEach(function(arg) {
        arg.declare(transpiler);
    });
};


ArgumentAssignmentList.prototype.transpile = function(transpiler) {
    transpiler.append("(");
    this.forEach(function(arg) {
        arg.transpile(transpiler);
        transpiler.append(", ");
    });
    if(this.length>0)
        transpiler.trimLast(2);
    transpiler.append(")");
};

exports.ArgumentAssignmentList = ArgumentAssignmentList;

