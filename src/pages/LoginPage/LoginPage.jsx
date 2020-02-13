import React from 'react'

import { Card, CardHeader, CardBody } from 'libs/style-library/cards'
import { Row, Col } from 'libs/style-library/grid'
import { Button } from 'libs/style-library/forms'

import LoginForm from 'components/LoginForm/LoginForm.jsx'

const LoginPage = props => {
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-muted text-center mt-2 mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div className="btn-wrapper text-center">
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={require("assets/img/icons/common/github.svg")}
                                    />
                                </span>
                                <span className="btn-inner--text">Github</span>
                            </Button>
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={require("assets/img/icons/common/google.svg")}
                                    />
                                </span>
                                <span className="btn-inner--text">Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        {/* The Login Form */}
                        <LoginForm />
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                        <a
                            className="text-light"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <small>Forgot password?</small>
                        </a>
                    </Col>
                    <Col className="text-right" xs="6">
                        <a
                            className="text-light"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <small>Create new account</small>
                        </a>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default LoginPage