import { AxiosResponse } from 'axios'

import { User } from '@models/user'
import httpClient from '@utils/http-client'

export interface CreateNewAccountPayload {
    username: string
    email: string
    password: string
}

export async function createNewAccountUseCase(data: CreateNewAccountPayload): Promise<User> {
    const response = await httpClient.post<User, AxiosResponse<User>, CreateNewAccountPayload>(
        'users',
        data
    )

    return response.data
}
