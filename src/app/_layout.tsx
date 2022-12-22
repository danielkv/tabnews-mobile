import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { colors } from '@common/theme'
import { getExceptionMessage } from '@utils/exceptions'
import { prepareApp } from '@utils/prepareApp'
import { BottomBarView } from '@view/BottomBar/view'
import { HeaderRightView } from '@view/HeaderRight/view'

const AppLayout: React.FC = () => {
    const [loadedApp, setLoadedApp] = useState(false)

    useEffect(() => {
        prepareApp()
            .then(() => setLoadedApp(true))
            .catch((err) => {
                Alert.alert('Ocorreu um erro', getExceptionMessage(err))
            })
    })

    if (!loadedApp) return null

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
