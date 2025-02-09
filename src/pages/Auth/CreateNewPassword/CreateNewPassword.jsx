import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';

import './CreateNewPassword.scss';

function CreateNewPassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({})


    document.title = 'Create New Password | HyperFit';

    const validation = () => {
        let newErrors = {...errors};

        // Password Validation
        if (!password) {
            newErrors.password = {message: 'Password is required', error: true}
        } else if (!isValidPassword(password, newErrors)) {
            console.log(errors.password?.error)
        } else
            delete newErrors.password;


        // Confirm Password Validation
        if (!confirmPassword)
            newErrors.confirmPassword = {message: 'Confirm password is required', error: true}
        else if (password !== confirmPassword)
            newErrors.confirmPassword = {message: 'Passwords do not match', error: true}
        else
            delete newErrors.confirmPassword;

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const isValidPassword = (password, newErrors) => {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[@$!%*?&#]/.test(password);
        const hasMinLength = password.length >= 8;

        if (!hasLowercase) {
            console.log('❌ Password must contain at least one lowercase letter.');
            newErrors.password = {message: 'Password must contain at least one uppercase letter', error: true}
            return false
        }

        if (!hasUppercase) {
            console.log('❌ Password must contain at least one lowercase letter.');
            newErrors.password = {message: 'Password must contain at least one lowercase letter', error: true}
            return false
        }

        if (!hasDigit) {
            console.log('❌ Password must contain at least one digit.');
            newErrors.password = {message: 'Password must contain at least one digit', error: true}
            return false
        }

        if (!hasSpecialChar) {
            console.log('❌ Password must contain at least one special character (@$!%*?&#).');
            newErrors.password = {
                message: 'Password must contain at least one special character (@$!%*?&#)',
                error  : true
            }
            return false
        }

        if (!hasMinLength) {
            console.log('❌ Password must be at least 8 characters long.');
            newErrors.password = {message: 'Password must be at least 8 characters long', error: true}
            return false
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validation();

        if (isValid) {
            sendEmail();
        } else {
            console.log('Form not submitted: Invalid Fields');
        }
    }
    
    const sendEmail = () => {
        const userDTO = {
            password,
            confirmPassword
        };

        console.log('New password for user is:', userDTO.password);
        navigate('/home');
    };

    return (
        <main className="create-new-password">
            <section className="create-new-password__left">
                <div className="create-new-password__logo">
                    <LogoFullIcon/>
                </div>

                <div className="create-new-password__main-content">
                    <div className="create-new-password__form">
                        <div>
                            <h1 className="create-new-password__cta">Create new Password</h1>
                            <p>
                                Your new password will be used to log in to your account.
                            </p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Reset Password"
                            submitIcon={<LoginIcon/>}
                            onSubmit={handleSubmit}
                        >
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
                        </Form>
                    </div>
                </div>
            </section>

            <section className="create-new-password__image-container">
                <h2 className="create-new-password__motivational-quote">"Let’s get you back on track!"</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}

export default CreateNewPassword;