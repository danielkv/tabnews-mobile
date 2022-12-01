import { Children, Layout } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

import { Header } from '@components/organisms/Header'

const layout: React.FC = () => {
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
