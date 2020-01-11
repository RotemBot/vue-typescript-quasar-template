import Axios, { AxiosInstance } from 'axios'
import {injectable} from 'inversify'

export interface CreateFamilyPayload {
    name: string
}

@injectable()
export class Client {

    public static ERRORS = {
        LoginError: class LoginError extends Error {
            constructor (params: Dictionary<any>, error: any) {
                super('Failed to login' + JSON.stringify({ params, error: error.message, stack: error.stack }))
            }
        }
    }

    private _axios: AxiosInstance

    constructor (
    ) {
        // @ts-ignore - __SERVER_URL defined in vue.config.js
        const axiosConfig: Dictionary<string> = { baseURL: __SERVER_URL }
        this._axios = Axios.create(axiosConfig)
    }

    public async createNewFamily (payload: CreateFamilyPayload) {
        debugger
        const res = await this._axios.post('/families')
    }
}
