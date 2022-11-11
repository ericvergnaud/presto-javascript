import PredicateExpression from './PredicateExpression';
import { StatementList } from '../statement';
import { Context, Transpiler } from '../runtime';
import { IValue } from '../value';
import { CodeWriter } from '../utils';
import { IdentifierList } from "../grammar";
import { IType } from "../type";
import { IExpression } from "./index";
export default class ArrowExpression extends PredicateExpression {
    args: IdentifierList;
    argsSuite: string | null;
    arrowSuite: string | null;
    statements?: StatementList;
    constructor(args: IdentifierList, argsSuite: string | null, arrowSuite: string | null);
    toArrowExpression(): ArrowExpression;
    toString(writer?: CodeWriter): string;
    check(context: Context, returnType?: IType | null): IType;
    interpretExpression(context: Context): IValue;
    checkFilter(context: Context, itemType: IType): IType;
    declare(transpiler: Transpiler): void;
    transpile(transpiler: Transpiler): void;
    toDialect(writer: CodeWriter): void;
    filteredToDialect(writer: CodeWriter, source: IExpression): void;
    containsToDialect(writer: CodeWriter): void;
    bodyToDialect(writer: CodeWriter): void;
    argstoDialect(writer: CodeWriter): void;
    setExpression(expression: IExpression): void;
    registerArrowArgs(context: Context, itemType: IType): Context;
    getFilter(context: Context, itemType: IType): (o: IValue) => boolean;
    declareFilter(transpiler: Transpiler, itemType: IType): void;
    transpileFilter(transpiler: Transpiler, itemType: IType): void;
    getSortedComparator(context: Context, itemType: IType, descending: boolean): (o1: IValue, o2: IValue) => number;
    getSortedComparator1Arg(context: Context, itemType: IType, descending: boolean): (o1: IValue, o2: IValue) => number;
    getSortedComparator2Args(context: Context, itemType: IType, descending: boolean): (o1: IValue, o2: IValue) => number;
    transpileSortedComparator(transpiler: Transpiler, itemType: IType, descending: boolean): void;
    transpileSortedComparator1Arg(transpiler: Transpiler, itemType: IType, descending: boolean): void;
    transpileSortedComparator2Args(transpiler: Transpiler, itemType: IType, descending: boolean): void;
}
