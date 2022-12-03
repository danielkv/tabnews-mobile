import { RouteComponent } from '@common/interfaces/routes'
import { ListContentStrategy } from '@useCases/content/listContents'
import { HomeView } from '@view/home/view'

interface IndexRouteProps {
    contentsListStrategy?: ListContentStrategy
}

const IndexRoute: RouteComponent<IndexRouteProps> = ({ route }) => {
    return <HomeView contentListStrategy={route.params?.contentsListStrategy} />
}

export default IndexRoute
