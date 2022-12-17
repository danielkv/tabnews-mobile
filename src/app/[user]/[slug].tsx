import { Stack } from 'expo-router'

import React from 'react'

import { RouteComponent } from '@common/interfaces/routes'
import ContentView from '@view/content/view'

const Content: RouteComponent = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Conteúdo' }} />
            <ContentView />
        </>
    )
}

export default Content
