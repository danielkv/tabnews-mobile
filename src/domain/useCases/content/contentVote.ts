import { AxiosResponse } from 'axios'

import httpClient from '@utils/http-client'

export type ContentVoteType = 'credit' | 'debit'

export interface ContentVoteResponse {
    tabcoins: number
}
export interface ContentVotePayload {
    transaction_type: ContentVoteType
}

export async function contentVote(
    type: ContentVoteType,
    author: string,
    slug: string
): Promise<ContentVoteResponse> {
    const path = 'contents'
    const endpoint = `${path}/${author}/${slug}/tabcoins`

    const response = await httpClient.post<
        ContentVoteResponse,
        AxiosResponse<ContentVoteResponse>,
        ContentVotePayload
    >(endpoint, { transaction_type: type })

    return response.data
}
