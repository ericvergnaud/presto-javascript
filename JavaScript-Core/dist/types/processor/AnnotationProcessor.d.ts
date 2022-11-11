import { Annotation } from "../grammar";
import { CategoryDeclaration } from "../declaration";
import { Context } from "../runtime";
export default abstract class AnnotationProcessor {
    name: string;
    constructor(name: string);
    abstract processCategory(context: Context, annotation: Annotation, declaration: CategoryDeclaration<any>): void;
}
