import { ContentBase } from '@models/contentBase'
import { ContentVoteType } from '@useCases/content/contentVote'

import { ContentDefault } from './ContentDefault'
import { ContentMain } from './ContentMain'

export type ContentLayoutProps = {
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    content: ContentBase
} & (
    | {
          main: true
          onPressAnswer(content: ContentBase): void
          onPress?: undefined
      }
    | {
          main?: false | undefined
          onPressAnswer?: undefined
          onPress(content: ContentBase): void
      }
)

export const ContentLayout: React.FC<ContentLayoutProps> = ({
    content,
    onPressVote,
    onPressAnswer,
    main,
    onPress,
}) => {
    if (main)
        return (
            <ContentMain
                onPressAnswer={onPressAnswer}
                content={content}
                onPressVote={onPressVote}
            />
        )

    return <ContentDefault content={content} onPressVote={onPressVote} onPress={onPress} />
}
