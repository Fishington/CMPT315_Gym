export const saveWorkoutStats = async ({ userID, date, completedExercises }) => {
    try {
        const responses = await Promise.all(
            completedExercises.map(exercise => {
                const payload = {
                    userID,
                    date,
                    exerciseID: exercise.workoutId,
                    duration: `${exercise.duration}:00`, // optional: format to "4:00"
                    calories: exercise.calories || 0,
                    otherInfo: {
                        phase: exercise.phase,
                        name: exercise.name,
                        sets: exercise.sets,
                        reps: exercise.reps,
                        durationSec: exercise.duration
                    }
                };

                return fetch('http://localhost:3000/userData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw new Error(err.message); });
                    }
                    return res.json();
                });
            })
        );

        return responses;
    } catch (error) {
        console.error("Error saving workout stats:", error);
        throw error;
    }
};