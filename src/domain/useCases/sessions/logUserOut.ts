import Constants from 'expo-constants'

import { useUserContext } from '@contexts/user/userContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const setLoggedUser = useUserContext.getState().setLoggedUser
const setUserSession = useUserContext.getState().setUserSession

export async function logUserOutUseCase(): Promise<void> {
    await AsyncStorage.removeItem(Constants.expoConfig?.extra?.STORAGE_USER_SESSION_KEY)

    setUserSession(null)
    setLoggedUser(null)
}
