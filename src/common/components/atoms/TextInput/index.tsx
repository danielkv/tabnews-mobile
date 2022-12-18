import { StyledProps, styled } from 'nativewind'

import { TextInput as TextInputNative, TextInputProps as TextInputNativeProps } from 'react-native'

export interface TextInputProps extends Omit<TextInputNativeProps, 'editable'> {
    disabled?: boolean
}

const TextInputRaw: React.FC<StyledProps<TextInputProps>> = ({ disabled, ...props }) => {
    return (
        <TextInputNative
            editable={!disabled}
            className={`border-1 border-gray-50 rounded-md py-4 px-7 focus:border-blue-500 ${
                disabled ? ' bg-gray-25' : 'bg-white'
            }`}
            {...props}
        />
    )
}

export const TextInput = styled<TextInputProps>(TextInputRaw)
