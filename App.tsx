import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import { Text, View } from 'react-native'

const App: FC = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default App
