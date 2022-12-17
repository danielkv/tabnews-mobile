import dayjs from 'dayjs'
import { StyledComponent } from 'nativewind'

import { Pressable, View } from 'react-native'

import { colors } from '@common/theme'
import { ContentInfo } from '@components/molecule/ContentInfo'
import { TabcoinsSideWrapper } from '@components/molecule/TabcoinsSideWrapper'
import { ContentBase } from '@models/contentBase'
import { ContentVoteType } from '@useCases/content/contentVote'

import { ContentBody } from './ContentBody'
import { ContentHeader } from './ContentHeader'

export interface ContentDefaultProps {
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    onPress(content: ContentBase): void
    content: ContentBase
}

export const ContentDefault: React.FC<ContentDefaultProps> = ({
    content,
    onPressVote,
    onPress,
}) => {
    const handlePressVote = (type: ContentVoteType) => () => {
        onPressVote(type, content.owner_username, content.slug)
    }

    const handleOnPress = () => {
        onPress(content)
    }

    return (
        <StyledComponent
            component={Pressable}
            onPress={handleOnPress}
            android_ripple={{ color: colors.gray[25] }}
            className="m-8"
        >
            <View className="flex-row">
                <TabcoinsSideWrapper
                    tabcoins={content.tabcoins}
                    onPressUpvote={handlePressVote('credit')}
                    onPressDownvote={handlePressVote('debit')}
                />
                <View className="flex-1 ml-6">
                    <ContentHeader content={content} />

                    <ContentBody>{content.body || ''}</ContentBody>

                    <ContentInfo.Container>
                        <ContentInfo.Item
                            info={content.tabcoins}
                            labels={['tabcoin', 'tabcoins']}
                        />
                        <ContentInfo.Item
                            info={content.children_deep_count}
                            labels={['resposta', 'respostas', 'nenhuma resposta']}
                        />
                        <ContentInfo.Item info={dayjs(content.created_at).fromNow()} />
                    </ContentInfo.Container>
                </View>
            </View>
        </StyledComponent>
    )
}
