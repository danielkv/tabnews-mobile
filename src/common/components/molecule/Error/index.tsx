import React from 'react'
import { View } from 'react-native'

import { colors } from '@common/theme'
import { Text } from '@components/atoms/Text'
import { Feather } from '@expo/vector-icons'

export interface ErrorBoxProps {
    error?: Error | string
    type?: 'alert' | 'error'
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({ error, type = 'error' }) => {
    const color = type === 'error' ? colors.red[500] : colors.yellow[500]
    const label = type === 'error' ? 'Ocorreu um erro' : 'Atenção'

    return (
        <View className="items-center m-8">
            <Feather name="alert-triangle" size={40} color={color} />
            <Text className="text-xl font-bold">{label}</Text>
            {error && <Text className="">{error instanceof Error ? error.message : error}</Text>}
        </View>
    )
}
