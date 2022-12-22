import { View } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'
import { Button } from '@components/molecule/Button'
import { Feather } from '@expo/vector-icons'
import { HeaderOptions } from '@utils/HeaderOptions'

import { useProfileViewModel } from './view-model'

export const ProfileView: React.FC = () => {
    const { onPressCreateContent, onPressLogout, onPressUpdateProfile } = useProfileViewModel()

    return (
        <View className="p-8 gap-8">
            <HeaderOptions title="Perfil" />

            <Button variant="main" onPress={onPressCreateContent}>
                Publicar novo conteúdo
            </Button>
            <Button variant="gray" onPress={onPressUpdateProfile}>
                <View className="flex-row justify-center items-center gap-6">
                    <Text>Editar perfil</Text>
                    <Feather name="external-link" size={14} color={colors.gray[500]} />
                </View>
            </Button>
            <View className="border-b-1 border-b-gray-50 " />
            <Button variant="link" onPress={onPressLogout}>
                Logout
            </Button>
        </View>
    )
}
