import { useHref, useLink, useNavigation } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface ContentViewRouterReturn {
    user: string
    slug: string
    goToLogin(): void
    goToContent(user: string, slug: string): void
}

export const useContentRouter: ViewRouterHook<ContentViewRouterReturn> = () => {
    const navigation = useNavigation()
    const link = useLink()
    const { params } = useHref()

    function goToContent(user: string, slug: string) {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        navigation.navigate({
            name: '[user]/[slug]',
            params: { user, slug },
            key: `${user}/${slug}`,
        })
    }

    function goToLogin() {
        link.push('login')
    }

    const { user = '', slug = '' } = params

    return {
        user,
        slug,
        goToLogin,
        goToContent,
    }
}
