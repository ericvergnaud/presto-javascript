import { ErrorListener, RecognitionException, Token } from 'antlr4';
import IProblem from "./IProblem";
import { Section } from "../parser";
import ProblemType from "./ProblemType";
import AbstractParser from "../parser/AbstractParser";
import { Identifier } from "../grammar";
import { MethodCall } from "../statement";
import { IExpression } from "../expression";
import { IType } from "../type";
export default class ProblemListener extends ErrorListener<Token> {
    problems: IProblem[];
    constructor();
    collectProblem(problem: IProblem): void;
    reportError(section: Section, message: string): void;
    reportWarning(section: Section, message: string): void;
    reportProblem(section: Section, message: string, type: ProblemType): void;
    readSection(section: Section): IProblem;
    syntaxError(recognizer: AbstractParser, offendingSymbol: Token, line: number, column: number, msg: string, e?: RecognitionException): void;
    reportDuplicate(section: Section, id: Identifier): void;
    reportInvalidAttribute(section: Section, id: Identifier): void;
    reportInvalidCategory(section: Section, id: Identifier): void;
    reportInvalid(section: Section, id: Identifier, type: string): void;
    reportUnknownAttribute(section: Section, name: string): void;
    reportUnknownCategory(section: Section, name: string): void;
    reportUnknownWidget(section: Section, name: string): void;
    reportUnknownMethod(section: Section, name: string): void;
    reportUnknownVariable(section: Section, name: string): void;
    reportUnknownAnnotation(section: Section, name: string): void;
    reportUnknownIdentifier(section: Section, name: string): void;
    reportUnknown(section: Section, name: string, type: string): void;
    reportUnknownProperty(section: Section, name: string): void;
    reportEmptyVariable(id: Identifier): void;
    reportMissingProperty(section: Section, name: string): void;
    reportMissingAttribute(section: Section, actual: string): void;
    reportSwitchMissingStatement(section: Section): void;
    reportDuplicateProperty(section: Section, name: string): void;
    reportNoMatchingPrototype(section: Section, call: string, expected: string[]): void;
    reportTooManyPrototypes(section: Section, method: MethodCall): void;
    reportCannotIterate(section: Section, source: IExpression): void;
    reportCannotSort(section: Section, source: IExpression): void;
    reportInvalidItem(section: Section, parentType: IType, itemType: IType): void;
    reportIllegalItemType(section: Section, itemType: IType, expected: IType[]): void;
    reportInvalidCast(section: Section, target: IType, actual: IType): void;
    reportIllegalAssignment(section: Section, expected: IType | Set<IType>, actual: IType): void;
    reportIllegalAnnotation(section: Section, message: string): void;
    reportIllegalValue(section: Section, message: string): void;
    reportIllegalOperation(section: Section, message: string): void;
    reportIllegalInitialize(section: Section): void;
    reportIllegalInitializeParameters(section: Section): void;
    reportIllegalWidgetConstructor(section: Section, name: string): void;
    reportIllegalAbstractCategory(section: Section, name: string, missingMethod: string): void;
    reportIllegalAbstractWidget(section: Section, name: string, missingMethod: string): void;
    reportIllegalAbstractMethodCall(section: Section, methodSignature: string): void;
    reportMissingClosingTag(section: Section, opening: string): void;
    reportInvalidClosingTag(section: Section, closing: string, opening: string): void;
    reportInvalidMember(section: Section, type: IType, name: string): void;
    reportInvalidCopySource(section: Section): void;
    reportNotAResource(section: Section): void;
    reportNotAResourceContext(section: Section): void;
    reportIncompatibleTypes(section: Section, left: IType, right: IType): void;
    reportNoSuperType(section: Section, type: IType): void;
    reportInconsistentHierarchy(section: Section, category: string, culprit: string): void;
    reportAssigningVoidType(section: Section): void;
    reportReturningVoidType(section: Section): void;
    reportIllegalReturn(section: Section): void;
    reportNotMutable(section: Section, name: string): void;
    reportNotStorable(section: Section, name: string): void;
    reportUntypedRecursiveMethod(section: Section, name: string, proto: string): void;
}
