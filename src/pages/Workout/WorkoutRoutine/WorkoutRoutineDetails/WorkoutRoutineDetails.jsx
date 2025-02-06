import React, {useEffect} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import './WorkoutRoutineDetails.scss'
import ExerciseList from '@/components/ExerciseList';
import {toSeconds} from '@/utils/formatter.js';
import {tempExercisesList, tempRoutineList} from '@/data/tempData.js';


function WorkoutRoutineDetails() {
    const {id} = useParams();
    const {setPageTitle} = useOutletContext();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

    useEffect(() => {
        setPageTitle(routine.name)
    }, []);

    const allExercises = [
        ...routine.exercises.warmups,
        ...routine.exercises.exercises,
        ...routine.exercises.stretches
    ];

    const totalExercises = allExercises.length;

    let totalCaloriesMin = 0;
    let totalCaloriesMax = 0;
    let totalTime = 0;

    allExercises.forEach(exercise => {
        const matchedExercise = tempExercisesList.find(ex => ex.id === exercise.workoutId);
        let timeForExercise = 0;

        if (matchedExercise) {
            totalCaloriesMin += matchedExercise.caloriesMin;
            totalCaloriesMax += matchedExercise.caloriesMax;
            
            if (exercise.sets === null || exercise.reps === null)
                if (matchedExercise.stretchBothSide)
                    timeForExercise = matchedExercise.stretchPerSide * 2;
                else
                    timeForExercise = matchedExercise.stretchPerSide;
            else
                timeForExercise = toSeconds(matchedExercise.timePerSet);
            
            totalTime += (exercise.sets || 1) * timeForExercise;
        }
    });

    const totalMinutes = Math.floor(totalTime / 60);
    const totalSeconds = (totalTime % 60).toString().padStart(2, '0');
    
    return (
        <>
            <TwoColumns secondColumnWidth="max-content">
                <div>
                    <Section>
                        <Card>
                            <img src={routine.image} alt=""/>

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.level}</h3>
                                        <p className="subtitle">Level</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{totalExercises} Exercises</h3>
                                        <p className="subtitle">Total Exercises</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{totalCaloriesMin} - {totalCaloriesMax} Cal</h3>
                                        <p className="subtitle">Calories Burned</p>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-details__description-row">
                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>
                                            {totalMinutes}:{totalSeconds}
                                        </h3>
                                        <p className="subtitle">Duration</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.targetMuscle}</h3>
                                        <p className="subtitle">Target Muscles</p>
                                    </div>
                                </div>

                                <div className="exercise-details__description">
                                    <MealPlanIcon/>

                                    <div>
                                        <h3>{routine.goal}</h3>
                                        <p className="subtitle">Workout Goal</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>About the Workout Routine:</h3>
                                <p>{routine.about}</p>
                            </div>

                            <div>
                                <h3>Benefits:</h3>
                                <ul className="workout-routine-details__benefits">
                                    {routine.benefits.map((benefit,index) => (
                                        <li key={index}>
                                            {benefit}
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