import {
    createConfirmPasswordValidation,
    createPasswordValidation,
    firstNameValidation,
    lastNameValidation,
    newEmailValidation,
    emailValidation, 
    passwordValidation
} from './authentication.js';

exports.validateUserCreateDTO = async (req, res) => {
    const userDTO = req.body;
    let errors = {};

    // Name Validation
    firstNameValidation(userDTO.firstName, errors);
    lastNameValidation(userDTO.lastName, errors);

    // Email Validation
    await newEmailValidation(userDTO.email, errors);

    // Password Validation
    createPasswordValidation(userDTO.password, errors);
    createConfirmPasswordValidation(userDTO.confirmPassword, userDTO.password, errors);

    res.json(errors);
};

exports.validateUserLogInDTO = async (req, res) => {
    const userDTO = req.body;
    let errors = {};

    // Email Validation
    emailValidation(userDTO.email, errors);

    // Password Validation
    passwordValidation(userDTO.password, errors);

    res.json(errors);
};

exports.validateEmailDTO = async (req, res) => {
    const emailDTO = req.body;
    let errors = {};

    // Email Validation
    emailValidation(emailDTO.email, errors);

    res.json(errors);
};

