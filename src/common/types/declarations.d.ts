import 'react-native-markdown-display'

declare module '*.svg' {
    import React from 'react'
    import { SvgProps } from 'react-native-svg'
    const content: React.FC<SvgProps>
    export default content
}

declare module 'react-native-markdown-display' {
    interface MarkdownProps {
        children: string
    }
}
