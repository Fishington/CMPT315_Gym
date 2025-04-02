import {
    createConfirmPasswordValidation,
    createPasswordValidation,
    firstNameValidation,
    lastNameValidation,
    newEmailValidation,
    emailValidation, 
    passwordValidation
} from './authentication.js';
import {fetchUser} from "@/api/usersApi";

export const validateUserCreateDTO = async (userDTO) => {
    let errors = {};

    // Name Validation
    firstNameValidation(userDTO.firstName, errors);
    lastNameValidation(userDTO.lastName, errors);

    // Email Validation
    await newEmailValidation(userDTO.email, errors);

    // Password Validation
    createPasswordValidation(userDTO.password, errors);
    createConfirmPasswordValidation(userDTO.confirmPassword, userDTO.password, errors);

    return errors;
};

export const validateUserLogInDTO = async (userDTO) => {
    let errors = {};

    emailValidation(userDTO.email, errors);
    passwordValidation(userDTO.password, errors);

    if (Object.keys(errors).length === 0) {
        try {
            const users = await fetchUser();
            const user = users.find((user) => user.email === userDTO.email);

            if (!user || user.password !== userDTO.password) {
                errors.email = {error: true, message: ''};
                errors.password = {error: true, message: 'Invalid credentials'};
            }
        } catch (error) {
            errors.server = {error: true, message: 'Server connection error'};
        }
    }

    return errors;
};

export const validateEmailDTO = (emailDTO) => {
    let errors = {};

    // Email Validation
    emailValidation(emailDTO.email, errors);

    return errors;
};