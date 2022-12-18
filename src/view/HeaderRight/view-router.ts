import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface HeaderRightViewRouterReturn {
    goToLogin(): void
}

export const useHeaderRightRouter: ViewRouterHook<HeaderRightViewRouterReturn> = () => {
    const link = useLink()

    function goToLogin() {
        link.push('login')
    }

    return {
        goToLogin,
    }
}
