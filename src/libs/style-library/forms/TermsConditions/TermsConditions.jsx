import React from 'react'
import { Row, Col } from 'libs/style-library/grid'

const TermsConditions = props => (
    <Row className="my-4">
        <Col xs="12">
            <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                    className="custom-control-input"
                    id={props.name}
                    type="checkbox"
                    name={props.name}
                />
                <label
                    className="custom-control-label"
                    htmlFor={props.name}
                >
                    <span className="text-muted">
                        I agree with the{" "}
                        <a href={props.url}>Terms &amp; Conditions</a>
                    </span>
                </label>
            </div>
        </Col>
    </Row>
)

export default TermsConditions