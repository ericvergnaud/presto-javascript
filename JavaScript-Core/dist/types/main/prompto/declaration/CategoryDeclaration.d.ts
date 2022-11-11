import BaseDeclaration from './BaseDeclaration';
import { AbstractMethodDeclaration, IMethodDeclaration } from '../declaration';
import { CategoryType, IType } from '../type';
import { Context, MethodDeclarationMap } from "../runtime";
import { Annotation, Identifier, IdentifierList } from "../grammar";
import { IDeclarationInfo } from "../runtime/Catalog";
import { Instance } from "../value";
import { IStored } from "../store";
import { Section } from "../parser";
import { CodeWriter } from "../utils";
import { ITranspilable } from "../runtime";
import { PropertyMap } from "../property";
export default abstract class CategoryDeclaration<T> extends BaseDeclaration {
    attributes: IdentifierList | null;
    derivedFrom: IdentifierList | null;
    storable: boolean;
    constructor(id: Identifier, attributes?: IdentifierList | null, derivedFrom?: IdentifierList | null);
    toDeclarationInfo(): IDeclarationInfo;
    getDeclarationType(): string;
    isWidget(context: Context): boolean;
    getPageWidgetOf(): string | null;
    isStorable(context: Context): boolean;
    isDerivedFromStorable(context: Context): boolean;
    abstract newInstance(context: Context): Instance<T>;
    newInstanceFromStored(context: Context, stored: IStored): Instance<T>;
    getAllCategories(context: Context): string[];
    collectCategories(context: Context, result: Set<string>): void;
    getAllAttributes(context: Context, section: Section): Set<Identifier> | null;
    protected collectAllAttributes(context: Context, section: Section, result: Set<Identifier>): void;
    protected collectInheritedAttributes(context: Context, section: Section, result: Set<Identifier>): void;
    private collectLocalAttributes;
    getAllMethods(context: Context, section: Section): Map<string, MethodDeclarationMap>;
    collectAllMethods(context: Context, section: Section, maps: Map<string, MethodDeclarationMap>): void;
    collectInheritedMethods(context: Context, section: Section, maps: Map<string, MethodDeclarationMap>): void;
    abstract getMemberMethodsMap(context: Context, id: Identifier): MethodDeclarationMap;
    abstract getLocalMethods(): IMethodDeclaration[];
    collectLocalMethods(context: Context, section: Section, maps: Map<string, MethodDeclarationMap>): void;
    getAbstractMethods(context: Context, section: Section): AbstractMethodDeclaration[];
    register(context: Context): void;
    abstract registerMethods(context: Context): void;
    check(context: Context): IType;
    getType(context: Context): CategoryType;
    hasAttribute(context: Context, id: Identifier): boolean;
    abstract hasMethod(context: Context, id: Identifier): boolean;
    isDerivedFrom(context: Context, categoryType: IType): boolean;
    getAllAnnotations(context: Context): Annotation[];
    processAnnotations(context: Context, processDerivedFrom: boolean): void;
    checkConstructorContext(context: Context): void;
    toDialect(writer: CodeWriter): void;
    abstract categoryTypeToEDialect(writer: CodeWriter): void;
    protoToEDialect(writer: CodeWriter, hasMethods: boolean, hasBindings: boolean): void;
    methodsToEDialect(writer: CodeWriter, methods: IMethodDeclaration[]): void;
    methodsToODialect(writer: CodeWriter, methods: IMethodDeclaration[]): void;
    allToODialect(writer: CodeWriter, hasBody: boolean): void;
    abstract categoryTypeToODialect(writer: CodeWriter): void;
    abstract bodyToODialect(writer: CodeWriter): void;
    categoryExtensionToODialect(writer: CodeWriter): void;
    protoToMDialect(writer: CodeWriter, derivedFrom: IdentifierList | null): void;
    abstract categoryTypeToMDialect(writer: CodeWriter): void;
    ensureDeclarationOrder(context: Context, list: ITranspilable[], set: Set<ITranspilable>): void;
    getProperties(context: Context): PropertyMap | null;
}
