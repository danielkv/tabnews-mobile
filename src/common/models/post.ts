import { ContentBase } from './contentBase'

export type ContentStatus = 'published' | 'draft' | 'deleted'

export interface Post extends ContentBase {
    title: string
    parent_id: null
    children: undefined
}
