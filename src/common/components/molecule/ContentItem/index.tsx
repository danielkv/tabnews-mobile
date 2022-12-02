import dayjs from 'dayjs'

import { View } from 'react-native'

import { Text } from '@components/atoms/Text'
import { Content } from '@models/content'

export interface ContenteItemProps {
    itemNumber: number
    content: Content
}

export const ContentItem: React.FC<ContenteItemProps> = ({
    content,
    itemNumber,
}) => {
    const tabcoinsLabel = content.tabcoins > 1 ? 'tabcoins' : 'tabcoin'
    const comentsLabel =
        content.children_deep_count > 1 ? 'comments' : 'comment'
    const createdLabel = dayjs(content.created_at).calendar()

    const titleClassName = 'font-bold'
    const descriptionClassName = 'text-xs text-gray-300'

    return (
        <View className="flex-row gap-2 flex-1">
            <Text className={`${titleClassName} w-5 text-right`}>
                {itemNumber}.
            </Text>
            <View className="flex-1">
                <View className="flex-row">
                    <Text className={titleClassName}>{content.title}</Text>
                </View>
                <View className="flex-row gap-3 ">
                    <Text
                        className={descriptionClassName}
                    >{`${content.tabcoins} ${tabcoinsLabel}`}</Text>
                    <Text
                        className={descriptionClassName}
                    >{`${content.children_deep_count} ${comentsLabel}`}</Text>
                    <Text className={descriptionClassName}>
                        {content.owner_username}
                    </Text>
                    <Text className={descriptionClassName}>{createdLabel}</Text>
                </View>
            </View>
        </View>
    )
}
