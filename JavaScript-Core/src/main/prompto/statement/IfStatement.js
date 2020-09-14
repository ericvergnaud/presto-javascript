import BaseStatement from "./BaseStatement"
import { StatementList } from "./index"
import { VoidType, BooleanType, TypeMap } from "../type/index"
import { BooleanValue } from "../value/index"
import { ObjectList } from "../utils/index"
import { EqualsExpression } from "../expression/index"

export default class IfStatement extends BaseStatement {
  
    constructor(condition, statements, elseIfs, elseStmts) {
        super();
        this.elements = new IfElementList();
        this.elements.add(new IfElement(condition, statements));
        elseIfs = elseIfs || null;
        if(elseIfs!=null) {
            this.elements.addAll(elseIfs);
        }
        elseStmts = elseStmts || null;
        if(elseStmts!=null) {
            this.elements.add(new IfElement(null, elseStmts));
        }
    }

    addAdditional(condition, statements) {
        this.elements.add(new IfElement(condition, statements));
    }

    setFinal(statements) {
        this.elements.add(new IfElement(null, statements));
    }

    check(context) {
        const types = new TypeMap();
        let section = null;
        this.elements.forEach(element => {
            const type = element.check(context);
            if(type!==VoidType.instance) {
                section = element;
                types[type.name] = type;
            }
        });
        return types.inferType(context, section);
    }

    interpret(context) {
        for(let i=0;i<this.elements.length;i++) {
            const element = this.elements[i];
            const condition = element.condition || null;
            const test = condition==null ? BooleanValue.TRUE : condition.interpret(context);
            if(test instanceof BooleanValue && BooleanValue.TRUE.equals(test)) {
                return element.interpret(context);
            }
        }
        return null;
    }

    declare(transpiler) {
        this.elements.forEach(element => {
            element.declare(transpiler);
        });
    }

    transpile(transpiler) {
        for(let i=0;i<this.elements.length;i++) {
            const element = this.elements[i];
            if (i > 0)
                transpiler.append(" else ");
            if (element.condition) {
                transpiler.append("if (");
                element.condition.transpile(transpiler);
                transpiler.append(") ");
            }
            transpiler.append("{");
            transpiler.indent();
            element.transpile(transpiler);
            transpiler.dedent();
            transpiler.append("}");
        }
        transpiler.newLine();
        return true;
    }

    toDialect(writer) {
        writer.toDialect(this);
    }

    toMDialect(writer) {
        this.toEDialect(writer);
    }

    toODialect(writer) {
        let curly = false;
        for(let i=0;i<this.elements.length; i++) {
            if(i>0) {
                if (curly)
                    writer.append(" ");
                writer.append("else ");
            }
            this.elements[i].toODialect(writer);
            curly = this.elements[i].statements.length>1;
        }
        if(curly)
            writer.newLine();
    }

    toEDialect(writer) {
        for(let i=0;i<this.elements.length; i++) {
            if(i>0)
                writer.append("else ");
            this.elements[i].toEDialect(writer);
        }
    }

    canReturn() {
        return true;
    }
}


class IfElementList extends ObjectList {

    constructor(item) {
        super();
        item = item || null;
        if (item != null) {
            this.add(item);
        }
    }
}

class IfElement extends BaseStatement {

    constructor(condition, statements) {
        super();
        this.condition = condition;
        this.statements = statements;
    }

    check(context) {
        if(this.condition) {
            const type = this.condition.check(context);
            if(type!=BooleanType.instance) {
                context.problemListener.reportError(this, "Expected a Boolean condition!");
            }
        }
        context = this.downCast(context, false);
        let statements = this.statements;
        if(!statements) {
            context.problemListener.reportError(this, "Expected a statement!");
            statements = new StatementList();
        }
        return statements.check(context, null);
    }

    declare(transpiler) {
        if(this.condition)
            this.condition.declare(transpiler);
        let context = transpiler.context;
        if(this.condition instanceof EqualsExpression)
            context = this.condition.downCast(transpiler.context, false);
        if(context!=transpiler.context)
            transpiler = transpiler.newChildTranspiler(context);
        else
            transpiler = transpiler.newChildTranspiler();
        this.statements.declare(transpiler);
    }

    transpile(transpiler) {
        let context = transpiler.context;
        if(this.condition instanceof EqualsExpression)
            context = this.condition.downCast(context, false);
        if(context!=transpiler.context)
            transpiler = transpiler.newChildTranspiler(context);
        else
            transpiler = transpiler.newChildTranspiler();
        this.statements.transpile(transpiler);
        transpiler.flush();
    }

    downCast(context, setValue) {
        const parent = context;
        if(this.condition instanceof EqualsExpression)
            context = this.condition.downCast(context, setValue);
        context = parent!=context ? context : context.newChildContext();
        return context;
    }

    interpret(context) {
        context = this.downCast(context, true);
        return this.statements.interpret(context);
    }

    toMDialect(writer) {
        this.toEDialect(writer);
    }

    toEDialect(writer) {
        let context = writer.context;
        if(this.condition!=null) {
            writer.append("if ");
            this.condition.toDialect(writer);
            context = this.downCast(context, false);
            if (context !== writer.context)
                writer = writer.newChildWriter(context);
        }
        writer.append(":").newLine().indent();
        this.statements.toDialect(writer);
        writer.dedent();
    }

    toODialect(writer) {
        let context = writer.context;
        if(this.condition!=null)
        {
            writer.append("if (");
            this.condition.toDialect(writer);
            writer.append(") ");
            context = this.downCast(context, false);
            if (context !== writer.context)
                writer = writer.newChildWriter(context);
        }
        const curly = this.statements!=null && this.statements.length>1;
        if(curly)
            writer.append("{").newLine();
        else
            writer.newLine();
        writer.indent();
        this.statements.toDialect(writer);
        writer.dedent();
        if(curly)
            writer.append("}");
    }
}

