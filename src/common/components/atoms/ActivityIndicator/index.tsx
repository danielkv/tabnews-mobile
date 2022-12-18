import { ActivityIndicator as NativeActivityIndicator } from 'react-native'

import { colors } from '@common/theme'

export interface ActivityIndicatorProps {
    size?: number | 'small' | 'large'
    color?: string
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color, ...props }) => {
    return <NativeActivityIndicator {...props} color={color ?? colors.gray[500]} />
}
