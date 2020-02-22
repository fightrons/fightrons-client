import React from 'react'
import { Route } from 'react-router-dom'

import UserLayout from 'libs/layouts/UserLayout/UserLayout.jsx'

const UserRoute = props => {
    const Page = props.page;

    return <Route {...props} render={props => (
        <UserLayout {...props}>
            <Page {...props} />
        </UserLayout>
    )} />
}

export default UserRoute