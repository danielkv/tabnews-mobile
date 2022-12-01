import axios from 'axios'
import Constants from 'expo-constants'

const httpClient = axios.create({
    baseURL: Constants.expoConfig?.extra?.API_BASE_URL || 'http://localhost',
})

export default httpClient
