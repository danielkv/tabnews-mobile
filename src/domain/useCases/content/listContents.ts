import { Post } from '@models/content'
import httpClient from '@utils/http-client'

export type ListContentStrategy = 'new' | 'old' | 'relevant'

export async function listContentsUseCase(
    page = 0,
    perPage = 30,
    strategy: ListContentStrategy = 'relevant'
): Promise<Post[]> {
    const path = 'contents'

    const response = await httpClient.get<Post[]>(path, {
        params: { page, per_page: perPage, strategy },
    })

    return response.data
}
