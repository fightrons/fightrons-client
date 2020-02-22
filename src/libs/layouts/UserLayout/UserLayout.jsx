import React from 'react'

import { Container } from 'libs/style-library/grid'

import Sidebar from './Sidebar/Sidebar.jsx'
import UserFooter from './UserFooter/UserFooter.jsx'
import UserNavbar from './UserNavbar/UserNavbar.jsx'
import UserHeader from './UserHeader/UserHeader.jsx'

const UserLayout = props => {
    const routes = []
    return (
        <>
            <Sidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/admin/index",
                    imgSrc: require("assets/img/brand/argon-react.png"),
                    imgAlt: "..."
                }}
            />
            <div className="main-content">
                <UserNavbar
                    {...props}
                    brandText={'Placehold'}
                />

                <UserHeader />

                {/* Coming from the parent (Dynamic) */}
                {props.children}

                <Container fluid>
                    <UserFooter />
                </Container>
            </div>
        </>
    )
}

export default UserLayout