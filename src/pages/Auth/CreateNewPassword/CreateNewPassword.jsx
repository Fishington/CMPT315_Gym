import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createConfirmPasswordValidation, createPasswordValidation} from '@/utils/authentication.js';

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
                            onSubmit={handleNewPassword}
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