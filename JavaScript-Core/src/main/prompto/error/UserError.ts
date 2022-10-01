import ExecutionError from './ExecutionError'
import {IExpression} from "../expression";
import {Context} from "../runtime";

export default class UserError extends ExecutionError {

	expression: IExpression;

	constructor(expression: IExpression) {
		super("");
		this.expression = expression;
	}

	getExpression(context: Context) {
		return this.expression;
	}

}
