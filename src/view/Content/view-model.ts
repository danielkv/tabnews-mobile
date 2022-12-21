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
import { getExceptionMessage } from '@utils/exceptions'

import { useContentRouter } from './view-router'

export interface ContentViewModelReturn {
    content?: Post
    comments: Comment[]
    loading: boolean
    error?: Error
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPressVoteComment(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPressComment(content: ContentBase): void
    onPressAnswer(content: ContentBase): void
}

export const useContentViewModel: ViewModelHook<ContentViewModelReturn> = () => {
    const { user, slug, goToContent, goToLogin, goToCreateContent } = useContentRouter()
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

    function _displayUnauthorizedAlert() {
        Alert.alert('Você não está logado', 'Deseja ir para o login?', [
            { text: 'Não, continuar aqui' },
            { text: 'Sim', onPress: goToLogin },
        ])
    }

    async function onPressVote(type: ContentVoteType, author: string, slug: string) {
        if (!isLoggedIn) return _displayUnauthorizedAlert()

        try {
            const response = await contentVote(type, author, slug)

            mutateContent(
                (currentData) => {
                    if (!currentData) return currentData

                    return { ...currentData, tabcoins: response.tabcoins }
                },
                { rollbackOnError: true }
            )
        } catch (err) {
            Alert.alert('Ocorreu um erro', getExceptionMessage(err))
        }
    }

    async function onPressVoteComment(type: ContentVoteType, author: string, slug: string) {
        if (!isLoggedIn) return _displayUnauthorizedAlert()

        try {
            const response = await contentVote(type, author, slug)

            mutateComments(
                (currentData) => {
                    if (!currentData) return currentData

                    return { ...currentData, tabcoins: response.tabcoins }
                },
                { rollbackOnError: true }
            )
        } catch (err) {
            Alert.alert('Ocorreu um erro', getExceptionMessage(err))
        }
    }

    function onPressComment(content: ContentBase) {
        goToContent(content.owner_username, content.slug)
    }

    function onPressAnswer(content: ContentBase) {
        if (!isLoggedIn) return _displayUnauthorizedAlert()

        goToCreateContent(content.id)
    }

    return {
        content,
        comments: comments ?? [],
        loading: loadingContent || loadingComments,
        error: contentError ?? commentsError,
        onPressVoteComment,
        onPressVote,
        onPressComment,
        onPressAnswer,
    }
}
