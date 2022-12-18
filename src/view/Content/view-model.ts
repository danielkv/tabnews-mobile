import useSWR from 'swr'

import { Alert } from 'react-native'

import { ViewModelHook } from '@common/interfaces/app'
import { useIsUserLoggedIn } from '@contexts/user/userContext'
import { Comment } from '@models/comment'
import { ContentBase } from '@models/contentBase'
import { Post } from '@models/post'
import { ContentVoteType, contentVote } from '@useCases/content/contentVote'
import { getCommentsUseCase } from '@useCases/content/getComments'
import { getContentUseCase } from '@useCases/content/getContent'

import { useContentRouter } from './view-router'

export interface ContentViewModelReturn {
    content?: Post
    comments: Comment[]
    loading: boolean
    error?: Error
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPressVoteComment(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPressComment(content: ContentBase): void
}

export const useContentViewModel: ViewModelHook<ContentViewModelReturn> = () => {
    const { user, slug, goToContent, goToLogin } = useContentRouter()
    const isLoggedIn = useIsUserLoggedIn()

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

    function notLoggedAction() {
        Alert.alert('Você não está logado', 'Deseja ir para o login?', [
            { text: 'Sim', onPress: goToLogin },
            { text: 'Não, continuar aqui' },
        ])
    }

    async function onPressVote(type: ContentVoteType, author: string, slug: string) {
        if (!isLoggedIn) return notLoggedAction()

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

    function onPressComment(content: ContentBase) {
        goToContent(content.owner_username, content.slug)
    }

    return {
        content,
        comments: comments ?? [],
        loading: loadingContent || loadingComments,
        error: contentError ?? commentsError,
        onPressVoteComment,
        onPressVote,
        onPressComment,
    }
}
