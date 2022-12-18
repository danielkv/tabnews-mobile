import { StyledProps, styled } from 'nativewind'

import { Pressable } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'

type ButtonVariant = 'main' | 'outlined' | 'gray' | 'link'
export interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    onPress?(): void
    variant?: ButtonVariant
}

function getPressableStyles(variant: ButtonVariant, disabled?: boolean): string {
    switch (variant) {
        case 'main':
            return disabled ? 'bg-green-100' : 'bg-green-500'
        case 'outlined':
            return 'border-1 border-gray-100'
        case 'gray':
            return 'bg-gray-25'
        default:
            return ''
    }
}
function getTextStyles(variant: ButtonVariant, disabled?: boolean): string {
    switch (variant) {
        case 'main':
            return `font-bold ${disabled ? 'text-green-300' : 'text-white'}`
        default:
            return disabled ? 'text-gray-100' : ''
    }
}

const RawButton: React.FC<StyledProps<ButtonProps>> = ({
    children,
    disabled,
    variant = 'outlined',
    ...props
}) => {
    const extraPressableStyles = getPressableStyles(variant, disabled)
    const extraTextStyles = getTextStyles(variant, disabled)

    return (
        <Pressable
            className={`rounded-md py-5 ${extraPressableStyles} ${disabled ? '' : ''}`}
            disabled={disabled}
            android_ripple={{ color: variant === 'main' ? colors.green[700] : colors.gray[50] }}
            {...props}
        >
            {['number', 'string'].includes(typeof children) ? (
                <Text className={`text-center text-sm ${extraTextStyles}`}>{children}</Text>
            ) : (
                children
            )}
        </Pressable>
    )
}

export const Button = styled<ButtonProps>(RawButton)
