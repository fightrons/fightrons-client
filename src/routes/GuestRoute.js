import React from 'react'
import { Route } from 'react-router-dom'

import GuestFormLayout from 'libs/layouts/GuestLayout/GuestFormLayout.jsx'

const GuestRoute = props => {
    const Page = props.page;

    return <Route {...props} render={props => (<GuestFormLayout {...props}>
        <Page {...props} />
    </GuestFormLayout>)} />
}

export default GuestRoute