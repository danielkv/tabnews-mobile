import React from 'react'

import { RouteComponent } from '@common/interfaces/routes'
import { HeaderOptions } from '@utils/HeaderOptions'
import ContentView from '@view/content/view'

const Content: RouteComponent = () => {
    return (
        <>
            <HeaderOptions title="..." />
            <ContentView />
        </>
    )
}

export default Content
