import BaseExpression from './BaseExpression';
import { IAssertion, IExpression, IPredicate } from './index';
import { EqOp, Identifier } from '../grammar';
import { MatchOp, IQueryBuilder } from '../store';
import { Context, Transpiler } from '../runtime';
import { IType } from '../type';
import { IValue } from '../value';
import { CodeWriter } from '../utils';
import { TestMethodDeclaration } from "../declaration";
import { Dialect } from "../parser";
export default class EqualsExpression extends BaseExpression implements IPredicate, IAssertion {
    left: IExpression;
    operator: EqOp;
    right: IExpression;
    constructor(left: IExpression, operator: EqOp, right: IExpression);
    toString(): string;
    toDialect(writer: CodeWriter): void;
    check(context: Context): IType;
    checkOperator(context: Context, lt: IType, rt: IType): IType;
    interpretExpression(context: Context): IValue;
    interpretValues(context: Context, lval: IValue, rval: IValue): IValue;
    contains(context: Context, lval: IValue, rval: IValue): boolean;
    roughly(context: Context, lval: IValue, rval: IValue): boolean;
    areEqual(context: Context, lval: IValue, rval: IValue): boolean;
    isA(context: Context, lval: IValue, rval: IValue): boolean;
    downcast(context: Context, setValue: boolean): Context;
    readLeftId(): Identifier | null;
    interpretAssert(context: Context, test: TestMethodDeclaration): boolean;
    checkQuery(context: Context): IType;
    interpretQuery(context: Context, query: IQueryBuilder): void;
    getMatchOp(): MatchOp;
    declare(transpiler: Transpiler): void;
    transpile(transpiler: Transpiler): void;
    transpileFound(transpiler: Transpiler, dialect: Dialect): void;
    getExpected(context: Context, dialect: Dialect, escapeMode: number): string;
    transpileRoughly(transpiler: Transpiler): void;
    transpileIs(transpiler: Transpiler): void;
    transpileIsNot(transpiler: Transpiler): void;
    transpileEquals(transpiler: Transpiler): void;
    transpileNotEquals(transpiler: Transpiler): void;
    transpileContains(transpiler: Transpiler): void;
    transpileNotContains(transpiler: Transpiler): void;
    transpileIsNotA(transpiler: Transpiler): void;
    transpileIsA(transpiler: Transpiler): void;
    declareQuery(transpiler: Transpiler): void;
    transpileQuery(transpiler: Transpiler, builderName: string): void;
    checkAssert(context: Context): Context;
}
