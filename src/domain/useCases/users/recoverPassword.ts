import { AxiosResponse } from 'axios'

import { User } from '@models/user'
import httpClient from '@utils/http-client'

export interface RecoverPasswordPayload {
    email: string
}

export interface RecoverPasswordResponse {
    id: string
    used: boolean
    expires_at: string
    created_at: string
    updated_at: string
}

export async function recoverPasswordUseCase(email: string): Promise<RecoverPasswordResponse> {
    const endpoint = `recovery`

    const response = await httpClient.post<
        User,
        AxiosResponse<RecoverPasswordResponse>,
        RecoverPasswordPayload
    >(endpoint, { email })

    return response.data
}
