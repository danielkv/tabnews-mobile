import { styled } from 'nativewind'

import { Text } from 'react-native'

export interface LabelProps {
    children: string
}

const LabelRaw: React.FC<LabelProps> = (props) => {
    return <Text className="text-sm font-bold mb-4" {...props} />
}

export const Label = styled<LabelProps>(LabelRaw)
