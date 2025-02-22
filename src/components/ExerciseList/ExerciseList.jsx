import {toTitle} from '@/utils/formatter.js';
import {createContext, useContext} from 'react';

import ExerciseCard from '@/components/ExerciseList/ExerciseCard';

import './ExerciseList.scss'

const ExerciseListContext = createContext(null);

const exerciseTypes = ['warmups', 'exercises', 'stretches'];

function ExerciseList({routine}) {
    return (
        <div className="exercise-list">
            {exerciseTypes.map((type) => {
                const hasExercises = routine.exercises[type];

                if (!hasExercises)
                    return null;

                return (
                    <ExerciseListContext.Provider key={type} value={{type, routine, hasExercises}}>
                        <div className="exercise-list__section">
                            <ExerciseListHeader/>
                            <ExerciseListSection/>
                        </div>
                    </ExerciseListContext.Provider>
                );
            })}
        </div>
    );
}

const ExerciseListHeader = () => {
    const {type, routine} = useContext(ExerciseListContext);

    return (
        <div className="exercise-list__section-header">
            <h3>
                {toTitle(type)} ({routine.exercises[type].set.length})
            </h3>

            <p>
                <span className="exercise-list__duration">
                    {routine.exercises[type].duration}
                </span> minutes
            </p>
        </div>
    )
}

const ExerciseListSection = () => {
    const {type, routine} = useContext(ExerciseListContext);

    return (
        <>
            <ul className="exercise-list__exercises">
                {routine.exercises[type].set.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        index={index}
                        type={type}
                        exercise={exercise}
                    />
                ))}
            </ul>
        </>
    )
}

export default ExerciseList;