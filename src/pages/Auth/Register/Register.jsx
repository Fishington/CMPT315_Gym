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
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    document.title = 'Login | HyperFit';

    const validation = () => {
        let newErrors = {...errors};

        // First Name Validation
        if (!firstName)
            newErrors.firstName = {message: 'First name is required', error: true}
        else
            delete newErrors.firstName;


        // Last Name Validation
        if (!lastName)
            newErrors.lastName = {message: 'Last name is required', error: true}
        else
            delete newErrors.lastName;

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
        } else if (!isValidPassword(password, newErrors)) {
            console.log(errors.password?.error)
        } else
            delete newErrors.password;

        
        // Confirm Password Validation
        if (!confirmPassword)
            newErrors.confirmPassword = {message: 'Confirm password is required', error: true}
        else if (password !== confirmPassword)
            newErrors.confirmPassword = {message: 'Passwords do not match', error: true}
        else
            delete newErrors.confirmPassword;

        // Set errors and return true if no errors exists
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const isValidPassword = (password, newErrors) => {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[@$!%*?&#]/.test(password);
        const hasMinLength = password.length >= 8;

        if (!hasLowercase) {
            console.log('❌ Password must contain at least one lowercase letter.');
            newErrors.password = {message: 'Password must contain at least one uppercase letter', error: true}
            return false
        }

        if (!hasUppercase) {
            console.log('❌ Password must contain at least one lowercase letter.');
            newErrors.password = {message: 'Password must contain at least one lowercase letter', error: true}
            return false
        }

        if (!hasDigit) {
            console.log('❌ Password must contain at least one digit.');
            newErrors.password = {message: 'Password must contain at least one digit', error: true}
            return false
        }
        
        if (!hasSpecialChar) {
            console.log('❌ Password must contain at least one special character (@$!%*?&#).');
            newErrors.password = {message: 'Password must contain at least one special character (@$!%*?&#)', error: true}
            return false
        }
        
        if (!hasMinLength) {
            console.log('❌ Password must be at least 8 characters long.');
            newErrors.password = {message: 'Password must be at least 8 characters long', error: true}
            return false
        }
        
        return true;
    }

    const isValidEmail = (email) => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validation();

        if (isValid) {
            register();
        } else {
            console.log('Form not submitted: Invalid Fields');
        }
    }

    const register = () => {
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);

        const userDTO = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
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
                            submitLabel="Create Account"
                            submitIcon={<LoginIcon/>}
                            onSubmit={handleSubmit}
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