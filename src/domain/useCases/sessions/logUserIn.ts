import { useUserContext } from '@contexts/user/userContext'
import { User, UserSession } from '@models/user'
import httpClient from '@utils/http-client'

const setLoggedUser = useUserContext.getState().setLoggedUser
const setUserSession = useUserContext.getState().setUserSession

export async function logUserInUseCase(email: string, password: string): Promise<User> {
    const payload = { email, password }
    const path = 'sessions'

    const { data: userSession } = await httpClient.post<UserSession>(path, payload)

    setUserSession(userSession)

    const { data: user } = await httpClient.get<User>('user')

    setLoggedUser(user)

    return user
}
