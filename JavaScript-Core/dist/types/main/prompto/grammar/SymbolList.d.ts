import ObjectList from '../utils/ObjectList';
import EnumSymbol from "../expression/EnumSymbol";
import { Context } from "../runtime";
import { IResource, IValue } from "../value";
import { IType } from "../type";
import { IStorable } from "../store";
import { JsonNode, JsonParent } from "../json";
import { Identifier } from "./index";
import IValueIterable from "../value/IValueIterable";
export default abstract class SymbolList<T extends EnumSymbol<any>> extends ObjectList<T> implements IValue {
    type: IType;
    mutable: boolean;
    value: any;
    constructor(symbols?: T[], symbol?: T);
    isIterable(): boolean;
    asIterable(context: Context): IValueIterable;
    toString(): string;
    Add(context: Context, other: IValue): IValue;
    And(context: Context, other: IValue): IValue;
    CompareTo(context: Context, other: IValue): number;
    Divide(context: Context, other: IValue): IValue;
    GetItemValue(context: Context, item: IValue, autoCreate?: boolean): IValue;
    GetMemberValue(context: Context, member: Identifier, autoCreate?: boolean): IValue;
    IntDivide(context: Context, other: IValue): IValue;
    Minus(context: Context): IValue;
    Modulo(context: Context, other: IValue): IValue;
    Multiply(context: Context, other: IValue): IValue;
    Not(context: Context): IValue;
    Or(context: Context, other: IValue): IValue;
    SetItemValue(context: Context, item: IValue, value: IValue): void;
    SetMemberValue(context: Context, member: Identifier, value: IValue): void;
    Subtract(context: Context, other: IValue): IValue;
    asResource(): IResource;
    collectStorables(storables: Set<IStorable>): void;
    convertToJavaScript(): any;
    equals(other: IValue): boolean;
    getStorableData(): any;
    isResource(): boolean;
    isSliceable(): boolean;
    toDocumentValue(context: Context): IValue;
    toJsonNode(): JsonNode;
    toJsonStream(context: Context, values: JsonParent, instanceId: null, fieldName: string, withType: boolean, binaries: Map<string, never> | null): void;
}
