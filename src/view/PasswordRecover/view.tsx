import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

import { usePasswordRecoverViewModel } from './view-model'

export const PasswordRecoverView: React.FC = () => {
    const { formValues, formErrors, onChange, onSubmit, onPressAlreadyHaveAccount } =
        usePasswordRecoverViewModel()

    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Recuperação de senha" />

                <View className="mb-8">
                    <Label>Digite seu usuário ou email</Label>
                    <TextInput value={formValues.email} onChangeText={onChange('email')} />
                    <HelperText error>{formErrors?.email}</HelperText>
                </View>

                <View className="gap-6">
                    <Button variant="main" onPress={onSubmit} label="Recuperar" />
                    <Button
                        variant="link"
                        onPress={onPressAlreadyHaveAccount}
                        label="Fazer login"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
