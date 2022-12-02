import dayjs from 'dayjs'
import { StyledProps, styled } from 'nativewind'

import { View } from 'react-native'

import { DotSeparator } from '@components/atoms/DotSeparator'
import { Text } from '@components/atoms/Text'
import { Content } from '@models/content'

export interface ContenteItemProps {
    itemNumber: number
    content: Content
}

const RawContentItem: React.FC<StyledProps<ContenteItemProps>> = ({
    content,
    itemNumber,
    ...rest
}) => {
    const tabcoinsLabel = content.tabcoins > 1 ? 'tabcoins' : 'tabcoin'
    const comentsLabel =
        content.children_deep_count > 1 ? 'comments' : 'comment'
    const createdLabel = dayjs(content.created_at).fromNow()

    const titleClassName = 'font-bold text-sm'
    const descriptionClassName = 'text-xs text-gray-300'

    return (
        <View className="flex-row gap-4" {...rest}>
            <Text className={`${titleClassName} w-9  text-right`}>
                {itemNumber}.
            </Text>
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
                    <Text className={descriptionClassName}>
                        {content.owner_username}
                    </Text>
                    <DotSeparator />
                    <Text className={descriptionClassName}>{createdLabel}</Text>
                </View>
            </View>
        </View>
    )
}

export const ContentItem = styled<ContenteItemProps>(RawContentItem)
