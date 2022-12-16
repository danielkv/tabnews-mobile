import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface ContentViewRouterReturn {
    user: string
    slug: string
    openContent(user: string, slug: string): void
}

export const useContentRouter: ViewRouterHook<ContentViewRouterReturn> = () => {
    const link = useLink()
    const { params } = useHref()

    function openContent(user: string, slug: string) {
        link.push({
            pathname: '[user]/[slug]',
            params: { user, slug },
        })
    }

    const { user = '', slug = '' } = params

    return {
        user,
        slug,
        openContent,
    }
}
