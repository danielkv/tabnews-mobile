import dayjs from 'dayjs'
import { StyledComponent, StyledProps, styled } from 'nativewind'

import { Pressable, View } from 'react-native'

import { theme } from '@common/theme'
import { DotSeparator } from '@components/atoms/DotSeparator'
import { Text } from '@components/atoms/Text'
import { Content } from '@models/content'

export interface ContenteItemProps {
    itemNumber: number
    content: Content
    onPress?(content: Content): void
}

const RawContentItem: React.FC<StyledProps<ContenteItemProps>> = ({
    content,
    itemNumber,
    onPress,
    ...rest
}) => {
    const tabcoinsLabel = content.tabcoins > 1 ? 'tabcoins' : 'tabcoin'
    const comentsLabel = content.children_deep_count > 1 ? 'comments' : 'comment'
    const createdLabel = dayjs(content.created_at).fromNow()

    const titleClassName = 'font-bold text-sm'
    const descriptionClassName = 'text-xs text-gray-300'

    function handlePress() {
        onPress?.(content)
    }

    return (
        <StyledComponent
            component={Pressable}
            onPress={handlePress}
            android_ripple={{ color: theme.colors.gray[25] }}
            className="flex-row gap-4 pb-4"
            {...rest}
        >
            <Text className={`${titleClassName} w-9  text-right`}>{itemNumber}.</Text>
            <View className="flex-1">
                <View className="flex-row">
                    <Text className={titleClassName}>{content.title}</Text>
                </View>
                <View className="flex-row gap-x-3 items-center">
                    <Text
                        className={descriptionClassName}
                    >{`${content.tabcoins} ${tabcoinsLabel}`}</Text>
                    <DotSeparator />
                    <Text
                        className={descriptionClassName}
                    >{`${content.children_deep_count} ${comentsLabel}`}</Text>
                    <DotSeparator />
                    <Text className={descriptionClassName}>{content.owner_username}</Text>
                    <DotSeparator />
                    <Text className={descriptionClassName}>{createdLabel}</Text>
                </View>
            </View>
        </StyledComponent>
    )
}

export const ContentItem = styled<ContenteItemProps>(RawContentItem)
