import { FlatList, View } from 'react-native'

import { theme } from '@common/theme'
import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { ContentListItem } from '@components/molecule/ContentListItem'
import { Post } from '@models/content'

import { useHomeViewModel } from './view-model'

export const HomeView: React.FC = () => {
    const { contents, loading, loadNextPage, handleContentPress } = useHomeViewModel()

    if (loading && !contents?.length)
        return (
            <View className="mt-4">
                <ActivityIndicator size={30} />
            </View>
        )

    return (
        <FlatList<Post>
            data={contents?.flat()}
            keyExtractor={(item, index) => `${item.id}${index}`}
            renderItem={({ item, index }) => (
                <ContentListItem
                    className="my-3"
                    onPress={handleContentPress}
                    itemNumber={index + 1}
                    content={item}
                />
            )}
            contentContainerStyle={{
                paddingVertical: theme.spacing[4],
                paddingHorizontal: theme.spacing[6],
            }}
            onEndReached={loadNextPage}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
    )
}
