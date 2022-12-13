import { ViewModelHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

import { useHeaderRouter } from './view-router'

export interface HeaderViewModelReturn {
    handleBrandPress(): void
    handleRelevantPress(): void
    handleNewPress(): void
    selectedLink: ListContentStrategy | null
}

export const useHeaderViewModel: ViewModelHook<HeaderViewModelReturn> = () => {
    const { pathname, listContentStrategy, ...router } = useHeaderRouter()

    const selectedLink = ['/', ''].includes(pathname) ? listContentStrategy ?? 'relevant' : null

    function handleBrandPress() {
        router.filter('relevant')
    }
    function handleRelevantPress() {
        router.filter('relevant')
    }
    function handleNewPress() {
        router.filter('new')
    }

    return {
        handleBrandPress,
        handleRelevantPress,
        handleNewPress,
        selectedLink,
    }
}
