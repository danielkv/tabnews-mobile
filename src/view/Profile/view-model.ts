import { ViewModelHook } from '@common/interfaces/app'
import { useLoggedUser } from '@contexts/user/userContext'
import { User } from '@models/user'
import { logUserOutUseCase } from '@useCases/sessions/logUserOut'

import { useProfileRouter } from './view-router'

export interface ProfileViewModelReturn {
    user: User | null
    onPressUpdateProfile(): void
    onPressCreateContent(): void
    onPressLogout(): void
}

export const useProfileViewModel: ViewModelHook<ProfileViewModelReturn> = () => {
    const user = useLoggedUser()

    const { openUpdateProfile, goToHome, goToCreateContent } = useProfileRouter()

    function onPressUpdateProfile() {
        openUpdateProfile()
    }

    function onPressCreateContent() {
        goToCreateContent()
    }

    function onPressLogout() {
        logUserOutUseCase()
        goToHome()
    }

    return {
        user,
        onPressUpdateProfile,
        onPressCreateContent,
        onPressLogout,
    }
}
