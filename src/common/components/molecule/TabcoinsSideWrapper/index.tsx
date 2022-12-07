import { TouchableOpacity, View } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'
import FeatherIcon from '@expo/vector-icons/Feather'

export interface TabcoinsSideWrapperProps {
    tabcoins: number
    onPressUp(): void
    onPressDown(): void
}

export const TabcoinsSideWrapper: React.FC<TabcoinsSideWrapperProps> = ({
    tabcoins,
    onPressUp,
    onPressDown,
}) => {
    return (
        <View className="items-center gap-y-5">
            <TouchableOpacity onPress={onPressUp}>
                <FeatherIcon name="chevron-up" size={16} color={colors.gray[300]} />
            </TouchableOpacity>
            <Text className="text-blue-500 text-sm">{tabcoins}</Text>
            <TouchableOpacity onPress={onPressDown}>
                <FeatherIcon name="chevron-down" size={16} color={colors.gray[300]} />
            </TouchableOpacity>
            <View className="border-l-1 border-gray-50 flex-1" />
        </View>
    )
}
