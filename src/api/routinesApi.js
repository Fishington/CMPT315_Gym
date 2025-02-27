export const fetchRoutines = async () => {
    try {
        const response = await fetch(`http://localhost:3000/routines`);

        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching routines:', error);
        return null;
    }
};

export const fetchRoutineById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/routines/${id}`);

        if (!response.ok) {
            console.error(`Status: ${response.status} - Routine not found`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching routine by ID:', error);
        return null;
    }
};

export const createRoutine = async (newRoutine) => {
    try {
        const response = await fetch(`http://localhost:3000/routines`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRoutine),
        });

        if (!response.ok) {
            console.error(`Status: ${response.status} - Unable to create routine`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating routine:', error);
        return null;
    }
};

export const updateRoutine = async (id, updatedRoutine) => {
    try {
        const response = await fetch(`http://localhost:3000/routines/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedRoutine),
        });

        if (!response.ok) {
            console.error(`Status: ${response.status} - Unable to update routine`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating routine:', error);
        return null;
    }
};

export const deleteRoutine = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/routines/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            console.error(`Status: ${response.status} - Unable to delete routine`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting routine:', error);
        return null;
    }
};
