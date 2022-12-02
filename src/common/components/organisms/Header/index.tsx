import Constants from 'expo-constants'
import { useLink } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { TouchableOpacity, View } from 'react-native'

import Logo from '@assets/brand/light-outlined.svg'
import { Text } from '@components/atoms/Text'
import { HeaderLink } from '@components/molecule/HeaderLink'
import { ListContentStrategy } from '@useCases/content/listContents'

export interface HeaderProps {
    selectedLink?: ListContentStrategy
}

export const Header: React.FC<HeaderProps> = ({ selectedLink }) => {
    const statusBarPadding = +Constants.statusBarHeight + 3
    const height = 60
    const statusFinalHeight = height + statusBarPadding

    const link = useLink()

    return (
        <View
            className={`bg-gray-900`}
            style={{ height: statusFinalHeight, paddingTop: statusBarPadding }}
        >
            <View className="bg-gray-500 flex-row flex-1 items-center align-baseline px-3">
                <StatusBar translucent={true} style="inverted" />

                <TouchableOpacity
                    onPress={() => {
                        link.push({
                            pathname: '/a',
                            params: { contentsListStrategy: 'relevant' },
                        })
                    }}
                    className="flex-row items-center mr-4"
                >
                    <Logo width={40} height={40} />
                    <Text className="text-white text-sm font-bold">
                        TabNews
                    </Text>
                </TouchableOpacity>

                <HeaderLink
                    onPress={() => {
                        link.push({
                            pathname: '/',
                            params: { contentsListStrategy: 'relevant' },
                        })
                    }}
                    selected={selectedLink === 'relevant'}
                >
                    Relevantes
                </HeaderLink>

                <HeaderLink
                    onPress={() => {
                        link.push({
                            pathname: '/',
                            params: { contentsListStrategy: 'new' },
                        })
                    }}
                    selected={selectedLink === 'new'}
                >
                    Recentes
                </HeaderLink>
            </View>
        </View>
    )
}
