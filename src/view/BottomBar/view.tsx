import { TouchableOpacity, View } from 'react-native'

import Logo from '@assets/brand/light-outlined.svg'
import { HeaderLink } from '@components/molecule/HeaderLink'

import { useBottomBarViewModel } from './view-model'

export const BottomBarView: React.FC = () => {
    const height = 60

    const { handleBrandPress, handleNewPress, handleRelevantPress, selectedLink } =
        useBottomBarViewModel()

    return (
        <View style={{ height }}>
            <View className="bg-gray-500 flex-row flex-1 items-center justify-center align-baseline px-3">
                <HeaderLink onPress={handleRelevantPress} selected={selectedLink === 'relevant'}>
                    Relevantes
                </HeaderLink>

                <TouchableOpacity
                    onPress={handleBrandPress}
                    className="flex-row items-center mr-4 bg-gray-900 p-8 rounded-full"
                >
                    <Logo width={40} height={40} />
                </TouchableOpacity>

                <HeaderLink onPress={handleNewPress} selected={selectedLink === 'new'}>
                    Recentes
                </HeaderLink>
            </View>
        </View>
    )
}
