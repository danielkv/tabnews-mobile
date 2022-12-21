import React, { useRef, useState } from 'react'
import { ScrollView, TextInput, TouchableWithoutFeedback, View } from 'react-native'

export interface MarkDownEditorProps {
    value: string
    disabled?: boolean
    onChangeText(text: string): void
}

export const MarkdownEditor: React.FC<MarkDownEditorProps> = ({
    disabled,
    value,
    onChangeText,
}) => {
    const [inputHeight, setInputHeight] = useState(40)

    const inputRef = useRef<TextInput>(null)

    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={() => inputRef.current?.focus()}>
            <View className="bg-white flex-1 border-1 border-gray-50 rounded-md p-4">
                <ScrollView>
                    <TextInput
                        editable={!disabled}
                        ref={inputRef}
                        multiline
                        className={disabled ? 'bg-gray-50' : 'bg-white'}
                        style={{
                            height: inputHeight,
                        }}
                        value={value}
                        onContentSizeChange={({
                            nativeEvent: {
                                contentSize: { height },
                            },
                        }) => {
                            setInputHeight(height)
                        }}
                        onChangeText={onChangeText}
                    />
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}
