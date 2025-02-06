import React, {useEffect} from 'react';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import './ExercisesDetails.scss'
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';
import {tempExercisesList} from '@/data/tempData.js';
import {useOutletContext, useParams} from 'react-router-dom';

function ExercisesDetails() {
    const {id} = useParams();
    const {setPageTitle} = useOutletContext();

    const exercise = tempExercisesList.find((ex) => ex.id === Number(id))

    useEffect(() => {
        setPageTitle(exercise.name)
    }, []);
    
    return (
        <>
            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <video width="100%" height="100%" controls>
                                <source src={exercise.video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{exercise.level}</h3>
                                        <p className="subtitle">Level</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{exercise.targetMuscle}</h3>
                                        <p className="subtitle">Target Muscles</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{exercise.caloriesMin} - {exercise.caloriesMax} Cal</h3>
                                        <p className="subtitle">Calories per 10 reps</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{exercise.timePerSet} Minutes</h3>
                                        <p className="subtitle">Time per 10 reps</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>About the Exercises:</h3>
                                <p>{exercise.about}</p>
                            </div>

                            <div>
                                <h3>Instructions:</h3>
                                <div className="exercise-details__instructions-details">
                                    {exercise.instructions.map((step, index) => (
                                        <div key={index} className="exercise-details__step">
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
                            {exercise.tips.map((tip) => (
                                <div key={tip.header}>
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
                                {exercise.equipments.map((equipment) => (
                                    <p key={equipment.equipment} className="exercise-details__indent">{equipment.equipment}</p>
                                ))}
                            </div>

                            <div>
                                <h3>Target Muscles:</h3>
                                <p className="exercise-details__indent">{exercise.targetMuscle}</p>
                            </div>

                            <div>
                                <h3>Secondary Muscles:</h3>
                                {exercise.secondaryMuscles.map((muscle) => (
                                    <p key={muscle} className="exercise-details__indent">{muscle}</p>
                                ))}
                            </div>

                            <div>
                                <h3>Exercise Type:</h3>
                                <p className="exercise-details__indent">{exercise.exerciseType}</p>
                            </div>

                            {exercise.exerciseType === 'Strength' &&
                                <>
                                    <div>
                                        <h3>Force Type:</h3>
                                        <p className="exercise-details__indent">{exercise.forceType}</p>
                                    </div>

                                    <div>
                                        <h3>Mechanics:</h3>
                                        <p className="exercise-details__indent">{exercise.mechanics}</p>
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