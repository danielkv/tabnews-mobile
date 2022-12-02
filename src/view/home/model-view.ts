import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

import { Content } from '@models/content'
import {
    ListContentStrategy,
    listContentsUseCase,
} from '@useCases/content/listContents'

export const useHomeModelView = (contentListStrategy?: ListContentStrategy) => {
    const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null

        return [index + 1, 30, contentListStrategy]
    }

    const {
        data,
        isValidating,
        error,
        setSize: setPage,
        size: page,
    } = useSWRInfinite<Content[], Error>(getKey, listContentsUseCase)

    function loadNextPage() {
        if (isValidating) return

        const nextPage = page + 1

        setPage(nextPage)
    }

    return {
        loading: isValidating,
        error,
        contents: data,
        loadNextPage,
    }
}
