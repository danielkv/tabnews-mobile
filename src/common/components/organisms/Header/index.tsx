import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import Logo from '../../../../../assets/brand/light-outlined.svg'

export const Header: React.FC = () => {
    const statusBarPadding = +Constants.statusBarHeight + 3
    const height = 60
    const statusFinalHeight = height + statusBarPadding

    return (
        <View
            className={`bg-gray-900`}
            style={{ height: statusFinalHeight, paddingTop: statusBarPadding }}
        >
            <View className={`bg-gray-500 flex-1 justify-center px-3`}>
                <StatusBar translucent={true} style="inverted" />
                <Logo width={120} height={100} />
            </View>
        </View>
    )
}
