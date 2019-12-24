var PropertyValidator = require("./PropertyValidator").PropertyValidator;
var MethodDeclarationMap = require("../runtime/Context").MethodDeclarationMap;
var MethodType = require("../type/MethodType").MethodType;
var anyfy = require("../utils/TypeUtils").anyfy;

function TypeValidator(type) {
    PropertyValidator.call(this);
    this.type = anyfy(type);
    return this;
}

TypeValidator.prototype = Object.create(PropertyValidator.prototype);
TypeValidator.prototype.constructor = TypeValidator;


TypeValidator.prototype.getType = function(context) {
    return this.type;
};


TypeValidator.prototype.validate = function(context, property) {
    var actual = this.type instanceof MethodType ? property.checkProto(context, this.type) : property.check(context);
    if(!this.type.isAssignableFrom(context, anyfy(actual)))
        context.problemListener.reportIllegalAssignment(property, this.type, actual);
};


TypeValidator.prototype.getMethodDeclarations = function(context) {
    if(this.type instanceof MethodType) {
        var decls = context.getRegisteredDeclaration(this.type.name);
        if(decls instanceof MethodDeclarationMap)
            return decls.getAll();
    }
    return PropertyValidator.constructor.getMethodDeclarations.call(this, context);
};

exports.TypeValidator = TypeValidator;