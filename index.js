/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import calendar from 'dayjs/plugin/calendar'
import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

dayjs.locale('pt-br')
dayjs.extend(calendar)

export const App = () => {
    const ctx = require.context('src/app')
    return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
