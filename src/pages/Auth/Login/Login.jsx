import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {useAuth} from '@/context/AuthContext.jsx';

import {emailValidation, passwordValidation, validateUser} from '@/utils/authentication.js';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Login.scss';
import {fetchUser} from '@/utils/fetchData.js';

function Login() {
    const {login} = useAuth();
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    document.title = 'Login | HyperFit';

    const validation = () => {
        let newErrors = {...errors}
        
        emailValidation(email, newErrors)
        passwordValidation(password, newErrors)

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Validate Form Inputs
        if (!validation()) {
            console.log('Form not submitted: Invalid Fields');
            return
        }
        
        // Validate User in Database
        const newErrors = await validateUser(email, password, {...errors});
        setErrors(newErrors);
        
        const isValid = Object.keys(newErrors).length === 0;
        if (!isValid) {
            console.log('Form not submitted: Invalid User');
            return
        }
        
        // Store data into DTO
        const users = await fetchUser(email)
        const userDTO = users.find((user) => user.email === email)
        
        console.log('Logging in', userDTO.firstName);
        login(userDTO)
        
        navigate('/');
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
                            onSubmit={handleLogin}
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

                    {/* // Save until we are ready for oauth
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
                     */}
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