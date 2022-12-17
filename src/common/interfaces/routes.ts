import React from 'react'

import { NavigationProp } from '@react-navigation/native'

export interface Route<Params extends Record<string, any> = any> {
    key: string
    name: string
    path: string
    params: Params
}

export type RouteComponent<Params extends Record<string, any> = any> = React.FC<{
    route: Route<Params>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}>
