import { Children, Layout } from 'expo-router'

import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Header } from '@components/organisms/Header/view'
import { prepareApp } from '@utils/prepareApp'

const layout: React.FC = () => {
    const [loadedApp, setLoadedApp] = useState(false)

    useEffect(() => {
        prepareApp().then(() => setLoadedApp(true))
    })

    if (!loadedApp) return null

    return (
        <Layout>
            <View className="flex-col flex-1 ">
                <Header />
                <View className="flex-1">
                    <Children />
                </View>
            </View>
        </Layout>
    )
}

export default layout
