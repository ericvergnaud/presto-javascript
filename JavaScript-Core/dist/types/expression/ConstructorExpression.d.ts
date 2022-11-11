import BaseExpression from './BaseExpression';
import { IExpression } from '../expression';
import { ArgumentList, Argument } from '../grammar';
import { CategoryType, IType } from '../type';
import { ConcreteWidgetDeclaration, NativeWidgetDeclaration, NativeCategoryDeclaration, CategoryDeclaration } from '../declaration';
import { CodeWriter } from '../utils';
import { Context, Transpiler } from "../runtime";
import { DocumentValue, Instance, IValue } from "../value";
export default class ConstructorExpression extends BaseExpression {
    type: CategoryType;
    copyFrom: IExpression | null;
    args: ArgumentList | null;
    checked?: boolean;
    constructor(type: CategoryType, copyFrom: IExpression | null, args: ArgumentList | null);
    checkFirstHomonym(context: Context, decl: CategoryDeclaration<any>): void;
    toDialect(writer: CodeWriter): void;
    toMDialect(writer: CodeWriter): void;
    toODialect(writer: CodeWriter): void;
    toEDialect(writer: CodeWriter): void;
    check(context: Context): IType;
    checkConstructable(context: Context, declaration: CategoryDeclaration<any>): void;
    getActualType(context: Context, declaration: CategoryDeclaration<any>): IType;
    checkCopyFrom(context: Context): void;
    checkArguments(context: Context, declaration: CategoryDeclaration<any>): void;
    checkArgument(context: Context, declaration: CategoryDeclaration<any>, argument: Argument): void;
    interpretExpression(context: Context): IValue;
    copyFromInstance(context: Context, decl: CategoryDeclaration<any>, instance: Instance<unknown>, copyFrom: Instance<unknown>): void;
    copyFromDocument(context: Context, instance: Instance<unknown>, copyFrom: DocumentValue): void;
    declare(transpiler: Transpiler): void;
    transpile(transpiler: Transpiler): void;
    transpileNativeWidget(transpiler: Transpiler, decl: NativeWidgetDeclaration): void;
    transpileConcreteWidget(transpiler: Transpiler, decl: ConcreteWidgetDeclaration): void;
    transpileNative(transpiler: Transpiler, decl: NativeCategoryDeclaration): void;
    transpileConcrete(transpiler: Transpiler): void;
    transpileAssignments(transpiler: Transpiler): void;
}
