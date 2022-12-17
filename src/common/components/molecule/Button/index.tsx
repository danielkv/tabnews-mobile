import { StyledProps, styled } from 'nativewind'

import { Pressable } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'

type ButtonVariant = 'primary' | 'secondary'
export interface ButtonProps {
    label: string
    onPress?(): void
    variant?: ButtonVariant
}

function getPressableStyles(variant: ButtonVariant): string {
    if (variant === 'primary') return 'bg-green-500 '

    return 'bg-gray-25 border-1 border-gray-100'
}
function getTextStyles(variant: ButtonVariant): string {
    if (variant === 'primary') return 'font-bold text-white'

    return ''
}

const RawButton: React.FC<StyledProps<ButtonProps>> = ({
    label,
    variant = 'secondary',
    ...props
}) => {
    const extraPressableStyles = getPressableStyles(variant)
    const extraTextStyles = getTextStyles(variant)

    return (
        <Pressable
            className={`rounded-md py-5 ${extraPressableStyles}`}
            android_ripple={{ color: variant === 'primary' ? colors.green[700] : colors.gray[50] }}
            {...props}
        >
            <Text className={`text-center text-sm ${extraTextStyles}`}>{label}</Text>
        </Pressable>
    )
}

export const Button = styled<ButtonProps>(RawButton)
