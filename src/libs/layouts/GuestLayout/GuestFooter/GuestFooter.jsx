import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const GuestFooter = props => {
    return (
        <>
            <footer className="py-5">
                <Container>
                    <Row className="align-items-center justify-content-xl-between">
                        <Col xl="6">
                            <div className="copyright text-center text-xl-left text-muted">
                                © 2020{" "}
                                <a
                                    className="font-weight-bold ml-1"
                                    href="http://fightrons.com/"
                                    target="_blank"
                                >
                                    Fightrons
                  </a>
                            </div>
                        </Col>
                        <Col xl="6">
                            <Nav className="nav-footer justify-content-center justify-content-xl-end">
                                <NavItem>
                                    <NavLink
                                        href="http://veliyat.com/"
                                        target="_blank"
                                    >
                                        Ravi Veliyat
                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        target="_blank"
                                    >
                                        About Us
                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        target="_blank"
                                    >
                                        Blog
                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        target="_blank"
                                    >
                                        MIT License
                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default GuestFooter