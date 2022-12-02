import { ActivityIndicator as NativeActivityIndicator } from 'react-native'

import { colors } from '@common/theme'

export interface ActivityIndicatorProps {
    size?: number | 'small' | 'large'
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
    return <NativeActivityIndicator {...props} color={colors.gray[500]} />
}
