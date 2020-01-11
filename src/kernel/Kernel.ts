import { Container, interfaces } from 'inversify'
import { Loggable, Client } from '@/services'
import getDecorators from 'inversify-inject-decorators'

export class Kernel extends Loggable {

    public static get Inject () {
        if (!this._inject) {
            const kernel = this.get()
            const { lazyInject } = getDecorators(kernel.container)
            this._inject = lazyInject
        }

        return this._inject
    }

    private static kernelInstance: Kernel
    private static _inject: (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>) => (proto: any, key: string) => void

    protected container: Container
    public get: typeof Container.prototype.get
    public rebind: typeof Container.prototype.rebind

    protected constructor () {
        super()
        this.container = new Container()
        this.get = this.container.get.bind(this.container) as any
        this.rebind = this.container.rebind.bind(this.container) as any
    }

    public static get<T extends Kernel> (kernel: new (...args: any[]) => T = (Kernel as any)) {
        if (!this.kernelInstance) {
            this.kernelInstance = new kernel()
            this.kernelInstance.setup()
        }

        return this.kernelInstance
    }

    private setup () {
        try {
            this._logger.info('Starting Service')
            this.container.bind(Client).to(Client).inSingletonScope()
        } catch (error) {
            try {
                this._logger.error('FATAL - Failed to start service', { error })
            } finally {
                // @ts-ignore
                process.exit(error)
            }
        }

    }
}
