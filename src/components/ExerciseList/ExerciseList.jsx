import React from 'react';
import ExerciseCard from '@/components/ExerciseCard/index.js';
import {toSeconds, toTitle} from '@/utils/formatter.js';
import './ExerciseList.scss'
import {tempExercisesList} from '@/data/tempData.js';

function ExerciseList({routine}) {
    const exerciseTypes = Object.entries(routine.exercises);

    const calculateDuration = (exerciseList) => {
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
    };

    return (
        <div className="exercise-list">
            {exerciseTypes.map(([type, exerciseList]) => (
                    exerciseList.length > 0 && (
                        <div className="exercise-list__section" key={type}>
                            <div className="exercise-list__section-header">
                                <h3>{toTitle(type)} ({exerciseList.length})</h3>
                                <p>
                                    <span className="exercise-list__duration">{calculateDuration(exerciseList)}</span> minutes
                                </p>
                            </div>

                            <ul className="exercise-list__exercises">
                                {exerciseList.map((exercise, index) => (
                                    <ExerciseCard
                                        key={index}
                                        index={index}
                                        type={type}
                                        exercise={exercise}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))
            )}
        </div>
    );
}

export default ExerciseList;