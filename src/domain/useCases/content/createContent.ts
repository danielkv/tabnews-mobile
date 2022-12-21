import { AxiosResponse } from 'axios'

import { UnauthorizedException } from '@common/exceptions/UnauthorizedException'
import { useUserContext } from '@contexts/user/userContext'
import { ContentBase } from '@models/contentBase'
import httpClient from '@utils/http-client'

export interface CreateContentPayload {
    title: string | null
    parent_id: string | null
    slug: string
    source_url: string | null
    body: string
}

export async function createContentUseCase(content: CreateContentPayload): Promise<ContentBase> {
    const endpoint = '/contents'

    const { userSession } = useUserContext.getState()

    if (!userSession)
        throw new UnauthorizedException('Você deve estar logado para publicar um conteúdo')

    const response = await httpClient.post<
        ContentBase,
        AxiosResponse<ContentBase>,
        CreateContentPayload
    >(endpoint, content, { headers: { 'Content-Type': 'application/json' } })

    return response.data
}
