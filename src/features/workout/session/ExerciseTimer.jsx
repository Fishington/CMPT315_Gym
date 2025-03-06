import React from 'react';
import Card from '@/components/Card/index.js';
import { useWorkoutSession } from '@/context/WorkoutSessionContext';

export default function ExerciseTimer() {
    const { workoutState } = useWorkoutSession();
    const { exercisesCompleted, totalExerciseCount, workoutTimeRemaining } = workoutState;

    // Format time remaining
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <Card>
            <div className="flex-space-between">
                <h3>Exercises {exercisesCompleted}/{totalExerciseCount}</h3>
                <h3>{formatTime(workoutTimeRemaining)} Remaining</h3>
            </div>
        </Card>
    );
}