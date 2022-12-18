import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

import { useNewAccountViewModel } from './view-model'

export const NewAccountView: React.FC = () => {
    const { formValues, formErrors, onChange, onSubmit, onPressAlreadyHaveAccount, formDisabled } =
        useNewAccountViewModel()

    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Cadastro" />

                <View className="mb-8">
                    <Label>Nome do usuário</Label>
                    <TextInput
                        disabled={formDisabled}
                        value={formValues.username}
                        onChangeText={onChange('username')}
                    />
                    <HelperText error>{formErrors?.username}</HelperText>
                </View>

                <View className="mb-8">
                    <Label>Email</Label>
                    <TextInput
                        disabled={formDisabled}
                        value={formValues.email}
                        onChangeText={onChange('email')}
                        keyboardType="email-address"
                    />
                    <HelperText error>{formErrors?.email}</HelperText>
                </View>

                <View className="mb-8">
                    <Label>Senha</Label>
                    <TextInput
                        disabled={formDisabled}
                        value={formValues.password}
                        onChangeText={onChange('password')}
                        secureTextEntry
                    />
                    <HelperText error>{formErrors?.password}</HelperText>
                </View>

                <View className="gap-6">
                    <Button disabled={formDisabled} variant="main" onPress={onSubmit}>
                        Criar cadastro
                    </Button>
                    <Button
                        disabled={formDisabled}
                        variant="link"
                        onPress={onPressAlreadyHaveAccount}
                    >
                        Já tenho uma conta
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}
