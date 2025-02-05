import React from 'react';
import {useParams} from 'react-router-dom';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';

const tempRoutine = {
    id          : 1,
    name        : '',
    level       : 'Beginner',
    targetMuscle: 'Full Body',
    exerciseType: 'Strength',
    duration    : '35:00',
    equipments  : [
        {
            equipment: 'Dumbbells',
            required : 1
        },
        {
            equipment: 'Resistance Bands',
            required : 0
        },
        {
            equipment: 'Wrist Straps',
            required : 0
        },
    ],
    about       : 'The Standing Hammer Curl is a strength training exercise primarily targeting the biceps brachii and' +
        ' brachialis, with secondary activation of the forearms. This exercise involves lifting weights with a neutral grip, making it an effective and joint-friendly option for building arm strength and size. It’s suitable for beginners and advanced lifters alike, as the intensity can be adjusted by varying the weight or repetitions.',
    instructions: [
        'Grab a pair of dumbbells and stand up with the dumbbells by your sides.',
        'With a neutral grip, bend your arms slightly to keep the tension on the biceps.',
        'With your palms still facing your body, slowly curl the dumbbells up as far as possible.',
        'Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting' +
        ' position.',
        'Repeat for desired reps.'
    ],
}


function WorkoutRoutineDetails() {
    const {name} = useParams();

    return (
        <>
            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{}</h3>
                                        <p className="subtitle">Level</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{}</h3>
                                        <p className="subtitle">Target Muscles</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{} - {} Cal</h3>
                                        <p className="subtitle">Calories per 10 reps</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{} Minutes</h3>
                                        <p className="subtitle">Time per 10 reps</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>About the Workout Routine:</h3>
                                <p>{}</p>
                            </div>
                        </Card>
                    </Section>
                </div>

                <div>
                    <Section title="exercises">

                    </Section>

                </div>
            </TwoColumns>
        </>
    );
}

export default WorkoutRoutineDetails;