import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';

import './Register.scss';
import axios from 'axios';

function Register() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errors, setErrors] = useState({});

    const [data, setData] = useState([]);

    useEffect(() => {
        async function grabData() {
            const response = await axios.get("http://localhost:3000/users")
            console.log(response)
        }

        grabData();
    }, []);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })
            }
        );
        result = await result.json();
        console.log(result);
        navigate(
            {
                pathname: '/login',
                search: `?email=${email}&password=${password}`,
                state: {
                    email: email,
                    password: password
        }
            }
        )
    }

    const navigate = useNavigate();

    document.title = 'Login | HyperFit';



    const validation = () => {
        let newErrors = {};

        if (!firstName) {
            newErrors.firstName = "First name is required";
        }
        else if (!lastName) {
            newErrors.lastName = "Last name is required";
        }


        else if (!email) {
            newErrors.email = "Email is required";
        }

        else if (!isValidEmail(email)) {
            newErrors.email = "Email is invalid";
        }


        else if (!password) {
            newErrors.password = "Password is required";
        }

        else if (!isValidPassword(password)) {
            newErrors.password = "Password is invalid";
        }

        else if (!confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        }
        else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        console.log(errors);
        

        return Object.keys(newErrors).length === 0;
    }

    const isValidPassword = (password) => {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[@$!%*?&]/.test(password);
        const hasMinLength = password.length >= 8;
    
        if (!hasLowercase) {
            console.log("❌ Password must contain at least one lowercase letter.");
            return false
        }
        if (!hasUppercase) {
            console.log("❌ Password must contain at least one uppercase letter.");
            return false
        }
        if (!hasDigit) {
            console.log("❌ Password must contain at least one digit.");
            return false
        }
        if (!hasSpecialChar) {
            console.log("❌ Password must contain at least one special character (@$!%*?&).");
            return false
        }
        if (!hasMinLength) {
            console.log("❌ Password must be at least 8 characters long.");
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
        } 
        
        else {
            console.log("form not submitted");
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