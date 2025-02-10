export const fetchUser = async () => {
    try {
        const response = await fetch(`http://localhost:8000/users`);

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