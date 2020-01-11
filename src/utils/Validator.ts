export class Validator {

    public static undefined (param: any, name: string) {
        if (!param && param !== 0 && param !== false) {
            throw new Error(`'${name}' must be specified`)
        }

        return param
    }

    public static string (param: string | undefined, name: string) {
        this.undefined(param, name)
        if (typeof param !== 'string' || param.length === 0) {
            throw new TypeError(`'${name}' must be a string`)
        }

        return param
    }
    public static number (param: number | undefined, name: string) {
        this.undefined(param, name)
        if (typeof param !== 'number') {
            throw new TypeError(`'${name}' must be a number`)
        }

        return param
    }

    public static array (param: any[] | undefined, name: string, allowEmpty: boolean = false) {
        this.undefined(param, name)
        if (!(param instanceof Array) || (!allowEmpty && param && param.length === 0)) {
            throw new TypeError(`'${name}' must be an array`)
        }

        return param as any[]
    }

    public static date (param: Date | string | undefined, name: string): any {
        this.undefined(param, name)
        if (param instanceof Date) {
            return param
        }

        if (typeof param === 'string') {
            try { Date.parse(param) } catch (error) { throw new TypeError(`'${name}' must be a valid date`) }
        } else {
            throw new TypeError(`'${name}' must be a valid date`)
        }

        return param
    }

    public static enum (param: string | undefined, name: string, possible: string[]) {
        this.string(param, name)
        if (param && possible.indexOf(param) < 0) {
            throw new TypeError(`'${name}' must of one of ${JSON.stringify(possible)}`)
        }

        return param as any
    }

    public static object (param: object | undefined, name: string) {
        this.undefined(param, name)
        if (typeof param !== 'object' || Array.isArray(param)) {
            throw new TypeError(`'${name}' must be a key-value object`)
        }

        return param
    }

    public static instanceOf<T> (param: any | undefined, name: string, type: new() => T) {
        this.undefined(param, name)
        if (!(param instanceof type)) {
            throw new TypeError(`'${name}' must be an instance of '${type.name}'`)
        }

        return param
    }
}
