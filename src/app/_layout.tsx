import { Children, Layout, useHref } from 'expo-router'

import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Header } from '@components/organisms/Header'
import { prepareApp } from '@utils/prepareApp'

const layout: React.FC = (props) => {
    const [loadedApp, setLoadedApp] = useState(false)

    useEffect(() => {
        prepareApp().then(() => setLoadedApp(true))
    })

    const { params, pathname } = useHref()

    if (!loadedApp) return null

    const selectedLink =
        ['/', ''].includes(pathname) &&
        (params?.contentsListStrategy || 'relevant')

    return (
        <Layout>
            <View className="flex-col flex-1 ">
                <Header selectedLink={selectedLink} />
                <View className="flex-1">
                    <Children />
                </View>
            </View>
        </Layout>
    )
}

export default layout
