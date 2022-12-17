import { ViewModelHook } from '@common/interfaces/app'
import { ListContentStrategy } from '@useCases/content/listContents'

import { useBottomBarRouter } from './view-router'

export interface BottomBarViewModelReturn {
    handleBrandPress(): void
    handleRelevantPress(): void
    handleNewPress(): void
    selectedLink: ListContentStrategy | null
}

export const useBottomBarViewModel: ViewModelHook<BottomBarViewModelReturn> = () => {
    const { pathname, listContentStrategy, ...router } = useBottomBarRouter()

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
