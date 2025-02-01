import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import LogoFullIcon from '../../components/Icons/LogoFullIcon';
import LogoIcon from '../../components/Icons/LogoIcon';
import Form from '../../components/Form';
import TextInput from '../../components/Form/TextInput';
import LoginIcon from '../../components/Icons/LoginIcon';

import './ForgetPassword.scss';

function ForgetPassword() {
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    document.title = 'Login | HyperFit';

    const sendEmail = () => {
        alert(`Email: ${email}`);

        const userDTO = {
            email,
        };

        console.log('Registering in with:', userDTO);
        navigate('/create-new-password'); // Temp
    };

    return (
        <main className="forgot-password">
            <section className="forgot-password__left">
                <div className="forgot-password__logo">
                    <LogoFullIcon/>
                </div>

                <div className="forgot-password__main-content">
                    <div className="forgot-password__form">
                        <div>
                            <h1 className="forgot-password__cta">Forgot Password?</h1>
                            <p>
                                Enter the email you used to create the account, and we will email you instruction to
                                reset your password.
                            </p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Send Email"
                            submitIcon={<LoginIcon/>}
                            onSubmit={() => sendEmail()}
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
                        </Form>

                        <p>
                            Remembered your password? <Link className="forgot-password__link" to="/">Login here</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="forgot-password__image-container">
                <h2 className="forgot-password__motivational-quote">"Let’s get you back on track!"</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}

export default ForgetPassword;