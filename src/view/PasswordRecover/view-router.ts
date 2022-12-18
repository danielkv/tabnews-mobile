import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface NewAccountViewRouterReturn {
    goToHome(): void
    goToLogin(): void
}

export const usePassworRecoverRouter: ViewRouterHook<NewAccountViewRouterReturn> = () => {
    const link = useLink()

    function goToHome() {
        link.replace('/')
    }
    function goToLogin() {
        link.replace('login')
    }

    return {
        goToHome,
        goToLogin,
    }
}
