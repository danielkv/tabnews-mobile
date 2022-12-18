import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

import { useLoginViewModel } from './view-model'

export const LoginView: React.FC = () => {
    const { formValues, formErrors, onChange, onSubmit } = useLoginViewModel()

    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Login" />

                <View className="mb-8">
                    <Label>Email</Label>
                    <TextInput
                        value={formValues.email}
                        onChangeText={onChange('email')}
                        keyboardType="email-address"
                    />
                    <HelperText error>{formErrors?.email}</HelperText>
                </View>

                <View className="mb-8">
                    <Label>Senha</Label>
                    <TextInput
                        value={formValues.password}
                        onChangeText={onChange('password')}
                        secureTextEntry
                    />
                    <HelperText error>{formErrors?.password}</HelperText>
                </View>

                <View className="gap-6">
                    <Button variant="main" onPress={onSubmit} label="Login" />
                    <Button variant="gray" label="Crie sua conta" />
                    <Button variant="link" label="Esqueceu a senha?" />
                </View>
            </View>
        </SafeAreaView>
    )
}
