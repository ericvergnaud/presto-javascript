import { ProblemListener, ProblemRaiser } from '../problem'
import { MethodDeclarationMap, Variable, LinkedValue, WidgetField } from './index'
import {
    Declaration, AttributeDeclaration,
    EnumeratedCategoryDeclaration, EnumeratedNativeDeclaration,
    CategoryDeclaration, NativeCategoryDeclaration, SingletonCategoryDeclaration,
    TestMethodDeclaration
} from '../declaration'
import {DecimalType, MethodType, Type} from '../type'
import {IntegerValue, DecimalValue, ClosureValue, ConcreteInstance, Value, DocumentValue, Instance} from '../value'
import { InternalError } from '../error'
import { Debugger } from "../debug";
import {Identifier, Named, NamedInstance } from "../grammar";
import {Catalog, Chapters} from "./Catalog";
import {Constructor} from "../utils/Generics";
import MethodDeclaration from "../declaration/MethodDeclaration";
import {Statement} from "../statement";
import {context} from "../../../../../../../antlr4/ericvergnaud/antlr4/runtime/JavaScript";

export class Context {

    static newGlobalsContext() {
        const context = new Context();
        context.globals = context;
        context.calling = null;
        context.parent = null;
        context.debugger = null;
        return context;
    }

    globals: Context;
    calling: Context | null;
    parent: Context | null;
    debugger: Debugger | null;
    declarations: Map<string, Declaration>;
    tests: Map<string, TestMethodDeclaration>;
    instances: Map<string, Named>;
    values: Map<string, Value>;
    nativeBindings: Map<string, NativeCategoryDeclaration>;
    problemListener: ProblemListener;
    problemListeners?: ProblemListener[];

    constructor(globals?: Context) {
        this.globals = globals || this;
        this.calling = null;
        this.parent = null; // for inner methods
        this.debugger = null;
        this.declarations = new Map<string, Declaration>();
        this.tests = new Map<string, TestMethodDeclaration>();
        this.instances = new Map<string, NamedInstance>();
        this.values = new Map<string, Value>();
        this.nativeBindings = new Map<string, NativeCategoryDeclaration>();
        this.problemListener = new ProblemRaiser();
    }

    isGlobalContext(): boolean {
        return this == this.globals;
    }

    getCallingContext(): Context | null {
        return this.calling;
    }

    getParentMostContext(): Context {
        if(this.parent === null) {
            return this;
        } else {
            return this.parent.getParentMostContext();
        }
    }

    getClosestInstanceContext(): InstanceContext | null {
        if(this.parent === null) {
            return null;
        } else {
            return this.parent.getClosestInstanceContext();
        }
    }

    getParentContext(): Context | null {
        return this.parent;
    }

    setParentContext(parent: Context): void {
        this.parent = parent;
    }

    isChildOf(context: Context): boolean {
        return context == this.parent || (this.parent != null && this.parent.isChildOf(context));
    }

    isWithResourceContext(): boolean {
        return this.parent != null && this.parent != this && this.parent.isWithResourceContext()
    }

    newResourceContext(): ResourceContext {
        const context = new ResourceContext(this.globals);
        context.calling = this.calling;
        context.parent = this;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        return context;
    }

    newLocalContext(): Context {
        const context = new Context(this.globals);
        context.calling = this;
        context.parent = null;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        return context;
    }

    newDocumentContext(doc: DocumentValue, isChild: boolean): DocumentContext {
        const context = new DocumentContext(this.globals, doc);
        context.calling = isChild ? this.calling : this;
        context.parent = isChild ? this : null;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        return context;
    }

    newBuiltInContext(value: Value): BuiltInContext {
        const context = new BuiltInContext(this.globals, value);
        context.calling = this;
        context.parent = null;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        return context;
    }

    newInstanceContext(instance: Instance, type: Type, isChild = false): InstanceContext {
        const context = new InstanceContext(this.globals, instance, type);
        context.calling = isChild ? this.calling : this;
        context.parent = isChild ? this : null;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        const decl = context.getDeclaration();
        if(decl != null)
            decl.processAnnotations(context, true);
        return context;
    }

    newChildContext(): Context {
        const context = new Context(this.globals);
        context.calling = this.calling;
        context.parent = this;
        context.debugger = this.debugger;
        context.problemListener = this.problemListener;
        return context;
    }

    pushProblemListener(listener: ProblemListener): void {
        if (this.problemListeners)
            this.problemListeners.push(this.problemListener);
        else
            this.problemListeners = [this.problemListener];
        this.problemListener = listener;
    }

    popProblemListener() {
        if(!this.problemListeners)
            throw new Error("Empty problemListeners!");
        this.problemListener = this.problemListeners.pop() as ProblemListener;
        if(this.problemListeners.length == 0)
            delete this.problemListeners;
    }

    getCatalog(): Catalog {
        if (this != this.globals && this.globals != null)
            return this.globals.getCatalog();
        else
            return this.getLocalCatalog();
    }

    getLocalCatalog(): Catalog {
        const chapters: Chapters = { attributes : [], methods : [], categories : [], enumerations : [], tests : [], widgets: []};
        this.declarations.forEach((decl, key) => {
            const record = { type: "Document", value: decl.toDeclarationInfo()};
            if(decl instanceof AttributeDeclaration) {
                chapters.attributes?.push(record);
            } else if(decl instanceof EnumeratedCategoryDeclaration || decl instanceof EnumeratedNativeDeclaration) {
                chapters.enumerations?.push(record);
           } else if(decl instanceof CategoryDeclaration) {
                if((decl as CategoryDeclaration).isWidget(this)) {
                    chapters.widgets?.push(record);
                } else {
                    chapters.categories?.push(record);
                }
                /*
                const info = {};
                info.dbId = decl.dbId;
                info.name = decl.name;
                info.dialect = decl.dialect.name;
                if(decl.isWidget(this)) {
                    info.pageWidgetOf = decl.getPageWidgetOf();
                    catalog.widgets.push({ type: "Document", value: info});
                } else
                    catalog.categories.push({ type: "Document", value: info});
                 */
            } else if(decl instanceof MethodDeclarationMap) {
                chapters.methods?.push(record);
                /*
                const method = {};
                method.name = decl.name;
                method.protos = [];
                Object.getOwnPropertyNames(decl.protos).forEach(proto => {
                    const info = {};
                    info.dbId = decl.dbId;
                    info.name = decl.name;
                    info.proto = proto;
                    info.dialect = decl.protos[proto].dialect.name;
                    info.eligibleAsMain = decl.protos[proto].isEligibleAsMain();
                    method.protos.push({ type: "Document", value: info});
                });
                catalog.methods.push({ type: "Document", value: method});
                */
            }
        }, this);
        this.tests.forEach((decl, key) => {
            const record = { type: "Document", value: decl.toDeclarationInfo(this)};
            chapters.tests?.push(record);
        }, this);
        // minimize for UI optimization
        if(chapters.attributes!.length <= 0)
            delete chapters.attributes;
        if(chapters.categories!.length  <= 0)
            delete chapters.categories;
        if(chapters.widgets!.length  <= 0)
            delete chapters.widgets;
        if(chapters.enumerations!.length  <= 0)
            delete chapters.enumerations;
        if(chapters.methods!.length  <= 0)
            delete chapters.methods;
        if(chapters.tests!.length <= 0)
            delete chapters.tests;
        return { type: "Document", value: chapters };
    }

    findAttribute(name: string): AttributeDeclaration | null {
        if(this == this.globals) {
            const decl = this.declarations.get(name);
            if(decl == null)
                return this.parent != null ? this.parent.findAttribute(name) : null;
            else
                return decl instanceof AttributeDeclaration ? decl : null;
        } else if(this.globals)
            return this.globals.findAttribute(name);
        else
            return null;
    }

    getAllAttributes(): AttributeDeclaration[] {
        if(this == this.globals) {
            let list: AttributeDeclaration[] = Array.from(this.declarations.values())
                    .filter(decl => decl instanceof AttributeDeclaration)
                    .map(decl => decl as unknown as AttributeDeclaration);
            if(this.parent)
                list = list.concat(this.parent.getAllAttributes());
            return list as unknown as AttributeDeclaration[];
        } else if(this.globals)
            return this.globals.getAllAttributes();
        else
            return [];
    }

    getRegistered(id: Identifier): Named | null {
        // resolve upwards, since local names override global ones
        let actual: Named | null = this.declarations.get(id.name) || null;
        if(actual != null) {
            return actual;
        }
        actual = this.instances.get(id.name) || null;
        if(actual != null) {
            return actual;
        } else if(this.parent != null) {
            return this.parent.getRegistered(id);
        } else if(this.globals && this.globals != this) {
            return this.globals.getRegistered(id);
        } else {
            return null;
        }
    }

    getRegisteredCategoryDeclaration(id: Identifier): CategoryDeclaration | null {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.getRegisteredCategoryDeclaration(id);
    }

    getRegisteredDeclaration<T extends Declaration>(klass: Constructor<T>, id: Identifier): T | null {
        // resolve upwards, since local names override global ones
        const actual: Declaration | null = this.declarations.get(id.name) as Declaration || null;
        if(actual != null) {
            return actual instanceof klass ? actual : null;
        } else if(this.parent != null) {
            return this.parent.getRegisteredDeclaration(klass, id);
        } else if(this.globals != this) {
            return this.globals?.getRegisteredDeclaration(klass, id) || null;
        } else {
            return null;
        }
    }

    getLocalDeclaration<T extends Declaration>(klass: Constructor<T>, id: Identifier): T | null {
        const actual: Declaration | null = this.declarations.get(id.name) as Declaration || null;
        if (actual != null) {
            return actual instanceof klass ? actual : null;
        } else if (this.parent != null) {
            return this.parent.getLocalDeclaration(klass, id);
        } else {
            return null;
        }
    }

    registerDeclaration(declaration: Declaration): void {
        if(this.checkDuplicate(declaration))
            this.declarations.set(declaration.name, declaration);
    }

    checkDuplicate(declaration: Declaration): boolean {
        const actual = this.getRegistered(declaration.id) || null;
        if (actual !== null && actual != declaration)
            this.problemListener.reportDuplicate(declaration.id, declaration.id);
        return actual === null;
    }

    unregisterDeclaration(declaration: Declaration): void {
        this.declarations.delete(declaration.name);
    }

    unregisterTestDeclaration(declaration: TestMethodDeclaration): void {
        this.tests.delete(declaration.getName());
    }

    unregisterMethodDeclaration(declaration: MethodDeclaration, proto: string): void {
        const map = this.declarations.get(declaration.name) || null;
        if(map instanceof MethodDeclarationMap) {
            if(map.unregister(proto)) {
                this.declarations.delete(declaration.name);
            }
        }
    }

    registerMethodDeclaration(declaration: Declaration): void {
        let actual = this.checkDuplicateMethod(declaration);
        if (actual == null) {
            actual = new MethodDeclarationMap(declaration.id);
            this.declarations.set(declaration.name, actual);
        }
        actual.register(declaration, this.problemListener);
    }

    checkDuplicateMethod(declaration: Declaration): MethodDeclarationMap | null {
        const actual = this.getRegistered(declaration.id) || null;
        if (actual !== null && !(actual instanceof MethodDeclarationMap))
            this.problemListener.reportDuplicate(declaration.id, declaration.id);
        return actual;
    }

    registerTestDeclaration(declaration: TestMethodDeclaration): void {
        const actual = this.tests.get(declaration.name) || null;
        if(actual!==null)
            this.problemListener.reportDuplicate(declaration.id, declaration.id);
        this.tests.set(declaration.name, declaration);
    }

    getRegisteredTest(name: string): TestMethodDeclaration | null {
        // resolve upwards, since local names override global ones
        const actual = this.tests.get(name) || null;
        if(actual!==null) {
            return actual;
        } else if(this.parent!==null) {
            return this.parent.getRegisteredTest(name);
        } else if(this.globals && this.globals!==this) {
            return this.globals.getRegisteredTest(name);
        } else {
            return null;
        }
    }

    hasTests(): boolean {
        return this.tests.size > 0;
    }

    registerNativeBinding(name: string, declaration: NativeCategoryDeclaration): void {
        if(this === this.globals)
            this.nativeBindings.set(name, declaration);
        else
            this.globals?.registerNativeBinding(name, declaration);
    }

    getNativeBinding(name: string): NativeCategoryDeclaration | null {
        if(this===this.globals) {
            const binding = this.nativeBindings.get(name) || null;
            if (binding != null)
                return binding;
            else if (this.parent !== null)
                return this.parent.getNativeBinding(name);
            else
                return null;
        } else if(this.globals)
            return this.globals.getNativeBinding(name);
        else
            return null;
    }

    getRegisteredInstance(id: Identifier): NamedInstance | null {
        const context = this.contextForValue(id);
        return context == null ? null : context.readRegisteredInstance(id);
    }

    readRegisteredInstance(id: Identifier): NamedInstance | null {
        return this.instances.get(id.name) || null;
    }

    registerInstance(variable: Named, checkDuplicate: boolean): void {
        if(checkDuplicate === undefined)
            checkDuplicate = true;
        if(checkDuplicate) {
            // only explore current context
            const actual = this.instances.get(variable.name) || null;
            if(actual!==null)
                this.problemListener.reportDuplicate(variable.id, variable.id);
        }
        this.instances.set(variable.name, variable);
    }

    unregisterInstance(variable: Named): void {
        this.instances.delete(variable.name);
    }

    getLocalInstance(id: Identifier, includeParent: boolean): NamedInstance | null {
        const named = this.instances.get(id.name) || null;
        return named != null ? named : (this.parent == null || !includeParent ? null : this.parent.getLocalInstance(id, true));
    }


    hasValue(id: Identifier): boolean {
        return this.contextForValue(id.name) !== null;
    }

    getValue(id: Identifier): Value | null {
        const context = this.contextForValue(id);
        if(context != null)
            return context.readValue(id);
        this.problemListener.reportUnknownVariable(id, id.name);
        return null;
    }

    readValue(id: Identifier): Value | null {
        const value = this.values.get(id.name) || null;
        if(value===null)
            this.problemListener.reportEmptyVariable(id);
        if(value instanceof LinkedValue)
            return value.context.getValue(id);
        else
            return value;
    }

    setValue(id: Identifier, value: Value): void {
        const context = this.contextForValue(id);
        if(context===null)
            this.problemListener.reportUnknownVariable(id, id.name);
        context.writeValue(id, value);
    }

    writeValue(id: Identifier, value: Value): void {
        value = this.autocast(id.name, value);
        const current = this.values.get(id.name);
        if(current instanceof LinkedValue)
            current.context.setValue(id, value);
        else
            this.values.set(id.name, value);
    }

    autocast(name: string, value: Value | null): Value | null {
        if(value != null && value instanceof IntegerValue) {
            const actual = this.instances.get(name);
            if(actual?.getType(this) == DecimalType.instance)
                value = new DecimalValue(value.DecimalValue());
        }
        return value;
    }

    contextForValue(id: Identifier): Context | null {
        // resolve upwards, since local names override global ones
        if(this.instances.has(id.name)) {
            return this;
        } else if(this.parent != null) {
            return this.parent.contextForValue(id);
        } else if(this.globals != this) {
            return this.globals.contextForValue(id);
        } else {
            return null;
        }
    }

    contextForDeclaration(name: string): Context | null {
        // resolve upwards, since local names override global ones
        if(this.declarations.has(name)) {
            return this;
        } else if(this.parent != null) {
            return this.parent.contextForDeclaration(name);
        } else if(this.globals != this) {
            return this.globals.contextForDeclaration(name);
        } else {
            return null;
        }
    }

    enterMethod(method: MethodDeclaration): void {
        if(this.debugger != null) {
            this.debugger.enterMethod(this, method);
        }
    }

    leaveMethod(method: MethodDeclaration): void {
        if(this.debugger != null) {
            this.debugger.leaveMethod(this, method);
        }
    }

    enterStatement(statement: Statement): void {
        if(this.debugger != null) {
            this.debugger.enterStatement(this, statement);
        }
    }

    leaveStatement(statement: Statement): void {
        if(this.debugger != null) {
            this.debugger.leaveStatement(this, statement);
        }
    }

    terminated() {
        if (this.debugger != null) {
            this.debugger.terminated();
        }
    }

    loadSingleton(type: Type): ConcreteInstance {
        if(this == this.globals) {
            let value = this.values.get(type.name) || null;
            if(value == null) {
                const decl = this.declarations.get(type.name) || null;
                if(!(decl instanceof SingletonCategoryDeclaration))
                    throw new InternalError("No such singleton:" + type.name);
                value = new ConcreteInstance(this, decl);
                value.mutable = true; // a singleton is protected by "with x do", so always mutable in that context
                const method = (decl as SingletonCategoryDeclaration).getInitializeMethod(this);
                if(method != null) {
                    const instance = this.newInstanceContext(value, type,false);
                    const child = instance.newChildContext();
                    method.interpret(child);
                }
                this.values.set(type.name, value);
            }
            if(value instanceof ConcreteInstance)
                return value;
            else
                throw new InternalError("Not a concrete instance:" + value.toString());
        } else
            return this.globals.loadSingleton(type);
    }
}

export class ResourceContext extends Context {

    constructor(globals?: Context) {
        super(globals);
    }

    isWithResourceContext() {
        return true;
    }
}


export class InstanceContext extends Context {

    instance: Instance;
    instanceType: Type;
    widgetFields: Map<string, WidgetField> | null;

    constructor(globals: Context, instance: Instance, type: Type) {
        super(globals);
        this.instance = instance || null;
        this.instanceType = type !== null ? type : instance.type;
        this.widgetFields = null;
    }

    getClosestInstanceContext(): InstanceContext {
        return this;
    }

    getRegistered(id: Identifier): Named | null {
        if(this.widgetFields) {
            const field = this.widgetFields.get(id.name);
            if(field)
                return field;
        }
        const actual = super.getRegistered(id);
        if (actual)
            return actual;
        const decl = this.getDeclaration();
        if (decl==null)
            return null;
        const methods = decl.getMemberMethodsMap(this, id);
        if(methods && !methods.isEmpty())
            return methods;
        else if(decl.hasAttribute(this, id))
            return this.getRegisteredDeclaration<AttributeDeclaration>(AttributeDeclaration, id);
        else
            return null;
    }

    registerWidgetField(id: Identifier, type: Type, createdBy: object) {
        if(!this.widgetFields)
            this.widgetFields = new Map<string, WidgetField>();
        const widgetField = this.widgetFields.get(id.name) ||null;
        if(widgetField) {
            // we control reentrance by registering which processor created the widgetField
            if(widgetField.createdBy === createdBy)
                return;
            this.problemListener.reportDuplicate(id, id);
        } else
            this.widgetFields.set(id.name, new WidgetField(id.name, type, createdBy));
    }

    overrideWidgetFieldType(id: Identifier, type: Type, updatedBy: object) {
        const widgetField = this.widgetFields ? this.widgetFields.get(id.name) || null : null;
        if(widgetField) {
            widgetField.type = type;
            widgetField.updatedBy = updatedBy;
        } else
            this.problemListener.reportUnknownIdentifier(id, id.name);
    }

    getRegisteredDeclaration<T extends Declaration>(klass: Constructor<T>, id: Identifier): T | null {
        if (klass == MethodDeclarationMap) {
            const decl = this.getDeclaration();
            if (decl) {
                const methods = decl.getMemberMethodsMap(this, id);
                if (methods && !methods.isEmpty())
                    return methods;
            }
        }
        return super.getRegisteredDeclaration<T>(klass, id);
    }

    readRegisteredInstance(id: Identifier): NamedInstance | null {
        let actual = this.instances.get(id.name) || null;
        // not very pure, but avoids a lot of complexity when registering a value
        if(actual == null) {
            const attr = this.getRegisteredDeclaration<AttributeDeclaration>(AttributeDeclaration, id);
            if(attr instanceof AttributeDeclaration) {
                const type = attr.getType();
                actual = new Variable(id, type);
                if(actual)
                    this.instances.set(id.name, actual);
            }
        }
        return actual;
    }

    contextForValue(id: Identifier): Context | null {
        if("this" === id.name)
            return this;
        else if(this.widgetFields!=null && this.widgetFields.has(id.name))
            return this;
        // params and variables have precedence over members
        // so first look in context values
        const context = super.contextForValue(id);
        if(context !== null) {
            return context;
        }
        const decl = this.getDeclaration();
        if(decl.hasAttribute(this, id) || decl.hasMethod(this, id)) {
            return this;
        } else {
            return null;
        }
    }

    getDeclaration(): CategoryDeclaration | null {
        if(this.instance !== null)
            return this.instance.declaration;
        else
            return this.getRegisteredCategoryDeclaration(this.instanceType.id);
    }

    readValue(id: Identifier): Value | null {
        const decl = this.getDeclaration();
        if(decl.hasAttribute(this, id)) {
            return this.instance.getMemberValue(this.calling, id);
        } else if(decl.hasMethod(this, id)) {
            const method = decl.getMemberMethodsMap(this, id).getFirst();
            return new ClosureValue(this, new MethodType(method));
        } else
            return null;
    }

    writeValue(id: Identifier, value: Value): void {
        this.instance.setMember(this.calling, id, value);
    }
}

export class BuiltInContext extends Context {

    value: Value;

    constructor(globals: Context, value: Value) {
        super(globals);
        this.value = value;
    }
}

export class DocumentContext extends Context {

    document: DocumentValue;

    constructor(globals: Context, document: DocumentValue) {
        super(globals);
        this.document = document;
    }

    contextForValue(id: Identifier): Context | null {
        // params and variables have precedence over members
        // so first look in context values
        const context = super.contextForValue(id);
        if (context != null)
            return context;
        // since any name is valid in the context of a document
        // simply return this document context
        else
            return this;
    }

    readValue(id: Identifier): Value | null {
        return this.document.getMemberValue(this.calling, id);
    }

    writeValue(id: Identifier, value: Value): void {
        this.document.setMember(this.calling, id, value);
    }
}
