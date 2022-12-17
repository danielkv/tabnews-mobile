import { Stack } from 'expo-router'

import { ScrollView, View } from 'react-native'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { Text } from '@components/atoms/Text'
import { ContentLayout } from '@components/organisms/ContentLayout'

import { useContentViewModel } from './view-model'

const ContentView: React.FC = () => {
    const { content, loading, onPressVote, comments, onPressComment } = useContentViewModel()

    if (!content && loading) return <ActivityIndicator />

    if (!content) return <Text>No result</Text>

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <Stack.Screen options={{ title: content.title || 'Resposta' }} />

            <View>
                <ContentLayout main onPressVote={onPressVote} content={content} />

                <View>
                    {comments.map((comment) => (
                        <ContentLayout
                            key={comment.id}
                            content={comment}
                            onPressVote={async () => {}}
                            onPress={onPressComment}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default ContentView
