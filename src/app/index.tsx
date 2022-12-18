import { useEffect } from 'react'

import { RouteComponent } from '@common/interfaces/routes'
import { HomeView } from '@view/home/view'

const IndexRoute: RouteComponent = ({ navigation }) => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        navigation.navigate({ name: 'new-account' })
    }, [])

    return <HomeView />
}

export default IndexRoute
