import { User } from '@models/user'
import httpClient from '@utils/http-client'

export async function getUserUseCase(): Promise<User> {
    const endpoint = `user`

    const response = await httpClient.get<User>(endpoint)

    return response.data
}
