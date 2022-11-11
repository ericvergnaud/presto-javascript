import { ProblemListener } from '../problem';
import { MethodDeclarationMap, WidgetField } from './index';
import { IDeclaration, AttributeDeclaration, CategoryDeclaration, NativeCategoryDeclaration, TestMethodDeclaration } from '../declaration';
import { CategoryType, IType } from '../type';
import { ConcreteInstance, IValue, DocumentValue, Instance } from '../value';
import { IDebugger } from "../debug";
import { Identifier, INamed, NamedInstance } from "../grammar";
import { ICatalog } from "./Catalog";
import { Constructor } from "../utils/Generics";
import IMethodDeclaration from "../declaration/IMethodDeclaration";
import { IStatement } from "../statement";
export declare class Context {
    static newGlobalsContext(): Context;
    globals: Context;
    calling: Context | null;
    parent: Context | null;
    debugger: IDebugger | null;
    declarations: Map<string, IDeclaration>;
    tests: Map<string, TestMethodDeclaration>;
    instances: Map<string, NamedInstance>;
    values: Map<string, IValue>;
    nativeBindings: Map<string, NativeCategoryDeclaration>;
    problemListener: ProblemListener;
    problemListeners?: ProblemListener[];
    constructor(globals?: Context);
    isGlobalContext(): boolean;
    getCallingContext(): Context | null;
    getParentMostContext(): Context;
    getClosestInstanceContext(): InstanceContext | null;
    getParentContext(): Context | null;
    setParentContext(parent: Context): void;
    isChildOf(context: Context): boolean;
    isWithResourceContext(): boolean;
    newResourceContext(): ResourceContext;
    newLocalContext(): Context;
    newDocumentContext(doc: DocumentValue | null, isChild: boolean): DocumentContext;
    newBuiltInContext(value: IValue): BuiltInContext;
    newInstanceContext(instance: Instance<any> | null, type: CategoryType | null, isChild?: boolean): InstanceContext;
    newChildContext(): Context;
    pushProblemListener(listener: ProblemListener): void;
    popProblemListener(): void;
    getCatalog(): ICatalog;
    getLocalCatalog(): ICatalog;
    findAttribute(name: string): AttributeDeclaration | null;
    getAllAttributes(): AttributeDeclaration[];
    getRegistered(id: Identifier): INamed | null;
    getRegisteredCategoryDeclaration(id: Identifier): CategoryDeclaration<never> | null;
    getRegisteredDeclaration<T extends IDeclaration>(klass: Constructor<T>, id: Identifier): T | null;
    getLocalDeclaration<T extends IDeclaration>(klass: Constructor<T>, id: Identifier): T | null;
    registerDeclaration(declaration: IDeclaration): void;
    checkDuplicate(declaration: IDeclaration): boolean;
    unregisterDeclaration(declaration: IDeclaration): void;
    unregisterTestDeclaration(declaration: TestMethodDeclaration): void;
    unregisterMethodDeclaration(declaration: IMethodDeclaration, proto: string): void;
    registerMethodDeclaration(declaration: IMethodDeclaration): void;
    checkDuplicateMethod(declaration: IMethodDeclaration): MethodDeclarationMap | null;
    registerTestDeclaration(declaration: TestMethodDeclaration): void;
    getRegisteredTest(name: string): TestMethodDeclaration | null;
    hasTests(): boolean;
    registerNativeBinding(name: string, declaration: NativeCategoryDeclaration): void;
    getNativeBinding(name: string): NativeCategoryDeclaration | null;
    getRegisteredInstanceByName(name: string): NamedInstance | null;
    getRegisteredInstance(id: Identifier): NamedInstance | null;
    readRegisteredInstance(id: Identifier): NamedInstance | null;
    registerInstance(variable: NamedInstance, checkDuplicate: boolean): void;
    unregisterInstance(variable: INamed): void;
    getLocalInstance(id: Identifier, includeParent: boolean): NamedInstance | null;
    hasValue(id: Identifier): boolean;
    getValue(id: Identifier): IValue | null;
    readValue(id: Identifier): IValue | null;
    setValue(id: Identifier, value: IValue): void;
    writeValue(id: Identifier, value: IValue): void;
    autocast(name: string, value: IValue | null): IValue | null;
    contextForValue(id: Identifier): Context | null;
    contextForDeclaration(name: string): Context | null;
    enterMethod(method: IMethodDeclaration): void;
    leaveMethod(method: IMethodDeclaration): void;
    enterStatement(statement: IStatement): void;
    leaveStatement(statement: IStatement): void;
    terminated(): void;
    loadSingleton(type: IType): ConcreteInstance;
}
export declare class ResourceContext extends Context {
    constructor(globals?: Context);
    isWithResourceContext(): boolean;
}
export declare class InstanceContext extends Context {
    instance: Instance<any> | null;
    instanceType: CategoryType;
    widgetFields: Map<string, WidgetField> | null;
    constructor(globals: Context, instance: Instance<any> | null, type: CategoryType | null);
    getClosestInstanceContext(): InstanceContext;
    getRegistered(id: Identifier): INamed | null;
    registerWidgetField(id: Identifier, type: IType, createdBy: object): void;
    overrideWidgetFieldType(id: Identifier, type: IType, updatedBy: object): void;
    getRegisteredDeclaration<T extends IDeclaration>(klass: Constructor<T>, id: Identifier): T | null;
    readRegisteredInstance(id: Identifier): NamedInstance | null;
    contextForValue(id: Identifier): Context | null;
    getDeclaration(): CategoryDeclaration<any> | null;
    readValue(id: Identifier): IValue | null;
    writeValue(id: Identifier, value: IValue): void;
}
export declare class BuiltInContext extends Context {
    value: IValue;
    constructor(globals: Context, value: IValue);
}
export declare class DocumentContext extends Context {
    document: DocumentValue | null;
    constructor(globals: Context, document: DocumentValue | null);
    contextForValue(id: Identifier): Context | null;
    readValue(id: Identifier): IValue | null;
    writeValue(id: Identifier, value: IValue): void;
}
