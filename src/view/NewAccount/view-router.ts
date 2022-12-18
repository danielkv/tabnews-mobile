import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

export interface NewAccountViewRouterReturn {
    listContentStrategy?: ListContentStrategy
    pathname: string
    goToLogin(): void
}

export const useNewAccountRouter: ViewRouterHook<NewAccountViewRouterReturn> = () => {
    const link = useLink()
    const { pathname, params } = useHref()

    function goToLogin() {
        link.replace('login')
    }

    return {
        listContentStrategy: params?.listContentStrategy as ListContentStrategy | undefined,
        pathname,
        goToLogin,
    }
}
