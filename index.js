/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

export const App = () => {
    const ctx = require.context('src/app')
    return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
