import { useHref, useNavigation } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface ContentViewRouterReturn {
    user: string
    slug: string
    openContent(user: string, slug: string): void
}

export const useContentRouter: ViewRouterHook<ContentViewRouterReturn> = () => {
    const navigation = useNavigation()
    const { params } = useHref()

    function openContent(user: string, slug: string) {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        navigation.navigate({
            name: '[user]/[slug]',
            params: { user, slug },
            key: `${user}/${slug}`,
        })
    }

    const { user = '', slug = '' } = params

    return {
        user,
        slug,
        openContent,
    }
}
