import React from 'react'

import { Card, CardHeader, CardBody } from 'libs/style-library/cards'
import { Col } from 'libs/style-library/grid'
import { Button } from 'libs/style-library/forms'

import RegisterForm from 'components/forms/RegisterForm/RegisterForm.jsx'

const RegisterPage = props => {
    return <>
        <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-4">
                        <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                        <Button
                            className="btn-neutral btn-icon mr-4"
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
                        <small>Or sign up with credentials</small>
                    </div>

                    <RegisterForm />
                </CardBody>
            </Card>
        </Col>
    </>
}

export default RegisterPage