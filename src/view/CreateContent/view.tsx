import { Pressable, View } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { colors } from '@common/theme'
import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { Text } from '@components/atoms/Text'
import { TextInput } from '@components/atoms/TextInput'
import { Feather } from '@expo/vector-icons'
import { HeaderOptions } from '@utils/HeaderOptions'

import { MarkdownEditor } from './../../common/components/organisms/MarkdownEditor/index'
import { useCreateContentViewModel } from './view-model'

export const CreateContentView: React.FC = () => {
    const {
        formValues,
        formDisabled,
        formErrors,
        loading,
        showPreview,
        parentId,
        onChange,
        onCancel,
        onSubmit,
        toggleShowPreview,
    } = useCreateContentViewModel()

    return (
        <View className="flex-1">
            <HeaderOptions
                title={!parentId ? 'Publicar novo conteúdo' : 'Responder'}
                headerLeft={() => (
                    <Pressable
                        disabled={formDisabled}
                        className="p-3 rounded-full items-start justify-start mr-10"
                        android_ripple={{ color: colors.gray[900], borderless: true }}
                        onPress={onCancel}
                    >
                        <Feather color={colors.white} name="x" size={24} />
                    </Pressable>
                )}
                headerRight={() => (
                    <View className="flex-row gap-8">
                        <Pressable
                            disabled={formDisabled}
                            className="p-3 rounded-full items-start justify-start "
                            android_ripple={{ color: colors.gray[900], borderless: true }}
                            onPress={toggleShowPreview}
                        >
                            <Feather
                                color={colors.white}
                                name={showPreview ? 'eye-off' : 'eye'}
                                size={24}
                            />
                        </Pressable>
                        <Pressable
                            disabled={formDisabled}
                            className="p-3 rounded-full items-start justify-start "
                            android_ripple={{ color: colors.gray[900], borderless: true }}
                            onPress={onSubmit}
                        >
                            <Feather color={colors.white} name="check" size={24} />
                        </Pressable>
                    </View>
                )}
            />

            <View className="p-8 bg-gray-25 flex-1">
                {showPreview ? (
                    <>
                        <Text className="text-xl mt-3 font-bold">{formValues.title}</Text>
                        <Markdown>{formValues.body}</Markdown>
                    </>
                ) : (
                    <>
                        {!parentId && (
                            <>
                                <Label>Título</Label>
                                <TextInput
                                    disabled={formDisabled}
                                    className="mb-8"
                                    value={formValues.title}
                                    onChangeText={onChange('title')}
                                />
                                <HelperText error>{formErrors?.title}</HelperText>
                            </>
                        )}
                        <HelperText error>{formErrors?.body}</HelperText>
                        <MarkdownEditor
                            disabled={formDisabled}
                            value={formValues.body}
                            onChangeText={onChange('body')}
                        />
                        {!parentId && (
                            <>
                                <Label className="mt-8">Fonte (opcional)</Label>
                                <TextInput
                                    disabled={formDisabled}
                                    className="mb-8"
                                    value={formValues.source_url}
                                    onChangeText={onChange('source_url')}
                                />
                                <HelperText error>{formErrors?.source_url}</HelperText>
                            </>
                        )}
                    </>
                )}
            </View>

            {loading && (
                <View className="absolute top-[0] bottom-[0] left-[0] right-[0] bg-[#000000cc] items-center justify-center">
                    <ActivityIndicator color={colors.white} size={30} />
                </View>
            )}
        </View>
    )
}
