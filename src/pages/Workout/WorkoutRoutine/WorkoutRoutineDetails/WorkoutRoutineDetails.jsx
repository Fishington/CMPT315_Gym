import {useParams} from 'react-router-dom';

import PageHeader from '@/components/Layout/PageHeader';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import ExerciseList from '@/components/ExerciseList';
import ItemDetails from '@/components/ItemDetails';
import ItemDetailsTag from '@/components/ItemDetails/ItemDetailsTag';

import {tempRoutineList} from '@/data/tempData.js';

import './WorkoutRoutineDetails.scss'
import Button from '@/components/Button/index.js';

function WorkoutRoutineDetails() {
    const {id} = useParams();
    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

    const exerciseCount = [
        ...routine.exercises.warmups,
        ...routine.exercises.exercises,
        ...routine.exercises.stretches
    ].length;
    
    return (
        <>
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <img src={routine.image} alt=""/>

                            <div className="workout-routine-details__routine-details">
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
                        <ExerciseList routine={routine}/>
                    </Section>
                </div>
            </TwoColumns>
        </>
    );
}

export default WorkoutRoutineDetails;