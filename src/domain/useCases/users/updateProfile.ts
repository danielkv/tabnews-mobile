import { AxiosResponse } from 'axios'

import { User } from '@models/user'
import httpClient from '@utils/http-client'

export interface UpdateProfilePayload {
    username: string
    email: string
    notifications: boolean
}

export async function updateProfileUseCase(
    username: string,
    data: UpdateProfilePayload
): Promise<User> {
    const endpoint = `users/${username}`

    const response = await httpClient.post<User, AxiosResponse<User>, UpdateProfilePayload>(
        endpoint,
        data
    )

    return response.data
}
