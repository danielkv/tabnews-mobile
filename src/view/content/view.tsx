import MarkdownIt from 'markdown-it'

import { useState } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { WebView, WebViewMessageEvent } from 'react-native-webview'

import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { Text } from '@components/atoms/Text'

import { useContentViewModel } from './view-model'

const markdownItInstance = MarkdownIt({ html: true })

const ContentView: React.FC = () => {
    const { content, loading } = useContentViewModel()
    const [height, setHeight] = useState(Dimensions.get('screen').height)

    if (!content && loading) return <ActivityIndicator />

    if (!content) return <Text>No result</Text>

    const onWebViewMessage = (event: WebViewMessageEvent) => {
        setHeight(Number(event.nativeEvent.data))
    }

    const html = markdownItInstance.render(content.body ?? '')

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text>{content.title}</Text>

            <WebView
                style={{
                    marginTop: 20,
                    flex: 1,
                    height,
                }}
                scalesPageToFit={false}
                scrollEnabled={false}
                automaticallyAdjustContentInsets
                domStorageEnabled={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                onMessage={onWebViewMessage}
                injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
                source={{ html }}
            />
        </ScrollView>
    )
}

export default ContentView
