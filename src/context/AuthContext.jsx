import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    // Find user in local storage first
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    function login(userData) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}