import BuiltInMethodDeclaration from '../declaration/BuiltInMethodDeclaration'
import { CategoryParameter } from '../param'
import {AnyType, IntegerType, IType, VoidType} from "../type";
import {ArgumentList, Identifier} from "../grammar";
import {Context, Transpiler} from "../runtime";
import {IntegerValue, ListValue, IValue} from "../value";


export class IndexOfMethodDeclaration extends BuiltInMethodDeclaration<ListValue> {

    constructor() {
        super("indexOf", new CategoryParameter(new Identifier("value"), false, AnyType.instance));
    }

    interpret(context: Context): IValue {
        const list = this.getValue(context);
        const value = context.getValue(new Identifier("value"));
        return list.indexOfValue(value!);
    }

    check(context: Context): IType {
        return IntegerType.instance;
    }

    transpileCall(transpiler: Transpiler, args: ArgumentList): void {
        transpiler.append("indexOfValue(");
        args[0].transpile(transpiler);
        transpiler.append(")");
    }
}

export class RemoveItemMethodDeclaration extends BuiltInMethodDeclaration<ListValue> {

    constructor() {
        super("removeItem", new CategoryParameter(new Identifier("item"), false, IntegerType.instance));
    }

    interpret(context: Context): IValue | null {
        const list = this.getValue(context);
        if(!list.mutable)
            context.problemListener.reportNotMutable(new Identifier("list"), "list"); // TODO locate the incorrect code
        const item = context.getValue(new Identifier("item")) as IntegerValue;
        list.removeItem(item);
        return null;
    }

    check(context: Context): IType {
        return VoidType.instance;
    }

    transpileCall(transpiler: Transpiler, args: ArgumentList): void {
        transpiler.append("removeItem(");
        args[0].transpile(transpiler);
        transpiler.append(")");
    }
}


export class RemoveValueMethodDeclaration extends BuiltInMethodDeclaration<ListValue> {

    constructor() {
        super("removeValue", new CategoryParameter(new Identifier("value"), false, AnyType.instance));
    }

    interpret(context: Context): IValue | null {
        const list = this.getValue(context);
        if(!list.mutable)
            context.problemListener.reportNotMutable(new Identifier("list"), "list"); // TODO locate the incorrect code
        const value = context.getValue(new Identifier("value"));
        list.removeValue(value!);
        return null;
    }

    check(context: Context): IType {
        return VoidType.instance;
    }

    transpileCall(transpiler: Transpiler, args: ArgumentList): void {
        transpiler.append("removeValue(");
        args[0].transpile(transpiler);
        transpiler.append(")");
    }
}

export class AddValueMethodDeclaration extends BuiltInMethodDeclaration<ListValue> {

    constructor() {
        super("addValue", new CategoryParameter(new Identifier("value"), false, AnyType.instance));
    }

    interpret(context: Context): IValue | null {
        const list = this.getValue(context);
        if(!list.mutable)
            context.problemListener.reportNotMutable(new Identifier("list"), "list"); // TODO locate the incorrect code
        const value = context.getValue(new Identifier("value"));
        list.addValue(value!);
        return null;
    }

    check(context: Context): IType {
        return VoidType.instance;
    }

    transpileCall(transpiler: Transpiler, args: ArgumentList): void {
        transpiler.append("addValue(");
        args[0].transpile(transpiler);
        transpiler.append(")");
    }
}

export class InsertValueMethodDeclaration extends BuiltInMethodDeclaration<ListValue> {

    constructor() {
        super("insertValue", new CategoryParameter(new Identifier("value"), false, AnyType.instance),
            new CategoryParameter(new Identifier("atIndex"), false, IntegerType.instance));
    }

    interpret(context: Context): IValue | null {
        const list = this.getValue(context);
        if(!list.mutable)
            context.problemListener.reportNotMutable(new Identifier("list"), "list"); // TODO locate the incorrect code
        const value = context.getValue(new Identifier("value")) as IValue;
        const atIndex = context.getValue(new Identifier("atIndex")) as IntegerValue;
        list.insertValue(value, atIndex);
        return null;
    }

    check(context: Context): IType {
        return VoidType.instance;
    }

    transpileCall(transpiler: Transpiler, args: ArgumentList): void {
        transpiler.append("insertValue(");
        args[0].transpile(transpiler);
        transpiler.append(", ");
        args[1].transpile(transpiler);
        transpiler.append(")");
    }
}

