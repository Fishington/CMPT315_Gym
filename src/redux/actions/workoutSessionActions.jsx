import {fetchRoutineById} from '@/api/routinesApi';
import {fetchExerciseById} from '@/api/exerciseApi';

const getAllExercises = (routine) => {
    const exercises = [];
    const phases = ['warmups', 'exercises', 'stretches'];
    
    phases.forEach((phase) => {
        // Add null checks to prevent undefined errors
        const phaseExercises = routine.exercises?.[phase]?.set || [];
        phaseExercises.forEach(ex => exercises.push({...ex, phase}));
    });
    
    return exercises;
};

const determineStartingPhase = (routine) => {
    const phases = ['warmups', 'exercises', 'stretches'];
    
    for (let phase of phases) {
        if (routine.exercises?.[phase]?.set?.length) return phase;
    }
    
    return null;
};

export const initializeWorkoutSession = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await fetchRoutineById(id);
        if (!data) throw new Error(`Routine with ID ${id} not found.`);

        dispatch(setRoutine(data));
        
        // Use a serializable approach for modified routine
        dispatch(setModifiedRoutine(JSON.parse(JSON.stringify(data))));

        const allExercises = getAllExercises(data);
        if (allExercises.length === 0) throw new Error("No exercises found in the routine.");

        const exercisesWithNames = await Promise.all(
            allExercises.map(ex =>
                fetchExerciseById(ex.workoutId)
                    .then(res => ({...ex, name: res.name}))
                    .catch(() => ({...ex, name: `Exercise ${ex.workoutId}`}))
            )
        );

        const first = exercisesWithNames[0];
        const phase = determineStartingPhase(data);
        const firstDuration = first.duration / first.sets;

        dispatch(setWorkoutState({
            allExercises: exercisesWithNames,
            totalExerciseCount: exercisesWithNames.length,
            timeRemaining: data.duration,
            workoutTimeRemaining: data.duration,
            currentPhase: phase,
            currentExerciseDuration: firstDuration,
            remainingExerciseDuration: firstDuration,
            isPaused: false,
            currentExerciseIndex: 0,
            currentSet: 1,
            isBreak: false,
            exercisesCompleted: 0
        }));
    } catch (err) {
        dispatch(setError(err.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const modifyRoutine = (modifications) => ({
    type: 'modifyRoutine',
    payload: modifications
});

export const setRoutine = (routine) => ({
    type: 'setRoutine',
    payload: routine
});

export const setModifiedRoutine = (routine) => ({
    type: 'setModifiedRoutine',
    payload: routine
});

export const setLoading = (loading) => ({
    type: 'setLoading',
    payload: loading
});

export const setError = (error) => ({
    type: 'setError',
    payload: error
});

export const setWorkoutState = (state) => ({
    type: 'setWorkoutState',
    payload: state
});

export const togglePause = () => ({
    type: 'togglePause'
});

export const finishWorkout = () => ({
    type: 'finishWorkout'
});