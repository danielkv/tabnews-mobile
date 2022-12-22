import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface HeaderRightViewRouterReturn {
    goToLogin(): void
    goToProfile(): void
}

export const useHeaderRightRouter: ViewRouterHook<HeaderRightViewRouterReturn> = () => {
    const link = useLink()

    function goToLogin() {
        link.push('login')
    }

    function goToProfile() {
        link.push('profile')
    }

    return {
        goToLogin,
        goToProfile,
    }
}
