import {useEffect, useState} from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';

import {useAuth} from '@/context/AuthContext.jsx';
import {fetchUser} from '@/api/usersApi.js';
import {emailValidation, passwordValidation, validateUser} from '@/utils/authentication.js';

import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import LoginIcon from '@/components/Icons/LoginIcon';
import Button from '@/components/Button/index.js';

function Login() {
    const navigate = useNavigate()
    const [setQuote, setImage] = useOutletContext();

    const {login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setImage('/images/login-image.jpg')
        setQuote('"Every Day is a New Opportunity"')
        document.title = 'Login | HyperFit';
    }, []);

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
        <div className="grid gap-3">
            <div>
                <h1>Start Working Out Today!</h1>
                <p>Enter your credentials to access your account</p>
            </div>

            <Form onSubmit={handleLogin}>
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

                <Link className="authentication__link" to="/forgot-password">Forgot password?</Link>

                <Button color="blue" size="full-width" type="submit">
                    <LoginIcon/>
                    Log In
                </Button>
            </Form>

            <p>Don't have an account? <Link className="link" to="/register">Create an account</Link></p>
        </div>
    );
}

export default Login;