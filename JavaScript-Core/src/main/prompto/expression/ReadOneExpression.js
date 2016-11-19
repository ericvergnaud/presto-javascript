var ResourceType = require("../type/ResourceType").ResourceType;
var ResourceContext = require("../runtime/Context").ResourceContext;
var NullReferenceError = require("../error/NullReferenceError").NullReferenceError;
var InternalError = require("../error/InternalError").InternalError;
var InvalidResourceError = require("../error/InvalidResourceError").InvalidResourceError;
var TextType = require("../type/TextType").TextType;
var Text = require("../value/Text").Text;

function ReadOneExpression(resource) {
	this.resource = resource;
	return this;
}

ReadOneExpression.prototype.toString = function() {
	return "read one from " + this.resource.toString();
};

ReadOneExpression.prototype.toDialect = function(writer) {
    writer.append("read one from ");
    this.resource.toDialect(writer);
};

ReadOneExpression.prototype.check = function(context) {
    if(!(context instanceof ResourceContext))
        context.problemListener.reportNotAResourceContext(this.resource);
    var sourceType = this.resource.check(context);
	if(!(sourceType instanceof ResourceType))
        context.problemListener.reportNotAResource(this.resource);
	return TextType.instance;
};

ReadOneExpression.prototype.interpret = function(context) {
    if(!(context instanceof ResourceContext))
        context.problemListener.reportNotAResourceContext(this.resource);
    var res = this.resource.interpret(context);
	if(res==null) {
		throw new NullReferenceError();
	}
	if(!(res.isReadable)) {
		throw new InternalError("Illegal read source: " + o);
	}
	if(!res.isReadable()) {
		throw new InvalidResourceError("Not readable");
	}
    var s = res.readLine();
    return new Text(s);
};

exports.ReadOneExpression = ReadOneExpression;