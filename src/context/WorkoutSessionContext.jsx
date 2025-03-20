import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchRoutineById} from "@/api/routinesApi.js";
import {fetchExerciseById} from "@/api/exerciseApi.js";

const WorkoutSessionContext = createContext(null);

// Helper to get all exercises in a flat array for internal tracking
const getAllExercises = (routine) => {
    const exercises = [];

    if (routine.exercises.warmups && routine.exercises.warmups.set?.length > 0) {
        routine.exercises.warmups.set.forEach(ex => {
            exercises.push({...ex, phase: 'warmups'});
        });
    }

    if (routine.exercises.exercises && routine.exercises.exercises.set?.length > 0) {
        routine.exercises.exercises.set.forEach(ex => {
            exercises.push({...ex, phase: 'exercises'});
        });
    }

    if (routine.exercises.stretches && routine.exercises.stretches.set?.length > 0) {
        routine.exercises.stretches.set.forEach(ex => {
            exercises.push({...ex, phase: 'stretches'});
        });
    }

    return exercises;
};

// Determine the starting phase based on available exercises
const determineStartingPhase = (routine) => {
    if (routine.exercises.warmups && routine.exercises.warmups.set?.length > 0) {
        return 'warmups';
    } else if (routine.exercises.exercises && routine.exercises.exercises.set?.length > 0) {
        return 'exercises';
    } else if (routine.exercises.stretches && routine.exercises.stretches.set?.length > 0) {
        return 'stretches';
    }
    return null; // No exercises found
};

export function WorkoutSessionProvider({ children }) {
    const { id } = useParams();
    const [routine, setRoutine] = useState(null);
    const [modifiedRoutine, setModifiedRoutine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [workoutState, setWorkoutState] = useState({
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
    });

    // Fetch routine data
    useEffect(() => {
        const getRoutine = async () => {
            if (!id) return;

            try {
                const data = await fetchRoutineById(id);
                if (data) {
                    setRoutine(data);
                    setModifiedRoutine(JSON.parse(JSON.stringify(data)));

                    // Initialize workout state
                    const allExercises = getAllExercises(data);

                    if (allExercises.length === 0) {
                        setError("No exercises found in the routine.");
                        setLoading(false);
                        return;
                    }

                    // Fetch all exercise details to get names
                    const exercisePromises = allExercises.map(ex =>
                        fetchExerciseById(ex.workoutId)
                            .then(exerciseData => {
                                return {...ex, name: exerciseData.name};
                            })
                            .catch(() => {
                                return {...ex, name: `Exercise ${ex.workoutId}`};
                            })
                    );

                    // Wait for all exercise details to be fetched
                    const exercisesWithNames = await Promise.all(exercisePromises);

                    const totalTime = data.duration;
                    const startingPhase = determineStartingPhase(data);

                    const firstExercise = exercisesWithNames[0];
                    const firstExerciseDuration = firstExercise.duration / firstExercise.sets;

                    setWorkoutState(prev => ({
                        ...prev,
                        allExercises: exercisesWithNames,  // Now includes names
                        totalExerciseCount: exercisesWithNames.length,
                        timeRemaining: totalTime,
                        workoutTimeRemaining: totalTime,
                        currentPhase: startingPhase,
                        currentExerciseDuration: firstExerciseDuration,
                        remainingExerciseDuration: firstExerciseDuration
                    }));
                } else {
                    setError(`Routine with ID ${id} not found.`);
                }
            } catch (error) {
                setError(`Error fetching routine: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        getRoutine();
    }, [id]);

    // Timer effect
    useEffect(() => {
        if (!routine || workoutState.isPaused || workoutState.allExercises.length === 0) return;

        const timer = setInterval(() => {
            setWorkoutState(prev => {
                // If no more time remaining, end workout
                if (prev.timeRemaining <= 0) {
                    clearInterval(timer);
                    return prev;
                }

                // Update time remaining
                let updatedRemainingExerciseDuration = prev.remainingExerciseDuration - 1;
                let updatedCurrentExerciseIndex = prev.currentExerciseIndex;
                let updatedCurrentSet = prev.currentSet;
                let updatedIsBreak = prev.isBreak;
                let updatedExercisesCompleted = prev.exercisesCompleted;
                let updatedCurrentPhase = prev.currentPhase;

                // Handle exercise/set/break transitions
                if (updatedRemainingExerciseDuration <= 0) {
                    const currentExercise = prev.allExercises[prev.currentExerciseIndex];

                    // If in a break
                    if (prev.isBreak) {
                        // Move to next set or exercise
                        if (prev.currentSet < currentExercise.sets) {
                            // Go to next set
                            updatedCurrentSet += 1;
                            updatedIsBreak = false;
                            updatedRemainingExerciseDuration = prev.currentExerciseDuration;
                        } else {
                            // Exercise completed, go to next exercise
                            updatedCurrentExerciseIndex += 1;
                            updatedExercisesCompleted += 1;
                            updatedCurrentSet = 1;
                            updatedIsBreak = false;

                            // Update modified routine to remove the completed exercise and update phase duration
                            setModifiedRoutine(prevRoutine => {
                                const updatedRoutine = JSON.parse(JSON.stringify(prevRoutine));
                                const phase = currentExercise.phase;

                                // Find and remove the completed exercise
                                const index = updatedRoutine.exercises[phase].set.findIndex(
                                    ex => ex.workoutId === currentExercise.workoutId &&
                                        ex.duration === currentExercise.duration &&
                                        ex.sets === currentExercise.sets
                                );

                                if (index !== -1) {
                                    // Create a new array without the completed exercise
                                    updatedRoutine.exercises[phase].set = [
                                        ...updatedRoutine.exercises[phase].set.slice(0, index),
                                        ...updatedRoutine.exercises[phase].set.slice(index + 1)
                                    ];

                                    // Update phase duration if needed
                                    // Calculate the new phase duration based on remaining exercises
                                    updatedRoutine.exercises[phase].duration = updatedRoutine.exercises[phase].set.reduce(
                                        (total, ex) => total + ex.duration, 0
                                    );

                                    // Return a completely new object to ensure React detects the change
                                    return JSON.parse(JSON.stringify(updatedRoutine));
                                }

                                return updatedRoutine;
                            });

                            // If there are more exercises
                            if (updatedCurrentExerciseIndex < prev.allExercises.length) {
                                const nextExercise = prev.allExercises[updatedCurrentExerciseIndex];
                                updatedCurrentPhase = nextExercise.phase;
                                updatedRemainingExerciseDuration = nextExercise.duration / nextExercise.sets;
                            }
                        }
                    } else {
                        // Move to break time
                        updatedIsBreak = true;
                        updatedRemainingExerciseDuration = currentExercise.breakDuration;
                    }
                }

                return {
                    ...prev,
                    timeRemaining: prev.timeRemaining - 1,
                    workoutTimeRemaining: prev.workoutTimeRemaining - 1,
                    currentExerciseIndex: updatedCurrentExerciseIndex,
                    currentSet: updatedCurrentSet,
                    isBreak: updatedIsBreak,
                    exercisesCompleted: updatedExercisesCompleted,
                    currentPhase: updatedCurrentPhase,
                    remainingExerciseDuration: updatedRemainingExerciseDuration,
                    currentExerciseDuration: !prev.isBreak && updatedCurrentExerciseIndex < prev.allExercises.length ?
                        prev.allExercises[updatedCurrentExerciseIndex].duration / prev.allExercises[updatedCurrentExerciseIndex].sets :
                        prev.currentExerciseDuration
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [routine, workoutState.isPaused, workoutState.allExercises]);

    const togglePause = useCallback(() => {
        setWorkoutState(prev => ({
            ...prev,
            isPaused: !prev.isPaused
        }));
    }, []);

    const finishWorkout = useCallback(() => {
        setWorkoutState(prev => ({
            ...prev,
            isPaused: true,
        }));
    }, []);

    // Get current exercise info
    const getCurrentExerciseInfo = useCallback(() => {
        if (!workoutState.allExercises.length || workoutState.currentExerciseIndex >= workoutState.allExercises.length) {
            return null;
        }

        const currentExercise = workoutState.allExercises[workoutState.currentExerciseIndex];
        return {
            workoutId    : currentExercise.workoutId,
            currentSet   : workoutState.currentSet,
            totalSets    : currentExercise.sets,
            isBreak      : workoutState.isBreak,
            timeRemaining: workoutState.remainingExerciseDuration,
            breakDuration: currentExercise.breakDuration,
            exerciseName : currentExercise.name
        };

    }, [workoutState]);

    // Export all the state and functions that components will need
    const contextValue = {
        routine,
        modifiedRoutine,
        loading,
        error,
        workoutState,
        togglePause,
        getCurrentExerciseInfo,
        finishWorkout,
        id
    };

    return (
        <WorkoutSessionContext.Provider value={contextValue}>
            {children}
        </WorkoutSessionContext.Provider>
    );
}

export function useWorkoutSession() {
    const context = useContext(WorkoutSessionContext);
    if (!context) {
        throw new Error("useWorkoutSession must be used within the WorkoutSessionProvider");
    }

    return context;
}