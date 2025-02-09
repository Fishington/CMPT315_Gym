import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import Button from '@/components/Button';
import AppleIcon from '@/components/Icons/AppleIcon';
import GoogleIcon from '@/components/Icons/GoogleIcon';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Login.scss';

const fakeUser = {
    email   : 'borjas@mymacewan.ca',
    password: 'Password123!'
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    document.title = 'Login | HyperFit';

    const validation = () => {
        let newErrors = {...errors};

        // Email Validation
        if (!email)
            newErrors.email = {message: 'Email is required', error: true}
        else if (!isValidEmail(email))
            newErrors.email = {message: 'Invalid email', error: true}
        else
            delete newErrors.email;

        // Password Validation
        if (!password) {
            newErrors.password = {message: 'Password is required', error: true}
        } else
            delete newErrors.password;

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const validateUser = async () => {
        let newErrors = {...errors};

        // Check user details
        const user = await checkEmailExists(email);

        if (!user || user.password !== password) {
            newErrors.email = {
                error: true
            }
            newErrors.password = {
                message: 'The email or password you entered is incorrect. Please try again.',
                error  : true
            }
        } else {
            delete newErrors.email
            delete newErrors.password
        }

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const checkEmailExists = async (email) => {
        const response = await fetch(`http://localhost:8000/users?email=${email}`);
        const users = await response.json();
        return users.length > 0 ? users[0] : null;
    };

    const isValidEmail = (email) => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = validation();
        if (!isFormValid) {
            console.log('Form not submitted: Invalid Fields');
            return;
        }

        const isValidUser = await validateUser();
        if (!isValidUser)
            console.log('Form not submitted: Invalid User');
        else 
            login();
    }

    const login = () => {
        const userDTO = {email, password};

        console.log('Logging in with:', userDTO);
        navigate('/home');  // Simulate successful login
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