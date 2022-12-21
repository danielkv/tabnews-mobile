import { ContentBase } from './contentBase'

export interface Comment extends ContentBase {
    title: null
    parent_id: string
    children: Comment[]
}
