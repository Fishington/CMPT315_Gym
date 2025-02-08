import React from 'react';
import {useOutletContext, useParams} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import PageHeader from '@/components/Layout/PageHeader';
import FlexRow from '@/components/Layout/FlexRow';
import ItemDetail from '@/components/ItemDetail';
import ExerciseAdditionalDetails from './ExerciseAdditionalDetails.jsx';

import {tempExercisesList} from '@/data/tempData.js';

import './ExercisesDetails.scss'

function ExercisesDetails() {
    const {id} = useParams();
    const {user} = useOutletContext();

    const exercise = tempExercisesList.find((ex) => ex.id === Number(id))
    document.title = `${exercise.name} | HyperFit`;

    return (
        <>
            <PageHeader
                user={user}
                pageTitle={exercise.name}
                showBack={true}
            />

            <TwoColumns>
                <div>
                    <Section>
                        <Card>
                            <video width="100%" height="100%" controls>
                                <source src={exercise.video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>

                            <FlexRow>
                                <ItemDetail
                                    icon={<MealPlanIcon/>}
                                    value={exercise.level}
                                    subtitle="Level"
                                />

                                <ItemDetail
                                    icon={<MealPlanIcon/>}
                                    value={exercise.targetMuscle}
                                    subtitle="Target Muscles"
                                />

                                <ItemDetail
                                    icon={<MealPlanIcon/>}
                                    value={`${exercise.caloriesMin} - ${exercise.caloriesMax} Cal`}
                                    subtitle="Target Muscles"
                                />

                                <ItemDetail
                                    icon={<MealPlanIcon/>}
                                    value={`${exercise.timePerSet} Minutes`}
                                    subtitle="Time per 10 reps"
                                />
                            </FlexRow>

                            <div className="card__section">
                                <h3>About the Exercises:</h3>
                                <p>{exercise.about}</p>
                            </div>

                            <div className="card__section">
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
                                <div key={tip.header} className="card__section">
                                    <h3>{tip.header}:</h3>
                                    <p className="exercise-details__indent">{tip.body}</p>
                                </div>
                            ))}
                        </Card>
                    </Section>

                    <Section title="Additional Details">
                        <ExerciseAdditionalDetails exercise={exercise}/>
                    </Section>
                </div>
            </TwoColumns>
        </>
    )
        ;
}

export default ExercisesDetails;