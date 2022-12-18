import create from 'zustand'

import { User, UserSession } from '@common/models/user'

interface UserContext {
    setLoggedUser(user: User | null): void
    setUserSession(userSession: UserSession | null): void
    loggedUser: User | null
    userSession: UserSession | null
}

export const useUserContext = create<UserContext>((set) => ({
    loggedUser: null,
    userSession: null,
    setLoggedUser: (loggedUser) => set((state) => ({ ...state, loggedUser })),
    setUserSession: (userSession) => set((state) => ({ ...state, userSession })),
}))

export function useIsUserLoggedIn(): boolean {
    const isUserLoggedIn = useUserContext((state) => !!state.userSession && !!state.loggedUser)

    return isUserLoggedIn
}

export function useLoggedUser(): User | null {
    const loggedUser = useUserContext((state) => state.loggedUser)

    return loggedUser
}
