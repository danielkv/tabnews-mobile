export interface User {
    id: string
    username: string
    email: string
    notifications: boolean
    features: string[]
    tabcoins: number
    tabcash: number
    created_at: string
    updated_at: string
}

export interface UserSession {
    id: string
    token: string
    expires_at: string
    created_at: string
    updated_at: string
}
