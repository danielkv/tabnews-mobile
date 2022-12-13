import { Comment } from '@models/comment'
import httpClient from '@utils/http-client'

export async function getCommentsUseCase(author: string, slug: string): Promise<Comment[]> {
    const path = 'contents'
    const endpoint = `${path}/${author}/${slug}/children`

    const response = await httpClient.get<Comment[]>(endpoint)

    return response.data
}
