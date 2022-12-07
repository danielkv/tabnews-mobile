import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
import { StyledComponent } from 'nativewind'

import { useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { WebView, WebViewMessageEvent } from 'react-native-webview'

import { theme } from '@common/theme'
import { ActivityIndicator } from '@components/atoms/ActivityIndicator'
import { Text } from '@components/atoms/Text'
import { Badge } from '@components/molecule/Badge'

import { useContentViewModel } from './view-model'

const markdownItInstance = MarkdownIt({ html: true })

const ContentView: React.FC = () => {
    const { content, loading } = useContentViewModel()
    const [height, setHeight] = useState(Dimensions.get('screen').height)

    if (!content && loading) return <ActivityIndicator />

    if (!content) return <Text>No result</Text>

    const createdLabel = dayjs(content.created_at).fromNow()

    const onWebViewMessage = (event: WebViewMessageEvent) => {
        setHeight(Number(event.nativeEvent.data))
    }

    function convertContentBody(body: string | null): string {
        const html = `<head>
				<style>
					body {color: ${theme.colors.gray[500]}; }
					img { max-width: 100% !important; }
				</style>
  			</head>
			<body>
            	${markdownItInstance.render(body ?? '')}
            </body>`

        return html
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View className="mt-8 mx-8 items-start">
                <View className="flex-row items-center gap-6 mb-3">
                    <Badge>{content.owner_username}</Badge>
                    <Text className="text-sm">{createdLabel}</Text>
                </View>
                <Text className="text-xl font-bold">{content.title}</Text>
            </View>

            <StyledComponent
                component={WebView}
                className="flex-1 mt-8 mx-6"
                style={{ height }}
                scalesPageToFit={false}
                scrollEnabled={false}
                automaticallyAdjustContentInsets
                domStorageEnabled={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                onMessage={onWebViewMessage}
                injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
                source={{ html: convertContentBody(content.body) }}
            />
        </ScrollView>
    )
}

export default ContentView
