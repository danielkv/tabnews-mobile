import { StyledProps, styled } from 'nativewind'

import { Text } from 'react-native'

export interface HelperTextProps {
    error?: boolean
    children?: string
}

const HelperTextRaw: React.FC<StyledProps<HelperTextProps>> = ({ children, error, ...props }) => {
    if (!children) return null

    return (
        <Text
            className={`font-regular text-sm ${error ? 'text-red-500' : 'text-gray-300'}`}
            {...props}
        >
            {children}
        </Text>
    )
}

export const HelperText = styled<HelperTextProps>(HelperTextRaw)
