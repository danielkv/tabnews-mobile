import { StyledProps, styled } from 'nativewind'

import React from 'react'
import { View } from 'react-native'

import { DotSeparator } from '@components/atoms/DotSeparator'
import { Text } from '@components/atoms/Text'

export type ContentInfoItemProps = { hideEmpty?: boolean } & (
    | {
          labels?: undefined
          info: string
      }
    | {
          /**
           * Tuple with [singular, plural, empty value]
           */
          labels?: [string, string] | [string, string, string]
          info: number
      }
)

function getInfoLabel(
    info: ContentInfoItemProps['info'],
    labels?: ContentInfoItemProps['labels']
): string {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (!info && labels?.[2]) return labels[2]

    if (!labels) return String(info)

    if (typeof info === 'number') return info > 1 ? `${info} ${labels[1]}` : `${info} ${labels[0]}`

    return info
}

const ContentInfoItemRaw: React.FC<StyledProps<ContentInfoItemProps>> = ({
    labels,
    info,
    hideEmpty,
    ...props
}) => {
    if (!info && hideEmpty) return null

    const infoLabel = getInfoLabel(info, labels)

    return (
        <Text className="text-xs text-gray-300" {...props}>
            {infoLabel}
        </Text>
    )
}

export interface ContentInfoProps {
    children:
        | Array<React.ReactElement<ContentInfoItemProps>>
        | React.ReactElement<ContentInfoItemProps>
}

const ContentInfoRaw: React.FC<StyledProps<ContentInfoProps>> = ({ children, ...props }) => {
    return (
        <View className="flex-row gap-x-3 items-center" {...props}>
            {!Array.isArray(children)
                ? children
                : children
                      .filter((child) => !(!child.props.info && child.props.hideEmpty))
                      .reduce<React.ReactNode[]>((elements, info, index) => {
                          if (index > 0) elements.push(<DotSeparator key={`dot${index}`} />)

                          elements.push(info)
                          return elements
                      }, [])}
        </View>
    )
}

const ContentInfoItem = styled<ContentInfoItemProps>(ContentInfoItemRaw)
const ContentInfoContainer = styled<ContentInfoProps>(ContentInfoRaw)

export const ContentInfo = {
    Container: ContentInfoContainer,
    Item: ContentInfoItem,
}
