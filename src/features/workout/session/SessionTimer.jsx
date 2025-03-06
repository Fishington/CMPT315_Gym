import React from 'react';
import Card from '@/components/Card/index.js';
import Button from '@/components/Button/index.js';
import { useWorkoutSession } from '@/context/WorkoutSessionContext';

export default function SessionTimer() {
    const {
        id,
        workoutState,
        togglePause,
        getCurrentExerciseInfo
    } = useWorkoutSession();

    const exerciseInfo = getCurrentExerciseInfo();
    const { isPaused } = workoutState;

    if (!exerciseInfo) {
        return (
            <Card>
                <div className="flex-space-between">
                    <div>
                        <h2>Workout Complete!</h2>
                    </div>
                    <h2>0:00 remaining</h2>
                </div>

                <div className="flex-space-between gap-2">
                    <Button color="blue" size="full-width" to={`/workout/summary/${id}`}>
                        View Workout Summary
                    </Button>
                </div>
            </Card>
        );
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <Card>
            <div className="flex-space-between">
                <div>
                    {exerciseInfo.isBreak ? (
                        <h2>Rest period</h2>
                    ) : (
                        <h2>{exerciseInfo.exerciseName}</h2>
                    )}
                    <h3>Set {exerciseInfo.currentSet}/{exerciseInfo.totalSets}</h3>
                </div>

                <h2>{formatTime(exerciseInfo.timeRemaining)} remaining</h2>
            </div>

            <div className="flex-space-between gap-2">
                <Button color="white" size="full-width" onClick={togglePause}>
                    {isPaused ? 'Resume' : 'Pause'}
                </Button>

                <Button color="blue" size="full-width" to={`/workout/summary/${id}`}>
                    Finish Workout Routine
                </Button>
            </div>
        </Card>
    );
}