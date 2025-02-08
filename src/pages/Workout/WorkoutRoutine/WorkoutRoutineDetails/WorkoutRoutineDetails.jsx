import React from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import './WorkoutRoutineDetails.scss'
import DataList from '@/components/ExerciseList';
import {tempRoutineList} from '@/data/tempData.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';


function WorkoutRoutineDetails() {
    const {id} = useParams();
    const {user} = useOutletContext();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));
    document.title = `${routine.name} | HyperFit`;

    const allExercises = [
        ...routine.exercises.warmups,
        ...routine.exercises.exercises,
        ...routine.exercises.stretches
    ];

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

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.level}</h3>
                                        <p className="subtitle">Level</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{allExercises.length} Exercises</h3>
                                        <p className="subtitle">Total Exercises</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.caloriesMin} - {routine.caloriesMax} Cal</h3>
                                        <p className="subtitle">Calories Burned</p>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>
                                            {routine.length.split(':')[0]}:{routine.length.split(':')[1]}
                                        </h3>
                                        <p className="subtitle">Duration</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.targetMuscle}</h3>
                                        <p className="subtitle">Target Muscles</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.goal}</h3>
                                        <p className="subtitle">Workout Goal</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>About the Workout Routine:</h3>
                                <p>{routine.about}</p>
                            </div>

                            <div>
                                <h3>Equipment:</h3>
                                <ul className="workout-routine-details__benefits">
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