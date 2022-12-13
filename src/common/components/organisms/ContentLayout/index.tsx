import dayjs from 'dayjs'
import { StyledComponent } from 'nativewind'

import { useState } from 'react'
import { View } from 'react-native'
import WebView, { WebViewMessageEvent } from 'react-native-webview'

import { Text } from '@components/atoms/Text'
import { AnswerBox } from '@components/molecule/AnswerBox'
import { Badge } from '@components/molecule/Badge'
import { TabcoinsSideWrapper } from '@components/molecule/TabcoinsSideWrapper'
import { ContentBase } from '@models/contentBase'
import { ContentVoteType } from '@useCases/content/contentVote'
import { contentBodyToHtml } from '@utils/contentBodyToHtml'

export interface ContentLayoutProps {
    onPressVote(type: ContentVoteType, author: string, slug: string): Promise<void>
    content: ContentBase
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ content, onPressVote }) => {
    const [height, setHeight] = useState(300)

    function onWebViewMessage(event: WebViewMessageEvent) {
        setHeight(Number(event.nativeEvent.data))
    }

    const createdLabel = dayjs(content.created_at).fromNow()

    const handlePressVote = (type: ContentVoteType) => () => {
        onPressVote(type, content.owner_username, content.slug)
    }

    return (
        <View className="flex-1 m-8">
            <View className="flex-row">
                <TabcoinsSideWrapper
                    tabcoins={content.tabcoins}
                    onPressUpvote={handlePressVote('credit')}
                    onPressDownvote={handlePressVote('debit')}
                />
                <View className="flex-1">
                    <View className="items-start ml-5">
                        <View className="flex-row items-center gap-6 mb-3">
                            <Badge>{content.owner_username}</Badge>
                            <Text className="text-sm">{createdLabel}</Text>
                        </View>
                        <Text className="text-xl font-bold">{content.title}</Text>
                    </View>

                    <StyledComponent
                        component={WebView}
                        className="flex-1 mt-8 mr-6"
                        style={{
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
                        source={{
                            html: contentBodyToHtml(content.body),
                        }}
                    />
                </View>
            </View>
            <AnswerBox contentId={content.id} />
        </View>
    )
}
