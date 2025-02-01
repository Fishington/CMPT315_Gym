import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import LogoFullIcon from '../../components/Icons/LogoFullIcon';
import LogoIcon from '../../components/Icons/LogoIcon';
import Form from '../../components/Form';
import TextInput from '../../components/Form/TextInput';
import LoginIcon from '../../components/Icons/LoginIcon';

import './CreateNewPassword.scss';

function CreateNewPassword() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const navigate = useNavigate();

    document.title = 'Login | HyperFit';

    const sendEmail = () => {
        alert(`Password: ${password}\nConfirm Password: ${confirmPassword}`);

        const userDTO = {
            password,
            confirmPassword
        };

        console.log('Registering in with:', userDTO);
        navigate('/home');
    };

    return (
        <main className="create-new-password">
            <section className="create-new-password__left">
                <div className="create-new-password__logo">
                    <LogoFullIcon/>
                </div>

                <div className="create-new-password__main-content">
                    <div className="create-new-password__form">
                        <div>
                            <h1 className="create-new-password__cta">Create new Password</h1>
                            <p>
                                Your new password will be used to log in to your account.
                            </p>
                        </div>

                        <Form
                            buttonColor="blue"
                            submitLabel="Reset Password"
                            submitIcon={<LoginIcon/>}
                            onSubmit={() => sendEmail()}
                        >
                            <TextInput
                                id="password"
                                type="password"
                                label="Password:"
                                isRequired={true}
                                value={password}
                                error={false}
                                errorText="test"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <TextInput
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password:"
                                isRequired={true}
                                value={confirmPassword}
                                error={false}
                                errorText="test"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form>
                    </div>
                </div>
            </section>

            <section className="create-new-password__image-container">
                <h2 className="create-new-password__motivational-quote">"Let’s get you back on track!"</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}

export default CreateNewPassword;