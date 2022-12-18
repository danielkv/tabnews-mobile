import axios from 'axios'
import Constants from 'expo-constants'

import { ApiException } from '@common/apiExeption'
import { useUserContext } from '@contexts/user/userContext'

import { isApiException } from './exceptions'

const baseURL = Constants.expoConfig?.extra?.API_BASE_URL || 'http://localhost'

const httpClient = axios.create({
    baseURL,
})

httpClient.interceptors.request.use((config) => {
    const userSession = useUserContext.getState().userSession
    if (userSession && config?.headers) config.headers.session_id = userSession.id

    return config
})

httpClient.interceptors.response.use(null, (error) => {
    if (isApiException(error?.response?.data)) {
        throw new ApiException(error.response.data)
    }

    throw error
})

export default httpClient
