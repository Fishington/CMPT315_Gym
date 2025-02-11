import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    newEmailValidation,
    firstNameValidation,
    lastNameValidation,
    createPasswordValidation,
    createConfirmPasswordValidation
} from '@/utils/authentication.js';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Register.scss';

import {useAuth} from '@/context/AuthContext.jsx';
import axios from 'axios';
import {createUser} from '@/api/usersApi.js';


function Register() {
    const {login} = useAuth();

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    document.title = 'Register | HyperFit';

    const validation = async (errors) => {
        // Name Validation
        firstNameValidation(firstName, errors)
        lastNameValidation(lastName, errors)

        // Email Validation
        await newEmailValidation(email, errors)

        // Password Validation
        createPasswordValidation(password, errors)
        createConfirmPasswordValidation(confirmPassword, password, errors)

        return errors;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        let newErrors = {...errors}
        
        // Validate Form Inputs
        newErrors = await validation(newErrors);
        setErrors(newErrors);
        
        const isValid = Object.keys(newErrors).length === 0;
        if (!isValid) {
            console.log('Form not submitted: Invalid Fields');
            return
        }

        // Store DTO
        const userDTO = {
            firstName,
            lastName,
            email,
            password
        };
        console.log('Creating account for', userDTO.firstName);
        
        await createUser(userDTO)
        
        login(userDTO)
        
        navigate('/');
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
                            submitLabel="Create Account"
                            submitIcon={<LoginIcon/>}
                            onSubmit={handleRegister}
                        >
                            <div className="register__two-input-row">
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
                            </div>

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
                        </Form>

                        <p>
                            Already have an account? <Link className="register__link" to="/login">Login here</Link>
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