import { View } from 'react-native'

import { Button } from '@components/molecule/Button'

export interface AnswerBoxProps {
    contentId: string
}

export const AnswerBox: React.FC<AnswerBoxProps> = ({ contentId }) => {
    return (
        <View>
            <Button children="Responder" />
        </View>
    )
}
