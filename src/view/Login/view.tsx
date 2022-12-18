import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { HelperText } from '@components/atoms/HelperText'
import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

import { useLoginViewModel } from './view-model'

export const LoginView: React.FC = () => {
    const {
        formValues,
        formErrors,
        loading,
        formDisabled,
        onChange,
        onSubmit,
        onPressCreateNewAccount,
        onPressPasswordRecover,
    } = useLoginViewModel()

    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Login" />

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
                        {loading ? <ActivityIndicator color="white" /> : 'Login'}
                    </Button>
                    <Button
                        disabled={formDisabled}
                        variant="gray"
                        onPress={onPressCreateNewAccount}
                    >
                        Crie sua conta
                    </Button>
                    <Button disabled={formDisabled} variant="link" onPress={onPressPasswordRecover}>
                        Esqueceu a senha?
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}
