import { TextValue } from '../value'
import DocKey from "./DocKey";
import {Identifier} from "../grammar";
import {Context, Transpiler} from "../runtime";

export default class DocIdentifierKey implements DocKey {

    id: Identifier;

    constructor(id: Identifier) {
        this.id = id;
   }

    toString() {
        return this.id.name;
    }

    stringValue() {
        return this.id.name;
    }

    check(context: Context) {
        // nothing to do
    }

    interpret(context: Context) {
        return new TextValue(this.stringValue());
    }

    transpile(transpiler: Transpiler) {
        transpiler.append(this.id.name);
    }

}
