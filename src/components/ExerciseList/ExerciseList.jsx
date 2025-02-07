import React from 'react';
import ExerciseCard from '@/components/ExerciseCard/index.js';
import {toSeconds, toTitle} from '@/utils/formatter.js';
import './ExerciseList.scss'
import {tempExercisesList} from '@/data/tempData.js';
import Button from '@/components/Button/index.js';

function ExerciseList({routine, createList}) {
    const exerciseTypes = ['warmups', 'exercises', 'stretches'];

    function calculateDuration(exerciseList) {
        let totalTime = 0;

        exerciseList.forEach(exercise => {
            const matchedExercise = tempExercisesList.find(ex => ex.id === exercise.workoutId);
            let timeForExercise = 0;

            if (matchedExercise)
                if (exercise.sets === null || exercise.reps === null)
                    if (matchedExercise.stretchBothSide)
                        timeForExercise = matchedExercise.stretchPerSide * 2;
                    else
                        timeForExercise = matchedExercise.stretchPerSide;
                else
                    timeForExercise = toSeconds(matchedExercise.timePerSet);

            totalTime += (exercise.sets || 1) * timeForExercise;
        });

        return `${Math.floor(totalTime / 60)}:${(totalTime % 60).toString().padStart(2, '0')}`;
    }

    return (
        <div className="exercise-list">
            {exerciseTypes.map((type) => {
                const hasExercises = routine.exercises[type].length > 0;

                if (!createList && !hasExercises) return null;

                return (
                    <div className="exercise-list__section" key={type}>
                        <div className="exercise-list__section-header">
                            <h3>
                                {toTitle(type)} ({routine.exercises[type].length})
                            </h3>

                            {hasExercises && (
                                <p>
                                    <span className="exercise-list__duration">
                                        {calculateDuration(routine.exercises[type])}
                                    </span> minutes
                                </p>
                            )}
                        </div>

                        {hasExercises && (
                            <ul className="exercise-list__exercises">
                                {routine.exercises[type].map((exercise, index) => (
                                    <ExerciseCard
                                        key={index}
                                        index={index}
                                        type={type}
                                        exercise={exercise}
                                    />
                                ))}
                            </ul>
                        )}

                        {createList && (
                            <Button color="blue" size="full-width">
                                Add {type}
                            </Button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ExerciseList;