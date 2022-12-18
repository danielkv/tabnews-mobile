import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface NewAccountViewRouterReturn {
    goToLogin(): void
}

export const usePassworRecoverRouter: ViewRouterHook<NewAccountViewRouterReturn> = () => {
    const link = useLink()

    function goToLogin() {
        link.replace('login')
    }

    return {
        goToLogin,
    }
}
