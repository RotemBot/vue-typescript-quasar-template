import { ILogger } from './ILogger'

export class ConsoleLogger extends ILogger {

    constructor (loggerName: string) {
        super(loggerName)
    }
    private _timestamp () {
        return (new Date()).toISOString()
    }
    private _logMessage (level: string, message: string, metadata: any) {
        message = `[${this._timestamp()}] [${this._name}] - ${message}`
        if (metadata) {
            // @ts-ignore
            console[level](message, metadata)
        } else {
            // @ts-ignore
            console[level](message)
        }
    }

    public debug (message: string, metadata?: any) {
        this._logMessage('debug', message, metadata)
    }
    public info (message: string, metadata?: any) {
        this._logMessage('log', message, metadata)
    }
    public warn (message: string, metadata?: any) {
        this._logMessage('warn', message, metadata)
    }
    public error (message: string, metadata?: any) {
        this._logMessage('error', message, metadata)
    }

}
