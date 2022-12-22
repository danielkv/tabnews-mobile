import { AxiosResponse } from 'axios'
import slugify from 'slugify'
import { v4 as uuidv4 } from 'uuid'

import { UnauthorizedException } from '@common/exceptions/UnauthorizedException'
import { useUserContext } from '@contexts/user/userContext'
import { ContentBase } from '@models/contentBase'
import httpClient from '@utils/http-client'

export interface CreateContentPayload {
    title: string | null
    parent_id: string | null
    source_url: string | null
    body: string
}

interface CreateContentExtraPayload extends CreateContentPayload {
    status: string
    slug: string
}

export async function createContentUseCase(content: CreateContentPayload): Promise<ContentBase> {
    const endpoint = '/contents'

    const { userSession } = useUserContext.getState()

    if (!userSession)
        throw new UnauthorizedException('Você deve estar logado para publicar um conteúdo')

    const slug = content.title ? slugify(content.title, { locale: 'pt' }) : uuidv4()

    const response = await httpClient.post<
        ContentBase,
        AxiosResponse<ContentBase>,
        CreateContentExtraPayload
    >(
        endpoint,
        {
            ...content,
            status: 'published',
            slug,
        },
        { headers: { 'Content-Type': 'application/json' } }
    )

    return response.data
}
