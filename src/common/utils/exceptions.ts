import { UnauthorizedException } from '@common/exceptions/UnauthorizedException'
import { IApiException } from '@models/exception'

export function isApiException(data: any): data is IApiException {
    if (!data) return false

    if (
        data.name &&
        data.message &&
        data.action &&
        data.status_code &&
        data.error_id &&
        data.request_id &&
        data.error_location_code
    )
        return true
    return false
}

export function isUnauthorizedException(data: any): data is UnauthorizedException {
    if (data instanceof UnauthorizedException) return true

    return false
}

export function getExceptionMessage(err: any): string {
    if (err.message) return err.message

    return 'Erro inesperado'
}
