import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PageHeader from '@/components/Layout/PageHeader/index.js';

import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';

import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import SessionTimer from '@/features/workout/session/SessionTimer.jsx';
import ExerciseTimer from '@/features/workout/session/ExerciseTimer.jsx';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails.jsx';

import {fetchRoutineById} from "@/api/routinesApi.js";


function WorkoutSession() {
    const {id} = useParams();
    const [routine, setRoutine] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRoutine = async () => {
            try {
                const data = await fetchRoutineById(id);
                if (data) {
                    setRoutine(data);
                } else {
                    console.error(`Routine with ID ${id} not found.`);
                }
            } catch (error) {
                console.error("Error fetching routine:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) getRoutine();
    }, [id]);

    if (loading) {
        return <p>Loading routine details...</p>;
    }

    if (!routine) {
        return <p>Error: Routine not found.</p>;
    }

    return (
        <>
            <PageHeader pageTitle="Dumbbell Only Workout for Beginners" showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <img
                        style={{maxHeight: '40rem', objectFit: 'cover'}}
                        src={routine.image}
                        alt=""
                    />

                    <Section>
                        <SessionTimer routineId={id}/>
                    </Section>

                    <Section title={'Workout Details'}>
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
                        <ExerciseOrder routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default WorkoutSession;