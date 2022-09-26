import NativeType from '../../../main/prompto/type/NativeType.ts';
import { Identifier } from '../grammar';
import { Any } from "../intrinsic";

export default class CssType extends NativeType {

    constructor() {
        super(new Identifier("Css"));
    }

    checkAdd(context: Context, section: Section, other: Type, tryReverse: boolean): Type {
        if (other === CssType.instance) {
            return this;
        } else {
            return super.checkAdd(context, section, other, tryReverse);
        }
    }

    declare(transpiler: Transpiler): void {
        // nothing to do
    }

    transpile(transpiler: Transpiler): void {
        transpiler.append("Object");
    }


    declareAdd(transpiler) {
        transpiler.require(Any);
    }

    transpileAdd(transpiler: Transpiler, other: Type, tryReverse: boolean, left: Expression, right: Expression): void {
        if (other === CssType.instance) {
            transpiler.append("Object.assign(new Any(),");
            left.transpile(transpiler);
            transpiler.append(",");
            right.transpile(transpiler);
            transpiler.append(")");
        } else
            return super.transpileAdd(transpiler, other, tryReverse, left, right);
    }

}

CssType.instance = new CssType();
