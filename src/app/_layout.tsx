import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { colors } from '@common/theme'
import { prepareApp } from '@utils/prepareApp'
import { BottomBar } from '@view/BottomBar/view'

const AppLayout: React.FC = () => {
    const [loadedApp, setLoadedApp] = useState(false)

    useEffect(() => {
        prepareApp().then(() => setLoadedApp(true))
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
                    }}
                />
            </View>
            <BottomBar />
        </>
    )
}

export default AppLayout
