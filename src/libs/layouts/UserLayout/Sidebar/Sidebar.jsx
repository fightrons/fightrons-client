import React, { useState } from 'react'
import { NavLink as NavLinkRRD, Link } from 'react-router-dom'

import { Row, Col } from 'libs/style-library/grid'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'libs/style-library/nav'
import { Container } from 'libs/style-library/grid'
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'libs/style-library/dropdown'
import { Media } from 'libs/style-library/media'
import { Form, IconFormControl } from 'libs/style-library/forms'
import { Collapse } from 'libs/style-library/collapse'

import { search } from 'libs/style-library/icons'

const Sidebar = props => {

    const logo = { //This is Temporary, we would have to send all data from components
        innerLink: "/dashboard",
        imgSrc: require("assets/img/brand/logo.png"),
        imgAlt: "..."
    }

    const routes = [ //Temporary, we would like to get the routes from outside
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: "ni ni-tv-2 text-primary",
            // component: Index,
            // layout: "/admin"
        },
        {
            path: "/login",
            name: "Login",
            icon: "ni ni-planet text-blue",
            // component: Icons,
            // layout: "/admin"
        },
        {
            path: "/register",
            name: "Register",
            icon: "ni ni-pin-3 text-orange",
            // component: Maps,
            // layout: "/admin"
        }
    ]

    let navbarBrandProps;
    if (logo && logo.innerLink) {
        navbarBrandProps = {
            to: logo.innerLink,
            tag: Link
        };
    } else if (logo && logo.outterLink) {
        navbarBrandProps = {
            href: logo.outterLink,
            target: "_blank"
        };
    }

    const [collapseOpen, setCollapseOpen] = useState(true)
    const toggleCollapse = () => {
        setCollapseOpen({
            collapseOpen: !collapseOpen
        });
    };
    // closes the collapse
    const closeCollapse = () => {
        setCollapseOpen({
            collapseOpen: !collapseOpen
        });
    };

    const createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={closeCollapse}
                        activeClassName="active"
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </NavLink>
                </NavItem>
            );
        });
    };

    return (
        <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="md"
            id="sidenav-main"
        >
            <Container fluid>
                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Brand */}
                {logo ? (
                    <NavbarBrand className="pt-0" {...navbarBrandProps}>
                        <img
                            alt={logo.imgAlt}
                            className="navbar-brand-img"
                            src={logo.imgSrc}
                        />
                    </NavbarBrand>
                ) : null}
                {/* User */}
                <Nav className="align-items-center d-md-none">
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav className="nav-link-icon">
                            <i className="ni ni-bell-55" />
                        </DropdownToggle>
                        <DropdownMenu
                            aria-labelledby="navbar-default_dropdown_1"
                            className="dropdown-menu-arrow"
                            right
                        >
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                        alt="..."
                                        src={require("assets/img/theme/team-1-800x800.jpg")}
                                    />
                                </span>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem className="noti-title" header tag="div">
                                <h6 className="text-overflow m-0">Welcome!</h6>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-single-02" />
                                <span>My profile</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-settings-gear-65" />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-calendar-grid-58" />
                                <span>Activity</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-support-16" />
                                <span>Support</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/* Collapse */}
                <Collapse navbar isOpen={collapseOpen}>
                    {/* Collapse header */}
                    <div className="navbar-collapse-header d-md-none">
                        <Row>
                            {logo ? (
                                <Col className="collapse-brand" xs="6">
                                    {logo.innerLink ? (
                                        <Link to={logo.innerLink}>
                                            <img alt={logo.imgAlt} src={logo.imgSrc} />
                                        </Link>
                                    ) : (
                                            <a href={logo.outterLink}>
                                                <img alt={logo.imgAlt} src={logo.imgSrc} />
                                            </a>
                                        )}
                                </Col>
                            ) : null}
                            <Col className="collapse-close" xs="6">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={toggleCollapse}
                                >
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    {/* Form */}
                    <Form className="mt-4 mb-3 d-md-none">
                        <IconFormControl type="text" name="search" label="Search" icon={search} />
                    </Form>
                    {/* Navigation */}
                    <Nav navbar>{createLinks(routes)}</Nav>
                    {/* Divider */}
                    <hr className="my-3" />
                    {/* Heading */}
                    <h6 className="navbar-heading text-muted">Documentation</h6>
                    {/* Navigation */}
                    <Nav className="mb-md-3" navbar>
                        <NavItem>
                            <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                                <i className="ni ni-spaceship" />
                                Getting started
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                                <i className="ni ni-palette" />
                                Foundation
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                                <i className="ni ni-ui-04" />
                                Components
                </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="mb-md-3" navbar>
                        <NavItem className="active-pro active">
                            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
                                <i className="ni ni-spaceship" />
                                Upgrade to PRO
                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Sidebar