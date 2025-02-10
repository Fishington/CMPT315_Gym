import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import DataList from '@/components/ExerciseList';
import Card from '@/components/Card';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import RadioInput from '@/components/Form/RadioInput';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import PageHeader from '@/components/Layout/PageHeader';
import ItemDetailContainer from '@/components/ItemDetailContainer';
import ItemDetail from '@/components/ItemDetail';

import './CreateWorkoutRoutine.scss'

function CreateWorkoutRoutines() {
    const navigate = useNavigate();

    const [routine, setRoutine] = useState({
        id          : null,
        name        : '',
        image       : '',
        author      : '',
        level       : '',
        targetMuscle: '',
        exerciseType: '',
        goal        : '',
        caloriesMin : 0,
        caloriesMax : 0,
        length      : '',
        equipment   : [],
        about       : '',
        exercises   : {
            warmups  : [],
            exercises: [],
            stretches: []
        }
    });

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [goal, setGoal] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [targetMuscles, setTargetMuscles] = useState('');
    const [secondaryMuscles, setSecondaryMuscles] = useState('');

    function handleCreateRoutine(e) {
        e.preventDefault();
        console.log(name, about, goal, difficulty, targetMuscles, secondaryMuscles,)
        navigate('/workout/routines')
    }

    return (
        <>
            <PageHeader pageTitle="Create Workout Routine" showBack={true}/>

            <TwoColumns>
                <div>
                    <Section>
                        <Card>
                            <h2>Workout Details:</h2>
                            <Form
                                buttonColor="blue"
                                submitLabel="Create Routine"
                                onSubmit={handleCreateRoutine}
                                variant='create-workout-routine__form'
                            >
                                <TextInput
                                    id="name"
                                    type="text"
                                    label="Workout Routine Name:"
                                    isRequired={true}
                                    value={name}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <TextInput
                                    id="about"
                                    type="text"
                                    label="About the Workout Routine:"
                                    isRequired={true}
                                    value={about}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setAbout(e.target.value)}
                                />

                                <TextInput
                                    id="goal"
                                    type="text"
                                    label="Workout Goal:"
                                    isRequired={true}
                                    value={goal}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setGoal(e.target.value)}
                                />

                                <RadioInput
                                    label={'Difficulty:'}
                                    onChange={setDifficulty}
                                    options={['Beginner', 'Intermediate', 'Advance']}
                                    error={false}
                                    errorText="test"
                                    isRequired={true}
                                />

                                <TextInput
                                    id="targetMuscles"
                                    type="text"
                                    label="Target Muscles:"
                                    isRequired={true}
                                    value={targetMuscles}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setTargetMuscles(e.target.value)}
                                />

                                <TextInput
                                    id="secondaryMuscles"
                                    type="text"
                                    label="Secondary Muscles:"
                                    isRequired={false}
                                    value={secondaryMuscles}
                                    error={false}
                                    errorText="test"
                                    onChange={(e) => setSecondaryMuscles(e.target.value)}
                                />
                                
                                <div className="create-workout-routine__more-info">
                                    <h2>Based on the Exercises:</h2>

                                    <div>
                                        <div className='card__section'>
                                            <h3>Equipment:</h3>

                                            {routine.equipment.length === 0 ? (
                                                <p>Start adding exercises to your workout routine</p>
                                            ) : (
                                                <ul className="create-workout-routine__equipment">
                                                    {routine.equipment.map((equipment, index) => (
                                                        <li key={index}>
                                                            {equipment}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        
                                        <ItemDetailContainer columns={3}>
                                            <ItemDetail
                                                icon={<MealPlanIcon/>}
                                                value="0 Exercises"
                                                subtitle="Level"
                                            />

                                            <ItemDetail
                                                icon={<MealPlanIcon/>}
                                                value="0 - 0 cal"
                                                subtitle="Calories Burned"
                                            />

                                            <ItemDetail
                                                icon={<MealPlanIcon/>}
                                                value="0:00 minutes"
                                                subtitle="Total Duration"
                                            />
                                        </ItemDetailContainer>
                                    </div>
                                </div>
                            </Form>
                        </Card>
                    </Section>
                </div>

                <div>
                    <Section title="exercises">
                        <DataList routine={routine} createList={true}/>
                    </Section>
                </div>

            </TwoColumns>
        </>
    );
}

export default CreateWorkoutRoutines;