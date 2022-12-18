import { Pressable, View } from 'react-native'

import { colors } from '@common/theme'
import { SquareCounter } from '@components/molecule/SquareCounter'
import { Feather } from '@expo/vector-icons'

import { useHeaderRightViewModel } from './view-model'

export const HeaderRightView: React.FC = () => {
    const { loggedUser, onPressButtonLoggedOut, onPressButtonLoggedIn } = useHeaderRightViewModel()

    if (!loggedUser)
        return (
            <View>
                <Pressable
                    className="p-3 rounded-full"
                    android_ripple={{ color: colors.gray[900], borderless: true }}
                    onPress={onPressButtonLoggedIn}
                >
                    <Feather color="#fff" name="user" size={24} />
                </Pressable>
            </View>
        )

    return (
        <View className="flex-row items-center gap-6">
            <SquareCounter count={loggedUser.tabcoins} />
            <SquareCounter count={loggedUser.tabcash} color={colors.green[500]} />
            <Pressable
                className="p-3 rounded-full bg-gray-25"
                android_ripple={{ color: colors.gray[900], borderless: true }}
                onPress={onPressButtonLoggedOut}
            >
                <Feather color={colors.gray[900]} name="user" size={24} />
            </Pressable>
        </View>
    )
}
