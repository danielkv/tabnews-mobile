import { Content } from '@models/content'
import httpClient from '@utils/http-client'

export async function getContentUseCase(user: string, slug: string): Promise<Content> {
    const path = 'contents'
    const endpoint = `${path}/${user}/${slug}`

    const response = await httpClient.get<Content>(endpoint)

    return response.data
}
