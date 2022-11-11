import BaseStatement from './BaseStatement';
import { Context, Transpiler } from '../runtime';
import { IType } from '../type';
import { IIterator } from '../intrinsic';
import { IValue } from '../value';
import { Section } from "../parser";
import { StatementList } from "./index";
import { IExpression } from "../expression";
import { Identifier } from "../grammar";
import { CodeWriter } from "../utils";
export default class ForEachStatement extends BaseStatement {
    v1: Identifier | null;
    v2: Identifier | null;
    source: IExpression;
    statements: StatementList;
    constructor(v1: Identifier | null, v2: Identifier | null, source: IExpression, statements: StatementList);
    locateSectionAtLine(line: number): Section;
    check(context: Context): IType;
    checkItemIterator(context: Context, elemType: IType): IType;
    interpretStatement(context: Context): IValue | null;
    interpretItemIterator(context: Context, elemType: IType): IValue;
    interpretItemIteratorNoIndex(context: Context, elemType: IType): IValue;
    getIterator(context: Context): IIterator<IValue>;
    interpretItemIteratorWithIndex(context: Context, elemType: IType): IValue;
    toDialect(writer: CodeWriter): void;
    toODialect(writer: CodeWriter): void;
    toEDialect(writer: CodeWriter): void;
    toMDialect(writer: CodeWriter): void;
    canReturn(): boolean;
    declare(transpiler: Transpiler): void;
    transpile(transpiler: Transpiler): void;
    transpileNoIndex(transpiler: Transpiler): void;
    transpileArrayNoIndex(transpiler: Transpiler): void;
    transpileIteratorNoIndex(transpiler: Transpiler): void;
    transpileWithIndex(transpiler: Transpiler): void;
    transpileArrayWithIndex(transpiler: Transpiler): void;
    transpileIteratorWithIndex(transpiler: Transpiler): void;
}
