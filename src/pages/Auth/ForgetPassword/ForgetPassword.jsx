import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {emailValidation} from '@/utils/authentication.js';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';

import './ForgetPassword.scss';

function ForgetPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({})

    document.title = 'Forgot Password | HyperFit';

    const validation = () => {
        let newErrors = {...errors};

        // Email Validation
        emailValidation(email, newErrors);

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSendEmail = (e) => {
        e.preventDefault();

        // Validate Form Inputs
        if (!validation()) {
            console.log('Form not submitted: Invalid Fields');
            return
        }

        // Store data into DTO
        const emailDTO = {
            email,
        };
        console.log(`Email "sent" to ${emailDTO.email}`)

        // Temporary
        navigate('/create-new-password');
    };

    return (
        <main className="forgot-password">
            <section className="forgot-password__left">
                <div className="forgot-password__logo">
                    <LogoFullIcon/>
                </div>

                <div className="forgot-password__main-content">
                    <div className="forgot-password__form">
                        <div>
                            <h1 className="forgot-password__cta">Forgot Password?</h1>
                            <p>
                                Enter the email you used to create the account, and we will email you instruction to
                                reset your password.
                            </p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Send Email"
                            submitIcon={<LoginIcon/>}
                            onSubmit={handleSendEmail}
                        >
                            <TextInput
                                id="email"
                                type="email"
                                label="Email"
                                isRequired={true}
                                value={email}
                                error={errors.email?.error}
                                errorText={errors.email?.message}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form>

                        <p>
                            Remembered your password? <Link className="forgot-password__link" to="/login">Login here</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="forgot-password__image-container">
                <h2 className="forgot-password__motivational-quote">"Let’s get you back on track!"</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}

export default ForgetPassword;