import { FlatList, View } from 'react-native'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { ContentItem } from '@components/molecule/ContentItem'
import { Content } from '@models/content'
import { ListContentStrategy } from '@useCases/content/listContents'

import { useHomeModelView } from './model-view'

export interface HomeViewProps {
    contentListStrategy?: ListContentStrategy
}

export const HomeView: React.FC<HomeViewProps> = ({ contentListStrategy }) => {
    const { contents, loading } = useHomeModelView(contentListStrategy)

    if (loading)
        return (
            <View className="mt-4">
                <ActivityIndicator size={30} />
            </View>
        )

    return (
        <View className="flex-1">
            <FlatList<Content>
                data={contents?.flat()}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <ContentItem itemNumber={index + 1} content={item} />
                )}
            />
        </View>
    )
}
