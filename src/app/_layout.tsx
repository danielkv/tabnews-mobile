import { prepareApp } from '@utils/prepareApp'

import { Children, Layout } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Header } from '@components/organisms/Header'

const layout: React.FC = () => {
    const [loadedApp, setLoadedApp] = useState(false)

    useEffect(() => {
        prepareApp().then(() => setLoadedApp(true))
    })

    if (!loadedApp) return null

    return (
        <Layout>
            <View className="flex-col">
                <Header />
                <Children />
            </View>
        </Layout>
    )
}

export default layout
