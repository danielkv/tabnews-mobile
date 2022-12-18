import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

import { usePasswordRecoverViewModel } from './view-model'

export const PasswordRecoverView: React.FC = () => {
    const {
        formValues,
        formErrors,
        loading,
        formDisabled,
        onChange,
        onSubmit,
        onPressAlreadyHaveAccount,
    } = usePasswordRecoverViewModel()

    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Recuperação de senha" />

                <View className="mb-8">
                    <Label>Digite seu email</Label>
                    <TextInput
                        disabled={formDisabled}
                        value={formValues.email}
                        onChangeText={onChange('email')}
                    />
                    <HelperText error>{formErrors?.email}</HelperText>
                </View>

                <View className="gap-6">
                    <Button disabled={formDisabled} variant="main" onPress={onSubmit}>
                        {loading ? <ActivityIndicator color="white" /> : 'Recuperar'}
                    </Button>
                    <Button
                        disabled={formDisabled}
                        variant="link"
                        onPress={onPressAlreadyHaveAccount}
                    >
                        Fazer login
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}
