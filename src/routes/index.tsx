import React from 'react'
import { Switch } from 'react-router-dom'

import DefaultRoute from './DefaultRoute'
import GuestRoute from './GuestRoute'
import UserRoute from './UserRoute'

import LoginPage from 'pages/LoginPage/LoginPage.jsx'
import RegisterPage from 'pages/RegisterPage/RegisterPage.jsx'
import DashboardPage from 'pages/DashboardPage/DashboardPage.jsx'

const Routes = (props: any) => (
    <Switch>
        <DefaultRoute path="/" exact />
        <GuestRoute path="/login" page={LoginPage} />
        <GuestRoute path="/register" page={RegisterPage} />
        <UserRoute path="/dashboard" page={DashboardPage} />
    </Switch>
)

export default Routes