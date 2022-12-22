import { User } from '@models/user'
import httpClient from '@utils/http-client'

export async function getUserBySessionIdUseCase(sessionId: string): Promise<User> {
    const endpoint = `user`

    const response = await httpClient.get<User>(endpoint, {
        headers: {
            session_id: sessionId,
        },
    })

    return response.data
}
