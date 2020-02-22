import React from 'react'

import { Form, CenteredMainButton, IconFormControl, PasswordStrength, TermsConditions } from 'libs/style-library/forms'
import { graduationHat, email, lockOpen } from 'libs/style-library/icons'

const RegisterForm = props => {
    return (
        <Form>
            <IconFormControl type="text" name="name" label="Name" icon={graduationHat} />
            <IconFormControl type="email" name="email" label="Email" icon={email} />
            <IconFormControl type="password" name="password" label="Password" icon={lockOpen} />
            <IconFormControl type="password" name="confirmPassword" label="Confirm Password" icon={lockOpen} />
            <PasswordStrength password="test123" />
            <TermsConditions name="termsAndConditions" url="http://veliyat.com/" />
            <CenteredMainButton label="Register" />
        </Form>
    )
}

export default RegisterForm