import {useEffect, useState} from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';
import {createConfirmPasswordValidation, createPasswordValidation} from '@/utils/authentication.js';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';

import Button from '@/components/Button/index.js';

function CreateNewPassword() {
    const navigate = useNavigate();
    const [setQuote, setImage] = useOutletContext();

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({})

    document.title = 'Create New Password | HyperFit';

    useEffect(() => {
        setImage('/images/forgot-password.jpg')
        setQuote('"Let’s get you back on track!"')
        document.title = 'Login | HyperFit';
    }, []);

    const validation = () => {
        let newErrors = {...errors};

        // Password Validation
        createPasswordValidation(password, newErrors)
        createConfirmPasswordValidation(password, newErrors)

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleNewPassword = (e) => {
        e.preventDefault();

        // Validate Form Inputs
        if (!validation()) {
            console.log('Form not submitted: Invalid Fields');
            return
        }

        // Store data into DTO
        const userDTO = {
            password,
            confirmPassword
        };

        console.log('New password has been set for user');
        navigate('/');
    };

    return (
        <div className="grid gap-3">
            <div>
                <h1>Create new Password</h1>
                <p>
                    Your new password will be used to log in to your account.
                </p>
            </div>

            <Form onSubmit={handleNewPassword}>
                <TextInput
                    id="password"
                    type="password"
                    label="Password:"
                    isRequired={true}
                    value={password}
                    error={errors.password?.error}
                    errorText={errors.password?.message}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextInput
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password:"
                    isRequired={true}
                    value={confirmPassword}
                    error={errors.confirmPassword?.error}
                    errorText={errors.confirmPassword?.message}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button color="blue" size="full-width" type="submit">
                    <LoginIcon/>
                    Reset Password
                </Button>
            </Form>
        </div>
    );
}

export default CreateNewPassword;