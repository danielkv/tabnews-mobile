import useSWR from 'swr'

import { ViewModelHook } from '@common/interfaces/app'
import { Comment } from '@models/comment'
import { Post } from '@models/post'
import { ContentVoteType, contentVote } from '@useCases/content/contentVote'
import { getCommentsUseCase } from '@useCases/content/getComments'
import { getContentUseCase } from '@useCases/content/getContent'

import { useContentRouter } from './view-router'

export interface ContentViewModelReturn {
    content?: Post
    comments: Comment[]
    loading: boolean
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPressVoteComment(type: ContentVoteType, author: string, slug: string): Promise<void>
    error?: Error
}

export const useContentViewModel: ViewModelHook<ContentViewModelReturn> = () => {
    const { user, slug } = useContentRouter()

    const {
        data: content,
        isValidating: loadingContent,
        error: contentError,
        mutate: mutateContent,
    } = useSWR<Post, Error>([user, slug], getContentUseCase)

    const {
        data: comments,
        isValidating: loadingComments,
        error: commentsError,
        mutate: mutateComments,
    } = useSWR<Comment[], Error>([user, slug, 'children'], getCommentsUseCase)

    async function onPressVote(type: ContentVoteType, author: string, slug: string) {
        const response = await contentVote(type, author, slug)

        mutateContent(
            (currentData) => {
                if (!currentData) return currentData

                return { ...currentData, tabcoins: response.tabcoins }
            },
            { rollbackOnError: true }
        )
    }

    async function onPressVoteComment(type: ContentVoteType, author: string, slug: string) {
        const response = await contentVote(type, author, slug)

        mutateComments(
            (currentData) => {
                if (!currentData) return currentData

                return { ...currentData, tabcoins: response.tabcoins }
            },
            { rollbackOnError: true }
        )
    }

    return {
        content,
        comments: comments ?? [],
        loading: loadingContent || loadingComments,
        error: contentError ?? commentsError,
        onPressVoteComment,
        onPressVote,
    }
}
