// Input Validation
export const isValidPassword = (password, newErrors) => {
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

export const isValidEmail = (email) => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fields Validation
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

// Database Validations
export const checkEmailExists = async (email) => {
    try {
        const response = await fetch(`http://localhost:8000/users?email=${email}`);

        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            return null;
        }

        const users = await response.json();
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const validateUser = async () => {
    let newErrors = {...errors};

    // Check if email exists
    const user = await checkEmailExists(email);

    if (!user || user.password !== password) {
        newErrors.email = {
            error: true
        }
        newErrors.password = {
            message: 'The email or password you entered is incorrect. Please try again.',
            error  : true
        }
    } else {
        delete newErrors.email
        delete newErrors.password
    }

    // Set errors and return true if no errors exists
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
}