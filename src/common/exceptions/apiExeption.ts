import { IApiException } from '@models/exception'

export class ApiException extends Error implements IApiException {
    action: string
    status_code: number
    error_id: string
    request_id: string
    error_location_code: string

    constructor(data: IApiException) {
        super(data.message)
        this.name = data.name
        this.message = data.message
        this.action = data.action
        this.status_code = data.status_code
        this.error_id = data.error_id
        this.request_id = data.request_id
        this.error_location_code = data.error_location_code
    }
}
