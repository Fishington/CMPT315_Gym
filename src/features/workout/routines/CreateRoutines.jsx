import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import RadioInput from '@/components/Form/RadioInput';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import PageHeader from '@/components/Layout/PageHeader';
import ItemDetails from '@/components/ItemDetails';

import MultiColumnList from '@/components/MultiColumnList/index.js';
import Button from '@/components/Button/index.js';
import LoginIcon from '@/components/Icons/LoginIcon/index.js';
import ExerciseList from '@/features/workout/components/ExerciseList/index.js';

function CreateRoutines() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [goal, setGoal] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [targetMuscles, setTargetMuscles] = useState('');
    const [secondaryMuscles, setSecondaryMuscles] = useState('');

    const [routine, setRoutine] = useState({
        id          : 0,
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
            warmups  : {
                duration: '0:00',
                set     : [],

            },
            exercises: {
                duration: '0:00',
                set     : [],
            },
            stretches: {
                duration: '0:00',
                set     : [],
            },
        },
        tags        : []
    });

    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : '0 Exercises',
            subtitle: 'Total Exercises'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `0 - 0 cal`,
            subtitle: 'Calories Burned'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `0:00 Min.`,
            subtitle: 'Duration'
        },
    ]

    function handleCreateRoutine(e) {
        e.preventDefault();
        console.log(name, about, goal, difficulty, targetMuscles, secondaryMuscles,)
        navigate('/workout/routines')
    }

    return (
        <>
            <PageHeader pageTitle="Create Workout Routine" showBack={true}/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <h2>Workout Details:</h2>
                            <Form
                                buttonColor="blue"
                                submitLabel="Create Routine"
                                onSubmit={handleCreateRoutine}
                                variant="create-workout-routine__form"
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

                                <section className="grid gap-1">
                                    <h2>Based on the Exercises:</h2>

                                    <MultiColumnList
                                        dataName="Equipment"
                                        data={routine.equipment}
                                        emptyString="Start adding exercises to your workout routine"
                                    />

                                    <ItemDetails columns={3} details={itemDetails}/>
                                </section>

                                <Button color="blue" size="full-width" type="submit">
                                    <LoginIcon/>
                                    Create New Workout Routine
                                </Button>
                            </Form>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="exercises">
                        <ExerciseList routine={routine} create={true}/>
                    </Section>
                </TwoColumns.Column>

            </TwoColumns>
        </>
    );
}

export default CreateRoutines;