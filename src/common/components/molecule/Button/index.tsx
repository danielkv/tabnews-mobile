import { StyledProps, styled } from 'nativewind'

import { Pressable } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'

type ButtonVariant = 'main' | 'outlined' | 'gray' | 'link'
export interface ButtonProps {
    label: string
    onPress?(): void
    variant?: ButtonVariant
}

function getPressableStyles(variant: ButtonVariant): string {
    switch (variant) {
        case 'main':
            return 'bg-green-500'
        case 'outlined':
            return 'border-1 border-gray-100'
        case 'gray':
            return 'bg-gray-25'
        default:
            return ''
    }
}
function getTextStyles(variant: ButtonVariant): string {
    switch (variant) {
        case 'main':
            return 'font-bold text-white'
        default:
            return ''
    }
}

const RawButton: React.FC<StyledProps<ButtonProps>> = ({
    label,
    variant = 'outlined',
    ...props
}) => {
    const extraPressableStyles = getPressableStyles(variant)
    const extraTextStyles = getTextStyles(variant)

    return (
        <Pressable
            className={`rounded-md py-5 ${extraPressableStyles}`}
            android_ripple={{ color: variant === 'main' ? colors.green[700] : colors.gray[50] }}
            {...props}
        >
            <Text className={`text-center text-sm ${extraTextStyles}`}>{label}</Text>
        </Pressable>
    )
}

export const Button = styled<ButtonProps>(RawButton)
