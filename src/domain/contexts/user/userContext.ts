import create from 'zustand'

import { User } from '@common/models/user'

interface UserContext {
    setLoggedUser(user: User | null): void
    loggedUser: User | null
}

export const useUserContext = create<UserContext>((set) => ({
    loggedUser: null,
    setLoggedUser: (user) => set((state) => ({ ...state, loggedUser: user })),
}))

export function useIsUserLoggedIn(): boolean {
    const loggedUser = useUserContext((state) => state.loggedUser)

    return !!loggedUser
}

export function useLoggedUser(): User | null {
    const loggedUser = useUserContext((state) => state.loggedUser)

    return loggedUser
}
