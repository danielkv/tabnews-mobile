import { Post } from '@models/post'
import httpClient from '@utils/http-client'

export async function getContentUseCase(author: string, slug: string): Promise<Post> {
    const path = 'contents'
    const endpoint = `${path}/${author}/${slug}`

    const response = await httpClient.get<Post>(endpoint)

    return response.data
}
