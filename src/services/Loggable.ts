import { loggerFactory, ILogger } from '@/utils/logger'
import { injectable } from 'inversify'

@injectable()
export abstract class Loggable {

    protected _logger: ILogger

    protected constructor () {
        this._logger = loggerFactory(this.constructor.name)
    }

    protected _handleError (error: Error) {
        this._logger.warn('', { error })
        return error
    }
}
