import { View } from 'react-native'
import Markdown from 'react-native-markdown-display'

export interface ContentBodyProps {
    children: string
}

export const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
    return (
        <View className="flex-1 ml-6">
            <Markdown>{children}</Markdown>
        </View>
    )
}
