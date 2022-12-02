import { StyledComponent, StyledProps } from 'nativewind'

import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

export type TextProps = StyledProps<NativeTextProps>

export const Text: React.FC<TextProps> = (props) => {
    return (
        <StyledComponent
            component={NativeText}
            className="text-gray-900 font-regular text-base"
            {...props}
        />
    )
}
