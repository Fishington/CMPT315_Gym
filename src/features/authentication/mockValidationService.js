import {
    createConfirmPasswordValidation,
    createPasswordValidation,
    firstNameValidation,
    lastNameValidation,
    newEmailValidation,
    emailValidation, 
    passwordValidation
} from './authentication.js';

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

    // Email Validation
    emailValidation(userDTO.email, errors);

    // Password Validation
    passwordValidation(userDTO.password, errors);

    return errors;
};

export const validateEmailDTO = async (emailDTO) => {
    let errors = {};

    // Email Validation
    emailValidation(emailDTO.email, errors);

    return errors;
};

