import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Card from '@/components/Card/index.js';
import Button from '@/components/Button/index.js';
import {finishWorkout, togglePause} from '@/redux/actions/workoutSessionActions';

export default function SessionTimer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const workoutState = useSelector(state => state.workoutSession.workoutState);
    const isPaused = workoutState.isPaused;
    const currentExercise = workoutState.allExercises[workoutState.currentExerciseIndex];

    const isComplete = !currentExercise || workoutState.timeRemaining <= 0;

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    if (isComplete) {
        return (
            <Card>
                <div className="flex-space-between">
                    <h2>Workout Complete!</h2>
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

    return (
        <Card>
            <div className="flex-space-between">
                <div>
                    <h2>{workoutState.isBreak ? 'Rest period' : currentExercise.name}</h2>
                    <h3>Set {workoutState.currentSet}/{currentExercise.sets}</h3>
                </div>

                <h2>{formatTime(workoutState.remainingExerciseDuration)} remaining</h2>
            </div>

            <div className="flex-space-between gap-2">
                <Button color="white" size="full-width" onClick={() => dispatch(togglePause())}>
                    {isPaused ? 'Resume' : 'Pause'}
                </Button>
                <Button
                    color="blue"
                    size="full-width"
                    onClick={() => {
                        dispatch(finishWorkout());
                        navigate(`/workout/summary/${id}`);
                    }}
                >
                    Finish Workout Routine
                </Button>
            </div>
        </Card>
    );
}