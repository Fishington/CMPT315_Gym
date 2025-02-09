import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {emailValidation, passwordValidation, validateUser} from '@/utils/authentication.js';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import Button from '@/components/Button';
import AppleIcon from '@/components/Icons/AppleIcon';
import GoogleIcon from '@/components/Icons/GoogleIcon';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Login.scss';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    document.title = 'Login | HyperFit';

    const validation = async () => {
        let newErrors = {...errors};

        // Login Validation
        emailValidation(email, newErrors)
        passwordValidation(password, newErrors)

        // Validates for existing user
        newErrors = await validateUser(newErrors);

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = await validation();
        if (!isFormValid) {
            console.log('Form not submitted: Invalid Fields or User');
        } else {
            login();
        }
    }

    const login = () => {
        const userDTO = {email, password};

        console.log('Logging in with:', userDTO);
        navigate('/home');
    };

    return (
        <main className="login">
            <section className="login__left">
                <div className="login__logo">
                    <LogoFullIcon/>
                </div>

                <div className="login__main-content">
                    <div className="login__form">
                        <div>
                            <h1 className="login__cta">Start Working Out Today!</h1>
                            <p>Enter your credentials to access your account</p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Log In"
                            submitIcon={<LoginIcon/>}
                            onSubmit={handleSubmit}
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

                            <TextInput
                                id="password"
                                type="password"
                                label="Password"
                                isRequired={true}
                                value={password}
                                error={errors.password?.error}
                                errorText={errors.password?.message}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Link className="login__link" to="/forgot-password">Forgot password?</Link>
                        </Form>

                        <p>
                            Don't have an account? <Link className="login__link" to="/register">Create an account</Link>
                        </p>
                    </div>

                    <div className="login__divider">
                        <hr className="login__divider-line"/>
                        <p className="login__or-text">Or</p>
                        <hr className="login__divider-line"/>
                    </div>

                    <div className="login__oauth">
                        <Button color="google" size="full-width">
                            <GoogleIcon/>
                            Log in with Google
                        </Button>

                        <Button color="apple" size="full-width">
                            <AppleIcon/>
                            Log in with Apple
                        </Button>
                    </div>
                </div>
            </section>

            <section className="login__image-container">
                <h2 className="login__motivational-quote">"Every Day is a New Opportunity"</h2>

                <LogoIcon/>
            </section>
        </main>
    );
}

export default Login;