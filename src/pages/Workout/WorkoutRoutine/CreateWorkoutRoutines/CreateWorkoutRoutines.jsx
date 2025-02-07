import React, {useEffect, useState} from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Section from '@/components/Layout/Section/index.js';
import DataList from '@/components/ExerciseList/index.js';
import Card from '@/components/Card/index.js';
import Form from '@/components/Form/index.js';
import TextInput from '@/components/Form/TextInput/index.js';
import RadioInput from '@/components/Form/RadioInput/RadioInput.jsx';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';

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

    useEffect(() => {
        setPageTitle('Create A Workout Routine')
    }, [setPageTitle]);

    return (
        <>
            <TwoColumns secondColumnWidth="20vw">
                <div>
                    <Section>
                        <Card>
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
                                    required={true}
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
                            </Form>

                            <div>
                                <h2>Based on the Exercises:</h2>
                                
                                <div>
                                    <h3>Equipment:</h3>

                                    {routine.equipment.length === 0 ? (
                                        <p>Start adding exercises to your workout routine</p>
                                    ) : (
                                        <ul className="workout-routine-details__benefits">
                                            {routine.equipment.map((equipment, index) => (
                                                <li key={index}>
                                                    {equipment}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="exercise-details__description-row">
                                    <div className="exercise-details__description">
                                        <MealPlanIcon/>

                                        <div>
                                            <h3>0 Exercises</h3>
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

                                    <div className="exercise-details__description">
                                        <MealPlanIcon/>

                                        <div>
                                            <h3>0:00</h3>
                                            <p className="subtitle">Duration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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