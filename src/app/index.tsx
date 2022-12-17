import { Stack } from 'expo-router'

import { RouteComponent } from '@common/interfaces/routes'
import { ListContentStrategy } from '@useCases/content/listContents'
import { HomeView } from '@view/home/view'

interface IndexRouteProps {
    contentsListStrategy?: ListContentStrategy
}

const IndexRoute: RouteComponent<IndexRouteProps> = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'TabNews' }} />
            <HomeView />
        </>
    )
}

export default IndexRoute
