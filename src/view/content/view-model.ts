import useSWR from 'swr'

import { ViewModelHook } from '@common/interfaces/app'
import { Content } from '@models/content'
import { getContentUseCase } from '@useCases/content/getContent'

import { useContentRouter } from './view-router'

export interface ContentViewModelReturn {
    content?: Content
    loading: boolean
    error?: Error
}

export const useContentViewModel: ViewModelHook<ContentViewModelReturn> = () => {
    const { user, slug } = useContentRouter()

    const { data, isValidating, error } = useSWR<Content, Error>([user, slug], getContentUseCase)

    return {
        content: data,
        loading: isValidating,
        error,
    }
}
