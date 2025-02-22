import {useEffect, useState} from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
import {emailValidation} from '@/utils/authentication.js';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput/index.js';
import LoginIcon from '@/components/Icons/LoginIcon';
import Button from '@/components/Button/index.js';
import {validateEmailDTO} from '@/features/authentication/mockValidationService.js';

function ForgetPassword() {
    const navigate = useNavigate();
    const [setQuote, setImage] = useOutletContext();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setImage('/images/forgot-password.jpg')
        setQuote('"Let’s get you back on track!"')

        document.title = 'Forgot Password | HyperFit';
    }, []);


    const handleSendEmail = async (e) => {
        e.preventDefault();

        // Store data into DTO
        const emailDTO = {
            email,
        };

        // Validate Form Inputs using Mock Service
        const newErrors = await validateEmailDTO(emailDTO);
        setErrors(newErrors);

        const isValid = Object.keys(newErrors).length === 0;
        if (!isValid) {
            console.log('Form not submitted: Invalid Fields');
            return;
        }

        console.log(`Email "sent" to ${emailDTO.email}`);

        // Temporary
        navigate('/create-new-password');
    };

    return (
        <div className="grid gap-3">
            <div>
                <h1>Forgot Password?</h1>
                <p>
                    Enter the email you used to create the account, and we will email you instruction to
                    reset your password.
                </p>
            </div>

            <Form onSubmit={handleSendEmail}>
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

                <Button color="blue" size="full-width" type="submit">
                    <LoginIcon/>
                    Send Email
                </Button>
            </Form>

            <p>
                Remembered your password? <Link className="link" to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default ForgetPassword;