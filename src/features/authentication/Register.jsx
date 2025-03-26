import {useDispatch} from "react-redux";
import {useEffect, useState} from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';

import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import LoginIcon from '@/components/Icons/LoginIcon';

import {createUser} from '@/api/usersApi.js';
import Button from '@/components/Button/index.js';
import {validateUserCreateDTO} from '@/features/authentication/mockValidationService.js';
import {login} from "@/redux/actions/authActions";


function Register() {
    const dispatch = useDispatch();
    const [setQuote, setImage] = useOutletContext();

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setImage('/images/register-image.jpg')
        setQuote('"Start Your Fitness Journey Now"')
        document.title = 'Register | HyperFit';
    }, []);


    const handleRegister = async (e) => {
        e.preventDefault();
        const userDTO = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };

        // Validate Form Inputs using Mock Service
        const newErrors = await validateUserCreateDTO(userDTO);
        setErrors(newErrors);

        const isValid = Object.keys(newErrors).length === 0;
        if (!isValid) {
            console.log('Form not submitted: Invalid Fields');
            return;
        }

        await createUser(userDTO);
        dispatch(login(userDTO));
        navigate('/');
    };
        

    return (

        <div className="grid gap-3">
            <div>
                <h1>Let's Get Started</h1>
                <p>Enter your credentials to access your account</p>
            </div>

            <Form onSubmit={handleRegister}>
                <TextInput
                    id="firstName"
                    type="firstName"
                    label="First Name:"
                    isRequired={true}
                    value={firstName}
                    error={errors.firstName?.error}
                    errorText={errors.firstName?.message}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextInput
                    id="lastName"
                    type="lastName"
                    label="Last Name:"
                    isRequired={true}
                    value={lastName}
                    error={errors.lastName?.error}
                    errorText={errors.lastName?.message}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <TextInput
                    id="email"
                    type="email"
                    label="Email:"
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

                <TextInput
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    isRequired={true}
                    value={confirmPassword}
                    error={errors.confirmPassword?.error}
                    errorText={errors.confirmPassword?.message}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button color="blue" size="full-width" type="submit">
                    <LoginIcon/>
                    Create an Account
                </Button>
            </Form>

            <p>
                Already have an account? <Link className="link" to="/login">Login here</Link>
            </p>
        </div>
               
    );
}

export default Register;