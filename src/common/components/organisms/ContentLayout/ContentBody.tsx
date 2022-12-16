import Markdown from 'react-native-markdown-display'

export interface ContentBodyProps {
    children: string
}

export const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
    return <Markdown>{children}</Markdown>
}
