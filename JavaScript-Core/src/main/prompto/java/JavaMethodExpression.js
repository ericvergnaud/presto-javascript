import JavaSelectorExpression from "./JavaSelectorExpression"
import { JavaExpressionList } from "./index"

export default class JavaMethodExpression extends JavaSelectorExpression {

    constructor(name, args) {
        super();
        this.name = name;
        this.args = args || new JavaExpressionList();
    }

    toString() {
        return this.parent.toString() + "." + this.name + "(" + this.args.toString() + ")";
    }

    toDialect(writer) {
        this.parent.toDialect(writer);
        writer.append('.');
        writer.append(this.name);
        writer.append('(');
        this.args.toDialect(writer);
        writer.append(')');
    }
}
