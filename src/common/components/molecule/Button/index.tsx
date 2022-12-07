import { StyledProps, styled } from 'nativewind'

import { Pressable } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'

export interface ButtonProps {
    label: string
    onPress?(): void
}

const RawButton: React.FC<StyledProps<ButtonProps>> = ({ label, ...props }) => {
    return (
        <Pressable
            className="bg-gray-25 border-1 border-gray-100 rounded-md py-3 "
            android_ripple={{ color: colors.gray[50] }}
            {...props}
        >
            <Text className="text-center text-sm">{label}</Text>
        </Pressable>
    )
}

export const Button = styled<ButtonProps>(RawButton)
