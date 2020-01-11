import { ILogger } from './ILogger'

export class NOPLogger extends ILogger {

    constructor (loggerName: string) {
        super(loggerName)
    }

    public debug (message: string, metadata?: any) { }
    public info (message: string, metadata?: any) { }
    public warn (message: string, metadata?: any) { }
    public error (message: string, metadata?: any) { }

}
