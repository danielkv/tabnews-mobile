import { Comment } from '@models/comment'
import { ContentBase } from '@models/contentBase'
import { Post } from '@models/post'

export function isPost(content: ContentBase): content is Post {
    return !!content.title && !content.children
}

export function isComment(content: ContentBase): content is Comment {
    return !content.title && !!content.children
}
