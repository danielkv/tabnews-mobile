import { StyledProps, styled } from 'nativewind'

import { TextInput as TextInputNative, TextInputProps as TextInputNativeProps } from 'react-native'

export interface TextInputProps extends TextInputNativeProps {}

const TextInputRaw: React.FC<StyledProps<TextInputProps>> = (props) => {
    return (
        <TextInputNative
            className="border-1 border-gray-50 rounded-md py-4 px-7 focus:border-blue-500"
            {...props}
        />
    )
}

export const TextInput = styled<TextInputProps>(TextInputRaw)
