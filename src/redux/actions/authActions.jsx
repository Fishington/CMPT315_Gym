export const login = (userData) => {
    const formattedUser = {
        ...userData,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
    };

    sessionStorage.setItem('user', JSON.stringify(formattedUser));
    return {
        type: "login",
        payload: formattedUser
    };
};

export const logout = () => {
    sessionStorage.removeItem('user');
    return {
        type: "logout"
    };
};