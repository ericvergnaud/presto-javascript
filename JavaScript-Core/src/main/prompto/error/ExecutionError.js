import PromptoError from './PromptoError.js'
let ErrorVariable = null
let UnresolvedParameter = null;
let TextLiteral = null;
let ConstructorExpression = null;
let CategoryType = null;
let Argument = null;
let ArgumentList = null;
// use dynamic import to avoid reentrant import
import('../runtime/ErrorVariable.js').then(module => ErrorVariable=module.default);
import('../param/UnresolvedParameter.js').then(module => UnresolvedParameter=module.default);
import('../literal/TextLiteral.js').then(module => TextLiteral=module.default);
import('../expression/ConstructorExpression.js').then(module => ConstructorExpression=module.default);
import('../type/CategoryType.js').then(module => CategoryType=module.default);
import('../grammar/Argument.js').then(module => Argument=module.default);
import('../grammar/ArgumentList.js').then(module => ArgumentList=module.default);

export default class ExecutionError extends PromptoError {

    constructor(message) {
        super(message);
    }

    interpret(context, errorName) {
       let exp = this.getExpression(context);
        if (exp == null) {
            var args = new ArgumentList();
            args.add(new Argument(new UnresolvedParameter("name"), new TextLiteral('"' + this.name + '"')));
            args.add(new Argument(new UnresolvedParameter("text"), new TextLiteral('"' + this.message + '"')));
            exp = new ConstructorExpression(new CategoryType("Error"), args);
        }
        if (context.getRegisteredValue(errorName) == null)
            context.registerValue(new ErrorVariable(errorName));
        var error = exp.interpret(context);
        context.setValue(errorName, error);
        return error;
    }
}
