import { Stack } from 'expo-router'

import React from 'react'

export interface HeaderOptionsProps {
    title?: string
}

export const HeaderOptions: React.FC<HeaderOptionsProps> = ({ title }) => {
    return <Stack.Screen options={{ title }} />
}
