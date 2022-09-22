import BaseValue from "./BaseValue";
import { IntegerValue } from './index'
import { SyntaxError, DivideByZeroError } from '../error'
import { DecimalType} from '../type'
import { decimalToString } from '../utils'
import Value from "./Value";
import {Context} from "../runtime";
import {JsonParent} from "../json";

export default class DecimalValue extends BaseValue<number> {

    static Parse(text: string): DecimalValue {
        return new DecimalValue(parseFloat(text));
    }

    constructor(value: number) {
        super(DecimalType.instance, value);
    }

    toString() {
        return decimalToString(this.value);
    }

    toJsonNode() {
        return this.value;
    }

    convertToJavaScript() {
        return this.value;
    }

    /*jshint bitwise:false*/
    IntegerValue(): number {
        return Math.floor(this.value);
    }

    DecimalValue() {
        return this.value;
    }

    getStorableData(): any {
        return this.value;
    }

    Add(context: Context, value: Value): Value {
        if (value instanceof IntegerValue) {
            return new DecimalValue(this.value + value.IntegerValue());
        } else if (value instanceof DecimalValue) {
            return new DecimalValue(this.value + value.DecimalValue());
        } else {
            throw new SyntaxError("Illegal: DecimalValue + " + typeof(value));
        }
    }

    Subtract(context: Context, value: Value): Value {
        if (value instanceof IntegerValue) {
            return new DecimalValue(this.value - value.IntegerValue());
        } else if (value instanceof DecimalValue) {
            return new DecimalValue(this.value - value.DecimalValue());
        } else {
            throw new SyntaxError("Illegal: DecimalValue - " + typeof(value));
        }
    }

    Multiply(context: Context, value: Value): Value {
        if (value instanceof IntegerValue) {
            return new DecimalValue(this.value * value.IntegerValue());
        } else if (value instanceof DecimalValue) {
            return new DecimalValue(this.value * value.DecimalValue());
        } else {
            throw new SyntaxError("Illegal: DecimalValue * " + typeof(value));
        }
    }

    Divide(context: Context, value: Value): Value {
        if (value instanceof IntegerValue || value instanceof DecimalValue) {
            if (value.DecimalValue() === 0.0) {
                throw new DivideByZeroError();
            } else {
                return new DecimalValue(this.DecimalValue() / value.DecimalValue());
            }
        } else {
            throw new SyntaxError("Illegal: DecimalValue / " + typeof(value));
        }
    }

    IntDivide(context: Context, value: Value): Value {
        if (value instanceof IntegerValue) {
            if (value.IntegerValue() === 0) {
                throw new DivideByZeroError();
            } else {
                return new IntegerValue(this.DecimalValue() / value.IntegerValue());
            }
        } else {
            throw new SyntaxError("Illegal: DecimalValue \\ " + typeof(value));
        }
    }

    Modulo(context: Context, value: Value): Value {
        if (value instanceof IntegerValue || value instanceof DecimalValue) {
            if (value.DecimalValue() === 0.0) {
                throw new DivideByZeroError();
            } else {
                return new DecimalValue(this.DecimalValue() % value.DecimalValue());
            }
        } else {
            throw new SyntaxError("Illegal: DecimalValue % " + typeof(value));
        }
    }

    Minus(context: Context): Value {
        return new DecimalValue(-this.value);
    }

    compareToValue(context: Context, value: Value): number {
        if (value instanceof IntegerValue || value instanceof DecimalValue) {
            return this.value > value.value ? 1 : this.value === value.value ? 0 : -1;
        } else {
            throw new SyntaxError("Illegal comparison: IntegerValue and " + typeof(value));
        }
    }

   equals(obj: any): boolean {
        if (obj instanceof IntegerValue || obj instanceof DecimalValue) {
            return this.value === obj.value;
        } else {
            return false;
        }
    }

    toJson(context: Context, json: JsonParent, instanceId: any, fieldName: string, withType: boolean, binaries: any[]): void {
        if(Array.isArray(json))
            json.push(this.value);
        else
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            json[fieldName as keyof typeof json] = this.value;
    }

}

