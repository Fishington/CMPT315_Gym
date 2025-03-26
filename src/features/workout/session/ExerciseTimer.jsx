import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@/components/Card/index.js';

export default function ExerciseTimer() {
    const { exercisesCompleted, totalExerciseCount, workoutTimeRemaining } = useSelector(
        (state) => state.workoutSession.workoutState
    );

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