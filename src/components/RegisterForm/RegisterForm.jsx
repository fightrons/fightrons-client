import React from 'react'

import { Form, CenteredMainButton, GuestFormControl, PasswordStrength, TermsConditions } from 'libs/style-library/forms'
import { graduationHat, email, lockOpen } from 'libs/style-library/icons'

const RegisterForm = props => {
    return (
        <Form>
            <GuestFormControl type="text" name="name" label="Name" icon={graduationHat} />
            <GuestFormControl type="email" name="email" label="Email" icon={email} />
            <GuestFormControl type="password" name="password" label="Password" icon={lockOpen} />
            <GuestFormControl type="password" name="confirmPassword" label="Confirm Password" icon={lockOpen} />
            <PasswordStrength password="test123" />
            <TermsConditions name="termsAndConditions" url="http://veliyat.com/" />
            <CenteredMainButton label="Register" />
        </Form>
    )
}

export default RegisterForm