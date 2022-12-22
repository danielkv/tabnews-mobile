import Constants from 'expo-constants'

import { useUserContext } from '@contexts/user/userContext'
import { User, UserSession } from '@models/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import httpClient from '@utils/http-client'

const setLoggedUser = useUserContext.getState().setLoggedUser
const setUserSession = useUserContext.getState().setUserSession

export async function logUserInUseCase(email: string, password: string): Promise<User> {
    const payload = { email, password }
    const path = 'sessions'

    const { data: userSession } = await httpClient.post<UserSession>(path, payload)

    const { data: user } = await httpClient.get<User>('user', {
        headers: {
            session_id: userSession.id,
        },
    })

    setUserSession(userSession)
    setLoggedUser(user)

    await AsyncStorage.setItem(
        Constants.expoConfig?.extra?.STORAGE_USER_SESSION_KEY,
        JSON.stringify(userSession)
    )

    return user
}
