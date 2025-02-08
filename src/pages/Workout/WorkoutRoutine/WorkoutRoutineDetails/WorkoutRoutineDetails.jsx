import React from 'react';
import {useOutletContext, useParams} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import DataList from '@/components/ExerciseList';
import PageHeader from '@/components/Layout/PageHeader';
import ItemDetailContainer from '@/components/ItemDetailContainer';
import ItemDetail from '@/components/ItemDetail';

import {tempRoutineList} from '@/data/tempData.js';

import './WorkoutRoutineDetails.scss'
import Button from '@/components/Button/index.js';

function WorkoutRoutineDetails() {
    const {id} = useParams();
    const {user} = useOutletContext();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));
    document.title = `${routine.name} | HyperFit`;

    const exerciseCount = [
        ...routine.exercises.warmups,
        ...routine.exercises.exercises,
        ...routine.exercises.stretches
    ].length;

    return (
        <>
            <PageHeader
                user={user}
                pageTitle={routine.name}
                showBack={true}
            />

            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <img src={routine.image} alt=""/>

                            <div className="workout-routine-details__routine-details">
                                <ItemDetailContainer columns={3}>
                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={routine.level}
                                        subtitle="Level"
                                    />

                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={`${exerciseCount} Exercises`}
                                        subtitle="Total Exercises"
                                    />

                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={`${routine.caloriesMin} - ${routine.caloriesMax} Cal`}
                                        subtitle="Calories Burned"
                                    />
                                    
                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={`${routine.length.split(':')[0]}:${routine.length.split(':')[1]}`}
                                        subtitle="Duration"
                                    />

                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={routine.targetMuscle}
                                        subtitle="Target Muscles"
                                    />

                                    <ItemDetail
                                        icon={<MealPlanIcon/>}
                                        value={routine.goal}
                                        subtitle="Workout Goal"
                                    />
                                </ItemDetailContainer>
                            </div>
                            
                            <Button color="blue" size="full-width" href={`/workout/session/${id}`}>
                                Start Workout Routine
                            </Button>

                            <div className="card__section">
                                <h3>About the Workout Routine:</h3>
                                <p>{routine.about}</p>
                            </div>

                            <div className="card__section">
                                <h3>Equipment:</h3>

                                <ul className="workout-routine-details__equipment">
                                    {routine.equipment.map((equipment, index) => (
                                        <li key={index}>
                                            {equipment}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </Section>
                </div>

                <div>
                    <Section title="exercises">
                        <DataList routine={routine}/>
                    </Section>
                </div>
            </TwoColumns>
        </>
    );
}

export default WorkoutRoutineDetails;