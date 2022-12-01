import { Content } from '@models/content'
import {
    ListContentStrategy,
    listContentsUseCase,
} from '@useCases/content/listContents'

import { useState } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

export const useHomeModelView = () => {
    const [contentListStrategy, setContentListStrategy] =
        useState<ListContentStrategy>('new')

    const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null // atingiu o fim

        return [index, 10, contentListStrategy]
    }

    const { data, isValidating, error } = useSWRInfinite<Content[], Error>(
        getKey,
        listContentsUseCase
    )

    return {
        loading: isValidating,
        error,
        contents: data,
        contentListStrategy,
        setContentListStrategy,
    }
}
