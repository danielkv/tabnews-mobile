import { FlatList, View } from 'react-native'

import { theme } from '@common/theme'
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
        <FlatList<Content>
            data={contents?.flat()}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <ContentItem
                    className="my-3"
                    itemNumber={index + 1}
                    content={item}
                />
            )}
            contentContainerStyle={{
                paddingVertical: theme.spacing[4],
                paddingHorizontal: theme.spacing[6],
            }}
        />
    )
}
