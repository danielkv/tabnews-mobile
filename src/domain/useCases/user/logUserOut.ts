import { useUserContext } from '@contexts/user/userContext'

const setLoggedUser = useUserContext.getState().setLoggedUser
const setUserSession = useUserContext.getState().setUserSession

export function logUserOutUseCase(): void {
    setUserSession(null)
    setLoggedUser(null)
}
