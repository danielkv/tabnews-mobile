import Constants from 'expo-constants'
import * as Font from 'expo-font'

import { useUserContext } from '@contexts/user/userContext'
import { UserSession } from '@models/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserBySessionIdUseCase } from '@useCases/users/getUserBySessionId'

const setLoggedUser = useUserContext.getState().setLoggedUser
const setUserSession = useUserContext.getState().setUserSession

function loadFonts() {
    return Font.loadAsync({
        'SF-Pro-Display-Bold': require('@assets/fonts/SF-Pro-Display-Bold.otf'),
        'SF-Pro-Display-BoldItalic': require('@assets/fonts/SF-Pro-Display-BoldItalic.otf'),
        'SF-Pro-Display-Regular': require('@assets/fonts/SF-Pro-Display-Regular.otf'),
        'SF-Pro-Display-RegularItalic': require('@assets/fonts/SF-Pro-Display-RegularItalic.otf'),
    })
}

async function loadLoggedUser() {
    const userSessionString = await AsyncStorage.getItem(
        Constants.expoConfig?.extra?.STORAGE_USER_SESSION_KEY
    )
    if (!userSessionString) return

    const userSession: UserSession = JSON.parse(userSessionString)

    const user = await getUserBySessionIdUseCase(userSession.id)

    setUserSession(userSession)
    setLoggedUser(user)
}

export async function prepareApp(): Promise<void> {
    await loadFonts()
    await loadLoggedUser()
}
