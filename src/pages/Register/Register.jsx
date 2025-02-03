import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Register.scss';

function Register() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const navigate = useNavigate();

    document.title = 'Login | HyperFit';

    const register = () => {
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);

        const userDTO = {
            email,
            password,
        };

        console.log('Registering in with:', userDTO);
        navigate('/home');
    };

    return (
        <main className="register">
            <section className="register__left">
                <div className="register__logo">
                    <LogoFullIcon/>
                </div>

                <div className="register__main-content">
                    <div className="register__form">
                        <div>
                            <h1 className="register__cta">Let's Get Started</h1>
                            <p>Enter your credentials to access your account</p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Continue"
                            submitIcon={<LoginIcon/>}
                            onSubmit={() => register()}
                        >
                            <div className="register__two-input-row">
                                <TextInput
                                    id="firstName"
                                    type="firstName"
                                    label="First Name"
                                    isRequired={true}
                                    value={firstName}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                                <TextInput
                                    id="lastName"
                                    type="lastName"
                                    label="Last Name"
                                    isRequired={true}
                                    value={lastName}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <TextInput
                                id="email"
                                type="email"
                                label="Email"
                                isRequired={true}
                                value={email}
                                error={false}
                                errorText="test"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextInput
                                id="password"
                                type="password"
                                label="Password"
                                isRequired={true}
                                value={password}
                                error={false}
                                errorText="test"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <TextInput
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                isRequired={true}
                                value={confirmPassword}
                                error={false}
                                errorText="test"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form>

                        <p>
                            Already have an account? <Link className="register__link" to="/">Login here</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="register__image-container">
                <h2 className="register__motivational-quote">"Start Your Fitness Journey Now"</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}

export default Register;