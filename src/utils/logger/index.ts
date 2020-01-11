import { ILogger } from './ILogger'
import { ConsoleLogger } from './ConsoleLogger'
import { NOPLogger } from './NOPLogger'

export { ILogger }

// @ts-ignore - __LOGGER is a webpack global config
const logger: 'console' | 'http' | 'nop' = __LOGGER

export const loggerFactory = (loggerName: string): ILogger => {
    if (logger === 'nop') {
        return new NOPLogger(loggerName)
    } else {
        return new ConsoleLogger(loggerName)
    }
}
