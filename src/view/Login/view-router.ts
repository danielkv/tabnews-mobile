import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface LoginViewRouterReturn {
    goToNewAccount(): void
    goToPasswordRecover(): void
    goToHome(): void
}

export const useLoginRouter: ViewRouterHook<LoginViewRouterReturn> = () => {
    const link = useLink()

    function goToHome() {
        link.replace('/')
    }

    function goToNewAccount() {
        link.replace('new-account')
    }

    function goToPasswordRecover() {
        link.replace('password-recover')
    }

    return {
        goToNewAccount,
        goToPasswordRecover,
        goToHome,
    }
}
