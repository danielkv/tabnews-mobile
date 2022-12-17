import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Label } from '@components/atoms/Label'
import { TextInput } from '@components/atoms/TextInput'
import { Button } from '@components/molecule/Button'
import { HeaderOptions } from '@utils/HeaderOptions'

export const LoginView: React.FC = () => {
    return (
        <SafeAreaView>
            <View className="p-8">
                <HeaderOptions title="Login" />

                <Label>Email</Label>
                <TextInput keyboardType="email-address" className="mb-8" />

                <Label>Senha</Label>
                <TextInput secureTextEntry className="mb-8" />

                <View className="gap-6">
                    <Button variant="primary" label="Login" />
                    <Button label="Crie sua conta" />
                    <Button label="E" />
                </View>
            </View>
        </SafeAreaView>
    )
}
