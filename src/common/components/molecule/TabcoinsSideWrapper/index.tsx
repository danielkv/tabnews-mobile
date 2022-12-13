import { TouchableOpacity, View } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'
import FeatherIcon from '@expo/vector-icons/Feather'

export interface TabcoinsSideWrapperProps {
    tabcoins: number
    onPressUpvote(): void
    onPressDownvote(): void
}

export const TabcoinsSideWrapper: React.FC<TabcoinsSideWrapperProps> = ({
    tabcoins,
    onPressUpvote,
    onPressDownvote,
}) => {
    return (
        <View className="items-center gap-y-5">
            <TouchableOpacity onPress={onPressUpvote}>
                <FeatherIcon name="chevron-up" size={16} color={colors.gray[300]} />
            </TouchableOpacity>
            <Text className="text-blue-500 text-sm">{tabcoins}</Text>
            <TouchableOpacity onPress={onPressDownvote}>
                <FeatherIcon name="chevron-down" size={16} color={colors.gray[300]} />
            </TouchableOpacity>
            <View className="border-l-1 border-gray-50 flex-1" />
        </View>
    )
}
