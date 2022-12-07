import { StyledProps, styled } from 'nativewind'

import { View } from 'react-native'

import { Text } from '@components/atoms/Text'

export interface BadgeProps {
    children: string
}

const RawBadge: React.FC<StyledProps<BadgeProps>> = ({ children, ...props }) => {
    return (
        <View className={`bg-lightBlue-500 rounded-md px-4 py-2`} {...props}>
            <Text className="text-blue-500 text-sm">{children}</Text>
        </View>
    )
}

export const Badge = styled<BadgeProps>(RawBadge)
