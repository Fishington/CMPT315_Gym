import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setWorkoutState, modifyRoutine} from '@/redux/actions/workoutSessionActions';

export default function useWorkoutTimer() {
    const dispatch = useDispatch();
    const timerRef = useRef(null);

    const {workoutState,} = useSelector(state => state.workoutSession);

    const {
        isPaused,
        timeRemaining,
        workoutTimeRemaining,
        remainingExerciseDuration,
        currentExerciseIndex,
        currentSet,
        isBreak,
        currentExerciseDuration,
        allExercises
    } = workoutState;

    useEffect(() => {
        if (isPaused || allExercises.length === 0) return;

        timerRef.current = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(timerRef.current);
                return;
            }

            const currentExercise = allExercises[currentExerciseIndex];
            let updatedIndex = currentExerciseIndex;
            let updatedSet = currentSet;
            let updatedIsBreak = isBreak;
            let updatedExercisesCompleted = workoutState.exercisesCompleted;
            let updatedPhase = workoutState.currentPhase;
            let updatedRemaining = remainingExerciseDuration;

            // Countdown
            updatedRemaining -= 1;

            if (updatedRemaining <= 0) {
                if (isBreak) {
                    if (currentSet < currentExercise.sets) {
                        updatedSet += 1;
                        updatedIsBreak = false;
                        updatedRemaining = currentExercise.duration / currentExercise.sets;
                    } else {
                        updatedIndex += 1;
                        updatedSet = 1;
                        updatedIsBreak = false;
                        updatedExercisesCompleted += 1;

                        dispatch(modifyRoutine({
                            phase: currentExercise.phase,
                            workoutId: currentExercise.workoutId,
                            duration: currentExercise.duration,
                            sets: currentExercise.sets
                        }));


                        if (updatedIndex < allExercises.length) {
                            const next = allExercises[updatedIndex];
                            updatedPhase = next.phase;
                            updatedRemaining = next.duration / next.sets;
                        }
                    }
                } else {
                    updatedIsBreak = true;
                    updatedRemaining = currentExercise.breakDuration;
                }
            }

            dispatch(setWorkoutState({
                timeRemaining: timeRemaining - 1,
                workoutTimeRemaining: workoutTimeRemaining - 1,
                remainingExerciseDuration: updatedRemaining,
                currentSet: updatedSet,
                isBreak: updatedIsBreak,
                currentExerciseIndex: updatedIndex,
                currentPhase: updatedPhase,
                currentExerciseDuration: !updatedIsBreak && updatedIndex < allExercises.length
                    ? allExercises[updatedIndex].duration / allExercises[updatedIndex].sets
                    : currentExerciseDuration,
                exercisesCompleted: updatedExercisesCompleted
            }));

        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [isPaused, timeRemaining, allExercises, currentExerciseIndex]);
}