import React from 'react';
import {useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import './WorkoutSession.scss'

import {tempRoutineList} from '@/data/tempData.js';
import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';

import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import ExerciseList from '@/components/ExerciseList';
import ItemDetails from '@/components/ItemDetails';
import ItemDetailsTag from '@/components/ItemDetails/ItemDetailsTag';

import {tempExercisesList} from '@/data/tempData.js';



function WorkoutSession() {
    const {id} = useParams();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));
    const exercise = tempExercisesList.find((ex) => ex.id === Number(id))

    const exerciseCount = [
        ...routine.exercises.warmups,
        ...routine.exercises.exercises,
        ...routine.exercises.stretches
    ].length;

    return (
        <>
            <PageHeader pageTitle="Dumbbell Only Workout for Beginners" showBack={true}/> 

            <TwoColumns secondColumnWidth="max-content">
                
                <div>
                    
                    <video width="100%" height="100%" controls>
                                <source src={exercise.video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                   


                    <Section>
                        <Card>
                            
                            <h3>Incline Dumbbell Bench Press</h3>
                            
                            <div class="header-row">
                                <h3>Set 1/3</h3>
                                <h2>0:22 remaining</h2>
                            </div>
     

                            <div class="header-row">
                                <Button color="blue" size="full-width" href={`/workout/summary/${id}`}>
                                    Pause
                                </Button>

                                <Button color="blue" size="full-width" href={`/workout/session/${id}`}>
                                Finish Workout Routine
                                </Button>
                            </div>


                        </Card>
                    </Section>
                    
                    <Section title={"Workout Details"}>
                        <Card>
                            <ItemDetails columns={3}>
                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={routine.level}
                                    subtitle="Level"
                                />

                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={`${exerciseCount} Exercises`}
                                    subtitle="Total Exercises"
                                />

                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={`${routine.caloriesMin} - ${routine.caloriesMax} Cal`}
                                    subtitle="Calories Burned"
                                />
                                
                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={`${routine.length.split(':')[0]}:${routine.length.split(':')[1]}`}
                                    subtitle="Duration"
                                />

                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={routine.targetMuscle}
                                    subtitle="Target Muscles"
                                />

                                <ItemDetailsTag
                                    icon={<MealPlanIcon/>}
                                    value={routine.goal}
                                    subtitle="Workout Goal"
                                />
                            </ItemDetails>

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
                    <Section>
                        <Card>
                            <div class="header-row">
                                <h3>Exercises 4/10</h3>
                                <h3>20:00 Remaining</h3>
                            </div>

                        </Card>
                    </Section>
               
                    <Section title="Upcoming exercises">
                        <ExerciseList routine={routine}/>
                    </Section>
                   
                </div>
                
                

            </TwoColumns>





        </>
    );
}

export default WorkoutSession;