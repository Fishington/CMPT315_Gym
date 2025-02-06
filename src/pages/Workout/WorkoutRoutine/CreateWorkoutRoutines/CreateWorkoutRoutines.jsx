import React, {useEffect, useState} from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Section from '@/components/Layout/Section/index.js';
import ExerciseList from '@/components/ExerciseList/index.js';
import Card from '@/components/Card/index.js';
import Form from '@/components/Form/index.js';
import TextInput from '@/components/Form/TextInput/index.js';

function CreateWorkoutRoutines() {
    const navigate = useNavigate();
    const {setPageTitle} = useOutletContext();

    const [routine, setRoutine] = useState({
        id          : null,
        name        : '',
        image       : '',
        author      : '',
        level       : '',
        targetMuscle: '',
        exerciseType: '',
        goal        : '',
        about       : '',
        benefits    : [],
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
    const [benefits, setBenefits] = useState('');

    function handleCreateRoutine(e) {
        e.preventDefault();
        navigate('/workout/routines')
    }

    useEffect(() => {
        setPageTitle('Create A Workout Routine')
    }, [setPageTitle]);

    return (
        <>
            <TwoColumns secondColumnWidth="20vw">
                <div>
                    <Section>
                        <Card>
                            <div>
                                <h2>Workout Details:</h2>
                                <Form
                                    buttonColor="blue"
                                    submitLabel="Create Routine"
                                    onSubmit={handleCreateRoutine}
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
                                        id="email"
                                        type="email"
                                        label="About the Workout Routine:"
                                        isRequired={true}
                                        value={about}
                                        error={false}
                                        errorText="test"
                                        onChange={(e) => setAbout(e.target.value)}
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        label="Workout Goal:"
                                        isRequired={true}
                                        value={goal}
                                        error={false}
                                        errorText="test"
                                        onChange={(e) => setGoal(e.target.value)}
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        label="Target Muscles:"
                                        isRequired={true}
                                        value={targetMuscles}
                                        error={false}
                                        errorText="test"
                                        onChange={(e) => setTargetMuscles(e.target.value)}
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        label="Secondary Muscles:"
                                        isRequired={true}
                                        value={secondaryMuscles}
                                        error={false}
                                        errorText="test"
                                        onChange={(e) => setSecondaryMuscles(e.target.value)}
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        label="Benefits:"
                                        isRequired={true}
                                        value={benefits}
                                        error={false}
                                        errorText="test"
                                        onChange={(e) => setBenefits(e.target.value)}
                                    />
                                </Form>
                            </div>
                        </Card>
                    </Section>
                </div>

                <div>
                    <Section title="exercises">
                        <ExerciseList routine={routine} createList={true}/>
                    </Section>
                </div>
            </TwoColumns>
        </>
    );
}

export default CreateWorkoutRoutines;