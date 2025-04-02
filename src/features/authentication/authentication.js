import {isValidEmail, isValidPassword} from '@/utils/validation.js';
import {fetchUser} from '@/api/usersApi.js';

export const firstNameValidation = (firstName, errorList) => {
    if (!firstName)
        errorList.firstName = {message: 'First name is required', error: true}
    else
        delete errorList.firstName;
}

export const lastNameValidation = (lastName, errorList) => {
    if (!lastName)
        errorList.lastName = {message: 'Last name is required', error: true}
    else
        delete errorList.lastName;
}

export const newEmailValidation = async (email, errorList) => {
    if (!email)
        errorList.email = {message: 'Email is required', error: true}
    else if (!isValidEmail(email))
        errorList.email = {message: 'Invalid email', error: true}
    else {
        // Check if the email exists in the database
        try {
            const existingUser = await checkEmailExists(email);
            if (existingUser) {
                errorList.email = {message: 'Email is already taken', error: true};
            } else {
                delete errorList.email;
            }
        } catch (error) {
            console.error('Error checking email:', error);
            errorList.email = {message: 'Error checking email availability', error: true};
        }
    }
}

export const createPasswordValidation = (password, errorList) => {
    if (!password)
        errorList.password = {message: 'Password is required', error: true}
    else if (!isValidPassword(password, errorList))
        console.log(errorList.password?.error)
    else
        delete errorList.password;
}

export const createConfirmPasswordValidation = (confirmPassword, passwordInitial, errorList) => {
    if (!confirmPassword)
        errorList.confirmPassword = {message: 'Confirm password is required', error: true}
    else if (confirmPassword !== passwordInitial)
        errorList.confirmPassword = {message: 'Passwords do not match', error: true}
    else
        delete errorList.confirmPassword;
}

export const emailValidation = (email, errorList) => {
    if (!email)
        errorList.email = {message: 'Email is required', error: true}
    else if (!isValidEmail(email))
        errorList.email = {message: 'Invalid email', error: true}
    else
        delete errorList.email;
}

export const passwordValidation = (password, errorList) => {
    if (!password) {
        errorList.password = {message: 'Password is required', error: true}
    } else
        delete errorList.password;
}

// Database Authentication
export const checkEmailExists = async (email) => {
    try {
        const users = await fetchUser();
        const user = users.find((user) => user.email === email)

        return user || null
    } catch (error) {
        console.error('Error:', error)
    }
};