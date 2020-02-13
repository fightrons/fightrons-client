import React from 'react'

const PasswordStrength = ({ password }) => (
    <div className="text-muted font-italic">
        <small>
            password strength:{" "}
            <span className="text-success font-weight-700">strong</span>
        </small>
    </div>
)

export default PasswordStrength