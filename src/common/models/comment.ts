import { ContentBase } from './contentBase'

export interface Comment extends ContentBase {
    title: null
    children: Comment[]
}
