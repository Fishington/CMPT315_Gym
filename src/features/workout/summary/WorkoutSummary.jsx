import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import ItemDetails from '@/components/ItemDetails/';

import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';

import {fetchRoutineById} from "@/api/routinesApi.js";

function WorkoutSummary() {
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

    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : routine.level,
            subtitle: 'Level'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : routine.targetMuscle,
            subtitle: 'Target Muscles'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : `${routine.caloriesMin} - ${routine.caloriesMax} Cal.`,
            subtitle: 'Calories Burned'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : `${routine.length} Mins.`,
            subtitle: 'Time per 10 reps'
        },
    ]

    return (
        <>
            <PageHeader pageTitle="Workout Summary"/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img src="/images/arm-curl.png" alt="Arm Curl"/>

                            <section className='gird gap-1'>
                                <h2>Dumbbell Only Workouts for Beginners</h2>
                                <ItemDetails columns={4} details={itemDetails}/>
                            </section>

                            <Button color="blue" size="full-width" to='/workout'>
                                Save Workout Statistics
                            </Button>
                        </Card>
                    </Section>

                    <Section>
                        <Card>
                            <h3>Performance</h3>
                            <p>Reps Completed: 100</p>
                            <p>Max Weight Lifted: 150 lbs</p>
                        </Card>
                    </Section>

                    <Section>
                        <Card>
                            <h3>Duration</h3>
                            <p>Time Spent: 45 minutes</p>
                            <p>Rest Time: 10 minutes</p>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="Finished ExercisesList">
                        <ExerciseOrder routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default WorkoutSummary;