import { useState } from 'react'
import { Text, View } from 'react-native'
import Markdown, { MarkdownIt } from 'react-native-markdown-display'
import RenderHtml from 'react-native-render-html'

export interface ContentBodyProps {
    children: string
}

const content = `<table style="width: 300px;">
				<tr>
					<td width="50%">
						<img src="https://github.com/danielkv/tabnew-mobile/blob/main/screenshots/Screenshot_1672791167.png?raw=true" />
					</td>
					<td  width="50%">
						<img src="https://github.com/danielkv/tabnew-mobile/blob/main/screenshots/Screenshot_1672791178.png?raw=true" />
					</td>
				</tr>
			</table>`

const renderersProps = {
    img: {
        enableExperimentalPercentWidth: true,
    },
}

export const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
    const [width, setWidth] = useState(300)

    return (
        <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
            <Markdown
                rules={{
                    html_block: (node, children, parent, styles) => {
                        return (
                            <RenderHtml
                                computeEmbeddedMaxWidth={(width, tag) => {
                                    if (tag === 'img') return 100
                                    return width
                                }}
                                renderersProps={renderersProps}
                                contentWidth={width}
                                source={{ html: node.content }}
                            />
                        )
                    },
                }}
                markdownit={MarkdownIt({ html: true })}
            >
                {children}
            </Markdown>
        </View>
    )
}
