import './Login.scss';
import {useState} from 'react';
import LogoFullIcon from '../../components/Icons/LogoFullIcon';
import LogoIcon from '../../components/Icons/LogoIcon';
import Form from '../../components/Form/index.js';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import AppleIcon from '../../components/Icons/AppleIcon';
import GoogleIcon from '../../components/Icons/GoogleIcon';
import LoginIcon from '../../components/Icons/LoginIcon';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if (!email || !password) {
            alert('Please enter email and password.');
            return;
        }

        alert(`Email: ${email}\nPassword: ${password}`);

        const userDTO = {
            email,
            password,
        };

        console.log('Logging in with:', userDTO);
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
                            onSubmit={() => login()}
                        >
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

                            <a className="login__link" href="#">Forgot password?</a>
                        </Form>

                        <p>
                            Don't have an account? <a className="login__link" href="#">Create an account</a>
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