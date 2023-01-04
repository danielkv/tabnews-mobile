import dotenv from 'dotenv'
import { ConfigContext, ExpoConfig } from 'expo/config'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: 'TabNews',
    slug: 'tabnews',
    scheme: 'tabnews',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#24292F',
    },
    updates: {
        fallbackToCacheTimeout: 0,
        url: 'https://u.expo.dev/5e86c1a4-900c-4826-b9ff-824c66002433',
    },
    runtimeVersion: {
        policy: 'sdkVersion',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
    },
    android: {
        package: 'com.tabnews.mobile',
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#24292F',
        },
    },
    web: {
        favicon: './assets/favicon.png',
    },
    extra: {
        ...process.env,
        eas: {
            projectId: '5e86c1a4-900c-4826-b9ff-824c66002433',
        },
    },
})
