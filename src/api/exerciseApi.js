export const fetchExercises = async () => {
    try {
        const response = await fetch(`http://localhost:3000/exercises`);

        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching exercises:', error);
        return null;
    }
};

export const fetchExerciseById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/exercises/${id}`);

        if (!response.ok) {
            console.error(`Status: ${response.status} - Exercise not found`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching exercise by ID:', error);
        return null;
    }
};