import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface ContentViewRouterReturn {
    user: string
    slug: string
}

export const useContentRouter: ViewRouterHook<ContentViewRouterReturn> = () => {
    const { params } = useHref()

    const { user = '', slug = '' } = params

    return {
        user,
        slug,
    }
}
