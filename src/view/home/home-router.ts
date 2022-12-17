import { useHref, useNavigation } from 'expo-router'

import { ViewRouterHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

export interface HomeViewRouterReturn {
    listContentStrategy?: ListContentStrategy
    pathname: string
    openContent(user: string, slug: string): void
}

export const useHomeRouter: ViewRouterHook<HomeViewRouterReturn> = () => {
    const link = useNavigation()
    const { pathname, params } = useHref()

    function openContent(user: string, slug: string) {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        link.navigate({
            name: '[user]/[slug]',
            params: { user, slug },
            key: `${user}/${slug}`,
        })
    }

    return {
        listContentStrategy: params?.listContentStrategy as ListContentStrategy | undefined,
        pathname,
        openContent,
    }
}
