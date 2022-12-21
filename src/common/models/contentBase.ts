export type ContentStatus = 'published' | 'draft' | 'deleted'

export interface ContentBase {
    id: string
    owner_id: string
    owner_username: string
    parent_id: string | null
    slug: string
    title: string | null
    status: ContentStatus
    source_url: string | null
    created_at: string
    updated_at: string
    published_at: string
    deleted_at: string | null
    tabcoins: number
    children_deep_count: number
    children?: any[]
    body: string
}
