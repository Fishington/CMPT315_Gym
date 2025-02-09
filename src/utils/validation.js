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
