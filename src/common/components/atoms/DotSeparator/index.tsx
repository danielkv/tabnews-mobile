import { styled } from 'nativewind'

import { View } from 'react-native'

export const DotSeparator: React.FC = styled((props) => {
    return <View className="rounded-full w-2 h-2 bg-gray-100" {...props} />
})
