const initialState = {
    routine: null,
    modifiedRoutine: null,
    loading: true,
    error: null,
    workoutState: {
        isPaused: false,
        currentExerciseIndex: 0,
        currentPhase: null,
        currentSet: 1,
        isBreak: false,
        exercisesCompleted: 0,
        totalExerciseCount: 0,
        timeRemaining: 0,
        currentExerciseDuration: 0,
        remainingExerciseDuration: 0,
        workoutTimeRemaining: 0,
        allExercises: []
    }
};

export default function workoutSessionReducer(state = initialState, action) {
    switch (action.type) {
        case 'setRoutine':
            return {...state, routine: action.payload};

        case 'setModifiedRoutine':
            return {...state, modifiedRoutine: action.payload};

        case 'modifyRoutine':
            if (!state.modifiedRoutine) return state;
            
            const updatedRoutine = JSON.parse(JSON.stringify(state.modifiedRoutine));
            const { phase, index } = action.payload;

            if (updatedRoutine.exercises?.[phase]?.set) {
                updatedRoutine.exercises[phase].set.splice(index, 1);

                updatedRoutine.exercises[phase].duration = 
                    updatedRoutine.exercises[phase].set.reduce(
                        (total, ex) => total + ex.duration, 0
                    );
            }

            return {
                ...state,
                modifiedRoutine: updatedRoutine
            };

        case 'setLoading':
            return {...state, loading: action.payload};

        case 'setError':
            return {...state, error: action.payload};

        case 'setWorkoutState':
            return {
                ...state,
                workoutState: {
                    ...state.workoutState, 
                    ...action.payload
                }
            };

        case 'togglePause':
            return {
                ...state,
                workoutState: {
                    ...state.workoutState,
                    isPaused: !state.workoutState.isPaused
                }
            };

        case 'finishWorkout':
            return {
                ...state,
                workoutState: {
                    ...state.workoutState,
                    isPaused: true
                }
            };

        default:
            return state;
    }
}