import { ContentBase } from '@models/contentBase'
import { ContentVoteType } from '@useCases/content/contentVote'

import { ContentDefault } from './ContentDefault'
import { ContentMain } from './ContentMain'

export type ContentLayoutProps = {
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    content: ContentBase
} & (
    | {
          onPress?: undefined
          main: true
      }
    | {
          onPress(content: ContentBase): void
          main?: false | undefined
      }
)

export const ContentLayout: React.FC<ContentLayoutProps> = ({
    content,
    onPressVote,
    main,
    onPress,
}) => {
    if (main) return <ContentMain content={content} onPressVote={onPressVote} />

    return <ContentDefault content={content} onPressVote={onPressVote} onPress={onPress} />
}
