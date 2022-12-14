import dayjs from 'dayjs'

import React from 'react'
import { View } from 'react-native'

import { Text } from '@components/atoms/Text'
import { Badge } from '@components/molecule/Badge'
import { ContentBase } from '@models/contentBase'

export interface ContentHeaderProps {
    content: ContentBase
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({ content }) => {
    const createdLabel = dayjs(content.created_at).fromNow()

    return (
        <View className="items-start ml-5 mb-6">
            <View className="flex-row items-center gap-6 ">
                <Badge>{content.owner_username}</Badge>
                <Text className="text-sm">{createdLabel}</Text>
            </View>
            {content.title && <Text className="text-xl mt-3 font-bold">{content.title}</Text>}
        </View>
    )
}
