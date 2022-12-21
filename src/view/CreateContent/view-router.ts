import { useHref, useLink } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'

export interface CreateContentViewRouterReturn {
    parentId: string | null
    goBack(): void
    goToLogin(): void
    goToContent(user: string, slug: string): void
}

export const useCreateContentRouter: ViewRouterHook<CreateContentViewRouterReturn> = () => {
    const link = useLink()
    const { params: { parentId = null } = {} } = useHref()

    function goBack() {
        link.back()
    }

    function goToLogin() {
        link.push('/login')
    }

    function goToContent(user: string, slug: string) {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        link.replace({
            pathname: '[user]/[slug]',
            params: { user, slug },
        })
    }

    return {
        parentId,
        goToLogin,
        goBack,
        goToContent,
    }
}
