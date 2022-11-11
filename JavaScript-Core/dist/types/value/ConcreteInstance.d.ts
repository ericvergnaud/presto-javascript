import Instance from './Instance';
import { DocumentValue, NativeInstance, IValue } from './index';
import { Context } from '../runtime';
import { Identifier, Operator } from '../grammar';
import { IStorable } from '../store';
import { ConcreteCategoryDeclaration, AttributeDeclaration } from '../declaration';
import { JsonNode } from "../json";
export default class ConcreteInstance extends Instance<Map<string, IValue>> {
    _declaration: ConcreteCategoryDeclaration;
    storable: IStorable | null;
    mutable: boolean;
    activeGetters?: Map<string, Context>;
    activeSetters?: Map<string, Context>;
    constructor(context: Context, declaration: ConcreteCategoryDeclaration);
    get declaration(): ConcreteCategoryDeclaration;
    ToMutable(): ConcreteInstance;
    getType(): import("../type").IType;
    convertToJavaScript(): this;
    getDbId(): any;
    getOrCreateDbId(): any;
    setDbId(dbId: any): void;
    getAttributeNames(): string[];
    getStorableData(): any;
    getMemberNames(): string[];
    collectStorables(set: Set<IStorable>): void;
    GetMemberValue(context: Context, member: Identifier): IValue | NativeInstance;
    getAttributeValue(context: Context, member: Identifier): IValue;
    getCategory(context: Context): NativeInstance;
    doGetAttributeValue(context: Context, member: Identifier, allowGetter: boolean): IValue | null;
    SetMemberValue(context: Context, member: Identifier, value: IValue): void;
    doSetAttributeValue(context: Context, member: Identifier, value: IValue, allowSetter: boolean): void;
    autocast(decl: AttributeDeclaration, value: IValue): IValue;
    equals(obj: any): boolean;
    equalsConcreteInstance(obj: ConcreteInstance): boolean;
    toString(): string;
    Multiply(context: Context, value: IValue): IValue;
    Divide(context: Context, value: IValue): IValue;
    IntDivide(context: Context, value: IValue): IValue;
    Modulo(context: Context, value: IValue): IValue;
    Add(context: Context, value: IValue): IValue;
    Subtract(context: Context, value: IValue): IValue;
    interpretOperator(context: Context, value: IValue, operator: Operator): IValue;
    toDocumentValue(context: Context): DocumentValue;
    toJsonNode(): JsonNode;
}
