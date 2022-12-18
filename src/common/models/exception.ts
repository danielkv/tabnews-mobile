export interface IApiException {
    name: string
    message: string
    action: string
    status_code: number
    error_id: string
    request_id: string
    error_location_code: string
    key?: string
    type?: string
}
