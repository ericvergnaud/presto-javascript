var ConcreteCategoryDeclaration = require("./ConcreteCategoryDeclaration").ConcreteCategoryDeclaration;
var CategoryType = require("../type/CategoryType").CategoryType;
var IdentifierList = require("../grammar/IdentifierList").IdentifierList;


function ConcreteWidgetDeclaration(name, derivedFrom, methods) {
    derivedFrom = derivedFrom==null ? null : new IdentifierList(derivedFrom);
    ConcreteCategoryDeclaration.call(this, name, null, derivedFrom, methods);
    return this;
}

ConcreteWidgetDeclaration.prototype = Object.create(ConcreteCategoryDeclaration.prototype);
ConcreteWidgetDeclaration.prototype.constructor = ConcreteWidgetDeclaration;


ConcreteWidgetDeclaration.prototype.isWidget = function(context) {
    return true;
};

ConcreteWidgetDeclaration.prototype.getProperties = function(context) {
    if(typeof(this.properties)=="undefined") {
        this.properties = null;
        // don't bubble up buried problems
        const savedProblems = context.problemListener.problems;
        context.problemListener.problems = [];
        try {
            this.check(context);
        } finally {
            context.problemListener.problems = savedProblems;
        }
    }
    return this.properties;
};

ConcreteWidgetDeclaration.prototype.getDeclarationType = function() {
    return "Widget";
};


ConcreteWidgetDeclaration.prototype.categoryTypeToEDialect = function(writer) {
    if(this.derivedFrom==null)
        writer.append("widget");
    else
        this.derivedFrom.toDialect(writer, true);
};


ConcreteWidgetDeclaration.prototype.categoryTypeToODialect = function(writer) {
    writer.append("widget");
};


ConcreteWidgetDeclaration.prototype.categoryTypeToMDialect = function(writer) {
    writer.append("widget");
};


ConcreteWidgetDeclaration.prototype.declareRoot = function(transpiler) {
    // nothing to do
};


ConcreteWidgetDeclaration.prototype.transpile = function(transpiler) {
    var parent = this.derivedFrom!=null && this.derivedFrom.length>0 ? this.derivedFrom[0] : null;
    transpiler.append("function ").append(this.name).append("() {");
    transpiler.indent();
    this.transpileGetterSetterAttributes(transpiler);
    this.transpileSuperConstructor(transpiler);
    this.transpileLocalAttributes(transpiler);
    transpiler.append("return this;");
    transpiler.dedent();
    transpiler.append("}");
    transpiler.newLine();
    if(parent!=null)
        transpiler.append(this.name).append(".prototype = Object.create(").append(parent.toString()).append(".prototype);").newLine();
    else
        transpiler.append(this.name).append(".prototype = Object.create(React.Component.prototype);").newLine();
    transpiler.append(this.name).append(".prototype.constructor = ").append(this.name).append(";").newLine();
    transpiler = transpiler.newInstanceTranspiler(new CategoryType(this.id));
    this.processAnnotations(transpiler.context, true);
    this.transpileLoaders(transpiler);
    this.transpileMethods(transpiler);
    this.transpileGetterSetters(transpiler);
    transpiler.flush();
    return true;
};


ConcreteWidgetDeclaration.prototype.transpileRootConstructor = function(transpiler) {
    return transpiler.append("React.Component.call(this);");
};

exports.ConcreteWidgetDeclaration = ConcreteWidgetDeclaration;
