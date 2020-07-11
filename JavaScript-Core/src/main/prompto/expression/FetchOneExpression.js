var Expression = require("./Expression").Expression;
var Identifier = require("../grammar/Identifier").Identifier;
var AnyType = require("../type/AnyType").AnyType;
var CategoryType = require("../type/CategoryType").CategoryType;
var CategoryDeclaration = require("../declaration/CategoryDeclaration").CategoryDeclaration;
var NullValue = require("../value/NullValue").NullValue;
var $DataStore = require("../store/DataStore").$DataStore;
var MatchOp = require("../store/MatchOp").MatchOp;
var TypeFamily = require("../store/TypeFamily").TypeFamily;
var AttributeInfo = require("../store/AttributeInfo").AttributeInfo;

function FetchOneExpression(typ, predicate, start, end) {
    Expression.call(this);
    this.typ = typ;
    this.predicate = predicate;
    this.start = start;
    this.end = end;
    return this;
}

FetchOneExpression.prototype = Object.create(Expression.prototype);
FetchOneExpression.prototype.constructor = FetchOneExpression;

FetchOneExpression.prototype.toDialect = function(writer) {
    writer.toDialect(this);
};

FetchOneExpression.prototype.toEDialect = function(writer) {
    writer.append("fetch one ");
    if(this.typ!=null) {
        if(this.typ.mutable)
            writer.append("mutable ");
        writer.append(this.typ.name);
        writer.append(" ");
    }
    writer.append("where ");
    this.predicate.toDialect(writer);
};

FetchOneExpression.prototype.toODialect = function(writer) {
    writer.append("fetch one ");
    if(this.typ!=null) {
        writer.append("(");
        if(this.typ.mutable)
            writer.append("mutable ");
        writer.append(this.typ.name);
        writer.append(") ");
    }
    writer.append("where (");
    this.predicate.toDialect(writer);
    writer.append(")");
};

FetchOneExpression.prototype.toMDialect = function(writer) {
    writer.append("fetch one ");
    if(this.typ!=null) {
        if(this.typ.mutable)
            writer.append("mutable ");
        writer.append(this.typ.name);
        writer.append(" ");
    }
    writer.append("where ");
    this.predicate.toDialect(writer);
};

FetchOneExpression.prototype.check = function(context) {
    if(this.typ!=null) {
        var decl = context.getRegisteredDeclaration(this.typ.name);
        if (decl == null || !(decl instanceof CategoryDeclaration))
            context.problemListener.reportUnknownCategory(this.typ.id);
        if(!(decl.isStorable && decl.isStorable(context)))
            context.problemListener.reportNotStorable(this.typ.id, this.typ.name);
        context = context.newInstanceContext(null, decl.getType(context), true);
    }
    this.predicate.checkQuery(context);
    return this.typ || AnyType.instance;
};

FetchOneExpression.prototype.interpret = function(context) {
    var store = $DataStore.instance;
    var query = this.buildFetchOneQuery(context, store);
    var stored = store.fetchOne (query);
    if (stored == null)
        return NullValue.instance;
    else {
        var typeName = stored.getData("category").slice(-1)[0];
        var typ = new CategoryType(new Identifier(typeName));
        if (this.typ != null)
            typ.mutable = this.typ.mutable;
        return typ.newInstanceFromStored(context, stored);
    }
};

FetchOneExpression.prototype.declare = function(transpiler) {
    transpiler.require(MatchOp);
    transpiler.require($DataStore);
    transpiler.require(AttributeInfo);
    transpiler.require(TypeFamily);
    if (this.typ != null)
        this.typ.declare(transpiler);
    if (this.predicate != null)
        this.predicate.declareQuery(transpiler);
};


FetchOneExpression.prototype.transpile = function(transpiler) {
    transpiler.append("(function() {").indent();
    this.transpileQuery(transpiler);
    transpiler.append("var stored = $DataStore.instance.fetchOne(builder.build());").newLine();
    this.transpileConvert(transpiler, "result");
    transpiler.append("return result;").dedent();
    transpiler.append("})()");
};


FetchOneExpression.prototype.transpileConvert = function(transpiler, varName) {
    transpiler.append("if(stored===null)").indent().append("return null;").dedent();
    transpiler.append("var name = stored.getData('category').slice(-1)[0];").newLine();
    transpiler.append("var type = eval(name);").newLine();
    transpiler.append("var ").append(varName).append(" = new type(null, {}, ").append(this.typ!=null && this.typ.mutable).append(");").newLine();
    transpiler.append(varName).append(".fromStored(stored);").newLine();
};


FetchOneExpression.prototype.transpileQuery = function(transpiler) {
    transpiler.append("var builder = $DataStore.instance.newQueryBuilder();").newLine();
    if (this.typ != null)
        transpiler.append("builder.verify(new AttributeInfo('category', TypeFamily.TEXT, true, null), MatchOp.CONTAINS, '").append(this.typ.name).append("');").newLine();
    if (this.predicate != null)
        this.predicate.transpileQuery(transpiler, "builder");
    if (this.typ != null && this.predicate != null)
        transpiler.append("builder.and();").newLine();
};


FetchOneExpression.prototype.buildFetchOneQuery = function(context, store) {
    var builder = store.newQueryBuilder();
    if (this.typ != null) {
        var info = new AttributeInfo("category", TypeFamily.TEXT, true, null);
        builder.verify(info, MatchOp.CONTAINS, this.typ.name);
    }
    if (this.predicate != null) {
        this.predicate.interpretQuery(context, builder);
    }
    if (this.typ != null && this.predicate != null) {
        builder.and();
    }
    return builder.build();
};

exports.FetchOneExpression = FetchOneExpression;
