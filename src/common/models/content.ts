export type ContentStatus = 'published' | 'draft' | 'deleted'

export interface Content {
    id: string
    owner_id: string
    /**
     * In case null, it's a post otherwise it's a comment
     */
    parent_id: string | null
    slug: string
    /**
     * In case it is a comment, title will be null
     */
    title: string | null
    status: ContentStatus
    source_url: string | null
    created_at: string
    updated_at: string
    published_at: string
    deleted_at: string
    tabcoins: number
    owner_username: string
    children_deep_count: number
    children: Content[] | null
    body: string | null
}
