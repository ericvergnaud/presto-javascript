export {default as InlinedProcessor} from "./InlinedProcessor"
export {default as PageWidgetOfProcessor} from "./PageWidgetOfProcessor"
export {default as WidgetFieldProcessor} from "./WidgetFieldProcessor"
export {default as WidgetPropertiesProcessor} from "./WidgetPropertiesProcessor"
export {default as AnnotationProcessors} from "./AnnotationProcessors"
export default {}

import AnnotationProcessors from "./AnnotationProcessors"
AnnotationProcessors.registerAll();
