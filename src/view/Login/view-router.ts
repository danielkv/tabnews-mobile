import { useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface LoginViewRouterReturn {
    goToNewAccount(): void
}

export const useLoginRouter: ViewRouterHook<LoginViewRouterReturn> = () => {
    const link = useLink()

    function goToNewAccount() {
        link.replace('new-account')
    }

    return {
        goToNewAccount,
    }
}
