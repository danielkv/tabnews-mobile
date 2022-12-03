import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

export interface HomeViewRouterReturn {
    listContentStrategy?: ListContentStrategy
    pathname: string
    openContent(user: string, slug: string): void
}

export const useHomeRouter: ViewRouterHook<HomeViewRouterReturn> = () => {
    const link = useLink()
    const { pathname, params } = useHref()

    function openContent(user: string, slug: string) {
        link.push({
            pathname: '[user]/[slug]',
            params: { user, slug },
        })
    }

    return {
        listContentStrategy: params?.listContentStrategy as ListContentStrategy | undefined,
        pathname,
        openContent,
    }
}
