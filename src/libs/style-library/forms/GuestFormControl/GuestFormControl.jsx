import React from 'react'
import { Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup, FormFeedback } from 'reactstrap'

const GuestFormControl = props => {
    return (
        <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className={props.icon} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input placeholder={props.label} type={props.type} name={props.name} />
            </InputGroup>
            <FormFeedback>{props.error}</FormFeedback>
        </FormGroup>
    )
}

export default GuestFormControl