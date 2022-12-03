import { StyledProps, styled } from 'nativewind'

import { Pressable, View } from 'react-native'

import { theme } from '@common/theme'
import { Text } from '@components/atoms/Text'

export interface HeaderLinkProps {
    children: string
    selected?: boolean
    onPress?(): void
}

const RawHeaderLink: React.FC<StyledProps<HeaderLinkProps>> = ({
    children,
    selected,
    onPress,
    ...rest
}) => {
    return (
        <Pressable
            className="rounded-lg px-6 py-5 mx-2"
            android_ripple={{ color: theme.colors.gray[700] }}
            onPress={onPress}
            {...rest}
        >
            <Text className="font-bold text-white text-sm">{children}</Text>
            <View className={` h-2 mt-1 ${selected ? 'bg-white' : ''}`}></View>
        </Pressable>
    )
}

export const HeaderLink = styled<HeaderLinkProps>(RawHeaderLink)
