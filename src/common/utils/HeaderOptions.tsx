import { Stack } from 'expo-router'

import React from 'react'

export interface HeaderOptionsProps {
    title?: string
    headerShown?: boolean
    headerLeft?(): React.ReactNode
    headerRight?(): React.ReactNode
}

export const HeaderOptions: React.FC<HeaderOptionsProps> = ({
    title,
    headerShown = true,
    headerLeft,
    headerRight,
}) => {
    const options: Record<string, any> = {}

    if (title !== undefined) options.title = title
    if (headerShown !== undefined) options.headerShown = headerShown
    if (headerLeft !== undefined) options.headerLeft = headerLeft
    if (headerRight !== undefined) options.headerRight = headerRight

    return <Stack.Screen options={options} />
}
