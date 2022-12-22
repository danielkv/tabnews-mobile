import * as Linking from 'expo-linking'
import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface ProfileViewRouterReturn {
    openUpdateProfile(): void
    goToHome(): void
    goToCreateContent(): void
}

export const useProfileRouter: ViewRouterHook<ProfileViewRouterReturn> = () => {
    const link = useLink()

    function openUpdateProfile() {
        Linking.openURL('https://www.tabnews.com.br/perfil')
        goToHome()
    }

    function goToHome() {
        link.replace('/')
    }

    function goToCreateContent() {
        link.replace('/create-content')
    }

    return {
        openUpdateProfile,
        goToHome,
        goToCreateContent,
    }
}
