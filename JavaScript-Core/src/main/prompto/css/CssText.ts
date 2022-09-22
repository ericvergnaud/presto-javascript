import CssValue from "./CssValue";
import {CodeWriter} from "../utils";
import {Transpiler} from "../runtime";

export default class CssText implements CssValue {

    text: string;

    constructor(text: string) {
        this.text = text;
    }

    toString() {
        return this.text;
    }

    toDialect(writer: CodeWriter): void {
        writer.append(this.text);
    }

    declare(transpiler: Transpiler): void {
        // nothing to do
    }

    transpile(transpiler: Transpiler): void {
        transpiler.append(JSON.stringify(this.text));
    }
}