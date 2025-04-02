import {useEffect, useState} from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {login} from '@/redux/actions/authActions'
import {fetchUser} from '@/api/usersApi.js';
import {validateUserLogInDTO} from '@/features/authentication/mockValidationService.js';

import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import LoginIcon from '@/components/Icons/LoginIcon';
import Button from '@/components/Button/index.js';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [setQuote, setImage] = useOutletContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    useEffect(() => {
        setImage('/images/login-image.jpg')
        setQuote('"Every Day is a New Opportunity"')
        document.title = 'Login | HyperFit';
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        const userDTO = {
            email,
            password
        };

        try {
            // Validate Form Inputs using updated service
            const newErrors = await validateUserLogInDTO(userDTO);
            setErrors(newErrors);

            if (Object.keys(newErrors).length === 0) {
                // If no errors, get the user data and login
                const users = await fetchUser();
                const userDTOFromDB = users.find((user) => user.email === email);

                console.log('Logging in', userDTOFromDB.firstName);
                dispatch(login(userDTOFromDB));
                navigate('/');
            }
        } catch (error) {
            setServerError('Unable to connect to the server. Please try again later.');
            console.error('Server connection error:', error);
        }
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