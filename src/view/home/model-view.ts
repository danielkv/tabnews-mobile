import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

import { Content } from '@models/content'
import {
    ListContentStrategy,
    listContentsUseCase,
} from '@useCases/content/listContents'

export const useHomeModelView = (
    contentListStrategy: ListContentStrategy = 'new'
) => {
    const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null // atingiu o fim

        return [index, 10, contentListStrategy]
    }

    const {
        data,
        isValidating,
        error,
        setSize: setPage,
        size: page,
    } = useSWRInfinite<Content[], Error>(getKey, listContentsUseCase)

    return {
        loading: isValidating,
        error,
        contents: data,
        setPage,
        page,
    }
}
