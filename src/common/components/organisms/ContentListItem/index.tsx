import dayjs from 'dayjs'
import { StyledComponent, StyledProps, styled } from 'nativewind'

import { Pressable, View } from 'react-native'

import { theme } from '@common/theme'
import { Text } from '@components/atoms/Text'
import { Post } from '@models/post'

import { ContentInfo } from '../../molecule/ContentInfo'

export interface ContenteItemProps {
    itemNumber: number
    content: Post
    onPress?(content: Post): void
}

const RawContentListItem: React.FC<StyledProps<ContenteItemProps>> = ({
    content,
    itemNumber,
    onPress,
    ...rest
}) => {
    const titleClassName = 'font-bold text-sm'

    function handlePress() {
        onPress?.(content)
    }

    return (
        <StyledComponent
            component={Pressable}
            onPress={handlePress}
            android_ripple={{ color: theme.colors.gray[25] }}
            className="flex-row gap-4 pb-4 mx-6"
            {...rest}
        >
            <Text className={`${titleClassName} w-9 text-right`}>{itemNumber}.</Text>
            <View className="flex-1">
                <View className="flex-row">
                    <Text className={titleClassName}>{content.title}</Text>
                </View>
                <ContentInfo.Container>
                    <ContentInfo.Item info={content.tabcoins} labels={['tabcoin', 'tabcoins']} />
                    <ContentInfo.Item
                        info={content.children_deep_count}
                        labels={['comments', 'comment']}
                    />
                    <ContentInfo.Item info={content.owner_username} />
                    <ContentInfo.Item info={dayjs(content.created_at).fromNow()} />
                </ContentInfo.Container>
            </View>
        </StyledComponent>
    )
}

export const ContentListItem = styled<ContenteItemProps>(RawContentListItem)
