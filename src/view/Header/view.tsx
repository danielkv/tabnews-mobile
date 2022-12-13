import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

import { TouchableOpacity, View } from 'react-native'

import Logo from '@assets/brand/light-outlined.svg'
import { Text } from '@components/atoms/Text'
import { HeaderLink } from '@components/molecule/HeaderLink'

import { useHeaderViewModel } from './view-model'

export const Header: React.FC = () => {
    const statusBarPadding = +Constants.statusBarHeight + 3
    const height = 60
    const statusFinalHeight = height + statusBarPadding

    const { handleBrandPress, handleNewPress, handleRelevantPress, selectedLink } =
        useHeaderViewModel()

    return (
        <View
            className={`bg-gray-900`}
            style={{ height: statusFinalHeight, paddingTop: statusBarPadding }}
        >
            <View className="bg-gray-500 flex-row flex-1 items-center align-baseline px-3">
                <StatusBar translucent={true} style="inverted" />

                <TouchableOpacity onPress={handleBrandPress} className="flex-row items-center mr-4">
                    <Logo width={40} height={40} />
                    <Text className="text-white text-sm font-bold">TabNews</Text>
                </TouchableOpacity>

                <HeaderLink onPress={handleRelevantPress} selected={selectedLink === 'relevant'}>
                    Relevantes
                </HeaderLink>

                <HeaderLink onPress={handleNewPress} selected={selectedLink === 'new'}>
                    Recentes
                </HeaderLink>
            </View>
        </View>
    )
}
