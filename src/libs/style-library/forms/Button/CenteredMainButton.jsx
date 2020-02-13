import React from 'react'
import Button from './Button.jsx'

const CenteredMainButton = props => {
    return (
        <div className="text-center">
            <Button className="mt-4" color="primary">
                {props.label}
            </Button>
        </div>
    )
}

export default CenteredMainButton