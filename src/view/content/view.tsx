import { ScrollView, View } from 'react-native'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { Text } from '@components/atoms/Text'
import { ContentLayout } from '@components/organisms/ContentLayout'

import { useContentViewModel } from './view-model'

const ContentView: React.FC = () => {
    const { content, loading, onPressVote, comments } = useContentViewModel()

    if (!content && loading) return <ActivityIndicator />

    if (!content) return <Text>No result</Text>

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View>
                <ContentLayout onPressVote={onPressVote} content={content} />

                <View>
                    {comments.map((comment) => (
                        <ContentLayout
                            key={comment.id}
                            content={comment}
                            onPressVote={async () => {}}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default ContentView
