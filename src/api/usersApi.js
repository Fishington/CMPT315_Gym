export const fetchUser = async () => {
    try {
        const response = await fetch(`http://localhost:3000/users`);

        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export const createUser = async (newUser) => {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            console.error(`Status: ${response.status} - Unable to create user`);
            return null;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
};