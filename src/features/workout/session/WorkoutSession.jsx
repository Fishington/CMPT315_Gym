import React, {useEffect} from 'react';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import SessionTimer from '@/features/workout/session/SessionTimer.jsx';
import ExerciseTimer from '@/features/workout/session/ExerciseTimer.jsx';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails.jsx';
import LoadingScreen from "@/components/LoadingScreen/index.js";
import {useDispatch, useSelector} from "react-redux";
import {initializeWorkoutSession} from '@/redux/actions/workoutSessionActions';
import {useParams} from "react-router-dom";
import useWorkoutTimer from "@/features/workout/session/useWorkoutTimer";
import defaultRoutineImage from '@/assets/images/default-routine-image.jpg'

function WorkoutSession() {
    const dispatch = useDispatch();
    const {id} = useParams();

    useWorkoutTimer();

    useEffect(() => {
        dispatch(initializeWorkoutSession(id));
    }, [dispatch, id]);

    const {
        routine,
        modifiedRoutine,
        loading,
        error,
        workoutState
    } = useSelector(state => state.workoutSession);

    if (loading) return <LoadingScreen/>;
    if (error) return <p>Error: {error}</p>;
    if (!routine || !modifiedRoutine) return <p>Error: Routine not found.</p>;
    if (workoutState.allExercises.length === 0) return <p>Error: No exercises found in this routine.</p>;

    return (
        <>
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <img
                        style={{maxHeight: '40rem', objectFit: 'cover'}}
                        src={routine.image ? routine.image : defaultRoutineImage}
                        alt=""
                    />

                    <Section>
                        <SessionTimer/>
                    </Section>

                    <Section title="Workout Details">
                        <Card>
                            <MainRoutineDetails routine={routine}/>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section>
                        <ExerciseTimer/>
                    </Section>

                    <Section title="Upcoming exercises">
                        <ExerciseOrder routine={modifiedRoutine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default WorkoutSession;