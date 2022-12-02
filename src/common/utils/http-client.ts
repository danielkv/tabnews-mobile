import axios from 'axios'
import Constants from 'expo-constants'

const baseURL = Constants.expoConfig?.extra?.API_BASE_URL || 'http://localhost'

const httpClient = axios.create({
    baseURL,
})

export default httpClient
