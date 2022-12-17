import { View } from 'react-native'

import { AnswerBox } from '@components/molecule/AnswerBox'
import { TabcoinsSideWrapper } from '@components/molecule/TabcoinsSideWrapper'
import { ContentBase } from '@models/contentBase'
import { ContentVoteType } from '@useCases/content/contentVote'

import { ContentBody } from './ContentBody'
import { ContentHeader } from './ContentHeader'

export interface ContentMainProps {
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    content: ContentBase
}

export const ContentMain: React.FC<ContentMainProps> = ({ content, onPressVote }) => {
    const handlePressVote = (type: ContentVoteType) => () => {
        onPressVote(type, content.owner_username, content.slug)
    }

    return (
        <View className="m-8">
            <View className="flex-row">
                <TabcoinsSideWrapper
                    tabcoins={content.tabcoins}
                    onPressUpvote={handlePressVote('credit')}
                    onPressDownvote={handlePressVote('debit')}
                />
                <View className="flex-1 ml-6">
                    <ContentHeader content={content} />

                    <ContentBody>{content.body || ''}</ContentBody>
                </View>
            </View>
            <View className="mt-6">{<AnswerBox contentId={content.id} />}</View>
        </View>
    )
}
