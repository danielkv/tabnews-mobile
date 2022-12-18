import { StyledProps, styled } from 'nativewind'

import { View } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'

export interface SquareCounterProps {
    count: number
    color?: string
}

const SquareCounterRaw: React.FC<StyledProps<SquareCounterProps>> = ({
    count,
    color = colors.blue[500],
    ...props
}) => {
    return (
        <View className="flex-row items-center gap-x-4" {...props}>
            <View className="w-6 h-6 rounded-sm" style={{ backgroundColor: color }} />
            <Text className="text-white font-bold text-sm">{count}</Text>
        </View>
    )
}

export const SquareCounter = styled<SquareCounterProps>(SquareCounterRaw)
