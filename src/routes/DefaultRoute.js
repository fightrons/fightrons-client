import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const DefaultRoute = props => {
    return <Route {...props} render={() => <Redirect to="/login" />} />
}

export default DefaultRoute