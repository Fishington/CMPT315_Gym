import Card from '@/components/Card/index.js';

import './ExerciseCard.scss'

import {tempExercisesList} from '@/data/tempData.js';
import {createContext, useContext} from 'react';

const ExerciseCardContext = createContext(null);

function ExerciseCard({type, exercise, index}) {
    const matchedExercise = tempExercisesList.find((ex) => ex.id === exercise.workoutId);

    if (!matchedExercise)
        return (
            <Card variant="exercise-card">
                <h3>Exercise not found in database</h3>
            </Card>
        )

    return (
        <li>
            <ExerciseCardContext.Provider value={{matchedExercise, type, exercise}}>
                <Card variant="exercise-card">
                    <h3 className="exercise-card__index">{index + 1}</h3>
                    
                    <ExerciseCardContent/>
                </Card>
            </ExerciseCardContext.Provider>
        </li>
    );
}

function ExerciseCardContent() {
    const {matchedExercise} = useContext(ExerciseCardContext);

    return (
        <div className="exercise-card__content">
            <img className="exercise-card__image" src={matchedExercise.image} alt=""/>

            <div className="exercise-card__details">
                <h3 className="exercise-card__name">{matchedExercise.name}</h3>
                <ExerciseCardStats/>
            </div>
        </div>
    )
}

function ExerciseCardStats() {
    const {matchedExercise, type, exercise} = useContext(ExerciseCardContext);

    return (
        <div className="exercise-card__stats">
            {type === 'exercises' ? (
                <>
                    <div>
                        <p>{exercise.reps} reps x {exercise.sets} sets</p>
                    </div>

                    <div>
                        <p>{matchedExercise.timePerSet} minutes</p>
                    </div>
                </>
            ) : (
                <div>
                    <p>{matchedExercise.stretchPerSide} seconds {matchedExercise.stretchBothSide ? ` each ${matchedExercise.stretchFocus}` : ''}</p>
                </div>
            )}

            <div>
                <p>{((matchedExercise.caloriesMin + matchedExercise.caloriesMax) / 2).toFixed(0)} cals</p>
            </div>
        </div>
    )
}

export default ExerciseCard;