import React from 'react';
import {useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import ExerciseList from '@/components/ExerciseList/index.js';
import {tempRoutineList} from '@/data/tempData.js';
import ItemDetails from '@/components/ItemDetails/index.js';
import ItemDetailsTag from '@/components/ItemDetails/ItemDetailsTag/index.js';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';
import './WorkoutSummary.scss';


function WorkoutSummary() {
    const {id} = useParams();
    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

    return (
        <>
            <PageHeader pageTitle="Workout Summary"/>

            <TwoColumns>
                <div>
                    <Section>
                        <Card>
                            <img src="/images/arm-curl.png" alt="Arm Curl"/>

                            <div className="workout-summary__text">
                                <h2 className='workout-summary__title'>Dumbbell Only Workouts for Beginners</h2>

                                <ItemDetails>
                                    <ItemDetailsTag
                                        icon={<MealPlanIcon/>}
                                        value={routine.level}
                                        subtitle="Level"
                                    />

                                    <ItemDetailsTag
                                        icon={<MealPlanIcon/>}
                                        value={`10/10 Exercises`}
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
                                </ItemDetails>
                            </div>
                            
                            <Button color="blue" size="full-width" href={`/workout`}>
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
                </div>

                <div>
                    <Section title="Finished Exercises">
                        <ExerciseList routine={routine}/>
                    </Section>
                </div>
            </TwoColumns>
        </>
    );
}

export default WorkoutSummary;