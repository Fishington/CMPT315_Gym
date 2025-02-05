import React from 'react';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import './ExercisesDetails.scss'
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';

const tempExercise = {
    id              : 1,
    name            : '',
    level           : 'Beginner',
    targetMuscle    : 'Biceps',
    secondaryMuscles: [
        'Forearms'
    ],
    exerciseType    : 'Strength',
    forceType       : 'Pull',
    mechanics       : 'Isolation',
    caloriesMin     : 120, // For database, ask ChatGPT reasonable values
    caloriesMax     : 160, // For database, ask ChatGPT reasonable values
    timePerSet      : '2:00',
    equipments      : [
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
    about           : 'The Standing Hammer Curl is a strength training exercise primarily targeting the biceps brachii and' +
        ' brachialis, with secondary activation of the forearms. This exercise involves lifting weights with a neutral grip, making it an effective and joint-friendly option for building arm strength and size. It’s suitable for beginners and advanced lifters alike, as the intensity can be adjusted by varying the weight or repetitions.',
    instructions    : [
        'Grab a pair of dumbbells and stand up with the dumbbells by your sides.',
        'With a neutral grip, bend your arms slightly to keep the tension on the biceps.',
        'With your palms still facing your body, slowly curl the dumbbells up as far as possible.',
        'Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting' +
        ' position.',
        'Repeat for desired reps.'
    ],
    tips            : [
        {
            header: 'Maintain Proper Posture',
            body  : 'Grab a pair of dumbbells and stand up with the dumbbells by your sides.'
        },
        {
            header: 'Controlled Movements',
            body  : 'Avoid swinging your arms or using momentum; focus on slow, controlled reps to fully engage your biceps.'
        },
        {
            header: 'Grip Adjustments',
            body  : 'Use a neutral grip (palms facing each other) to reduce strain on the wrists and emphasize the brachialis muscle.'
        },
        {
            header: 'Avoid Overloading',
            body  : 'Start with a manageable weight to maintain good form and gradually increase as you build strength.'
        },
        {
            header: 'Elbow Positioning',
            body  : 'Keep your elbows close to your torso and avoid flaring them out to ensure proper muscle isolation.'
        }
    ]
}

function ExercisesDetails() {
    return (
        <>
            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <video width="100%" height="100%" controls>
                                <source src="/video/temp-video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{tempExercise.level}</h3>
                                        <p className="subtitle">Level</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{tempExercise.targetMuscle}</h3>
                                        <p className="subtitle">Target Muscles</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{tempExercise.caloriesMin} - {tempExercise.caloriesMax} Cal</h3>
                                        <p className="subtitle">Calories per 10 reps</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{tempExercise.timePerSet} Minutes</h3>
                                        <p className="subtitle">Time per 10 reps</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>About the Exercises:</h3>
                                <p>{tempExercise.about}</p>
                            </div>

                            <div>
                                <h3>Instructions:</h3>
                                <div className="exercise-details__instructions-details">
                                    {tempExercise.instructions.map((step, index) => (
                                        <div className="exercise-details__step">
                                            <h3 className="exercise-details__step-index">{index + 1}</h3>
                                            <p>{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Section>
                </div>

                <div>
                    <Section title="Tips">
                        <Card>
                            {tempExercise.tips.map((tip) => (
                                <div>
                                    <h3>{tip.header}:</h3>
                                    <p className="exercise-details__indent">{tip.body}</p>
                                </div>
                            ))}
                        </Card>
                    </Section>

                    <Section title="Additionl Details">
                        <Card>
                            <div>
                                <h3>Equipment:</h3>
                                {tempExercise.equipments.map((equipment) => (
                                    <p className="exercise-details__indent">{equipment.equipment}</p>
                                ))}
                            </div>

                            <div>
                                <h3>Target Muscles:</h3>
                                <p className="exercise-details__indent">{tempExercise.targetMuscle}</p>
                            </div>

                            <div>
                                <h3>Secondary Muscles:</h3>
                                {tempExercise.secondaryMuscles.map((muscle) => (
                                    <p className="exercise-details__indent">{muscle}</p>
                                ))}
                            </div>

                            <div>
                                <h3>Exercise Type:</h3>
                                <p className="exercise-details__indent">{tempExercise.exerciseType}</p>
                            </div>

                            {tempExercise.exerciseType === 'Strength' &&
                                <>
                                    <div>
                                        <h3>Force Type:</h3>
                                        <p className="exercise-details__indent">{tempExercise.forceType}</p>
                                    </div>

                                    <div>
                                        <h3>Mechanics:</h3>
                                        <p className="exercise-details__indent">{tempExercise.mechanics}</p>
                                    </div>
                                </>
                            }
                        </Card>
                    </Section>
                </div>
            </TwoColumns>
        </>
    )
        ;
}

export default ExercisesDetails;