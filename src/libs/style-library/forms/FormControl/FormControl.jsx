import React from 'react'
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap'

const FormControl = props => {
    return (
        <FormGroup>
            <Label for={props.name}>{props.label}</Label>
            <Input type={!!props.type ? props.type : 'text'} name={props.name} invalid={!!props.error} />
            <FormFeedback>{props.error}</FormFeedback>
        </FormGroup>
    )
}

export default FormControl