import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

export interface ViewRouterReturn {
    filter(strategy: ListContentStrategy): void
    listContentStrategy: ListContentStrategy | null
    pathname: string
}

export const useHeaderRouter: ViewRouterHook<ViewRouterReturn> = () => {
    const link = useLink()
    const { params, pathname } = useHref()

    function filter(strategy: ListContentStrategy) {
        link.push({
            pathname: '/',
            params: { listContentStrategy: strategy },
        })
    }

    return {
        filter,
        listContentStrategy: params?.listContentStrategy,
        pathname,
    }
}
