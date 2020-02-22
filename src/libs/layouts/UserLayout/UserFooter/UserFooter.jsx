import React from "react";

import { Row, Col } from "libs/style-library/grid";
import { Nav, NavItem, NavLink } from 'libs/style-library/nav'

const Footer = props => {
    return (
        <footer className="footer">
            <Row className="align-items-center justify-content-xl-between">
                <Col xl="6">
                    <div className="copyright text-center text-xl-left text-muted">
                        © 2020{" "}
                        <a
                            className="font-weight-bold ml-1"
                            href="http://www.veliyat.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Ravi Veliyat
                        </a>
                    </div>
                </Col>

                <Col xl="6">
                    <Nav className="nav-footer justify-content-center justify-content-xl-end">
                        <NavItem>
                            <NavLink
                                href="http://www.veliyat.com"
                                target="_blank"
                            >
                                Ravi Veliyat
                           </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="http://www.veliyat.com"
                                target="_blank"
                            >
                                About Us
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="http://www.veliyat.com"
                                target="_blank"
                            >
                                Blog
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                MIT License
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
