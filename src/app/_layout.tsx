import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import Logo from '@assets/brand/light-outlined.svg'
import { colors } from '@common/theme'
import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { getExceptionMessage } from '@utils/exceptions'
import { prepareApp } from '@utils/prepareApp'
import { BottomBarView } from '@view/BottomBar/view'
import { HeaderRightView } from '@view/HeaderRight/view'

const AppLayout: React.FC = () => {
    const [loadedApp, setLoadedApp] = useState(false)

    function loadApp() {
        prepareApp()
            .catch((err) => {
                Alert.alert('Ocorreu um erro', getExceptionMessage(err), [
                    { text: 'Tentar novamente', onPress: loadApp },
                ])
            })
            .finally(() => setLoadedApp(true))
    }

    useEffect(() => {
        loadApp()
    }, [])

    if (!loadedApp)
        return (
            <View className="bg-gray-500 items-center justify-center flex-1">
                <StatusBar style="inverted" />
                <Logo width={80} height={80} className="mb-6" />
                <ActivityIndicator color="white" size={30} />
            </View>
        )

    return (
        <>
            <View className="flex-1">
                <StatusBar translucent={true} style="inverted" />
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.gray[500],
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: { fontSize: 16 },

                        contentStyle: {
                            backgroundColor: '#fff',
                        },

                        headerRight: () => <HeaderRightView />,
                    }}
                />
            </View>
            <BottomBarView />
        </>
    )
}

export default AppLayout
