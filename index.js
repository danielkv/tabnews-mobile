/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const App = () => {
    const ctx = require.context('src/app')
    return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
