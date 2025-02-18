import {toTitle} from '@/utils/formatter.js';
import {createContext, useContext} from 'react';
import {Link} from 'react-router-dom';

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

function ExerciseListHeader() {
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

function ExerciseListSection() {
    const {type, routine} = useContext(ExerciseListContext);

    return (
        <>
            <ul className="exercise-list__exercises">
                {routine.exercises[type].set.map((exercise, index) => (
                    <Link key={index} to={`/workout/exercises/${exercise.workoutId}`}>
                        <ExerciseCard
                            index={index}
                            type={type}
                            exercise={exercise}
                        />
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default ExerciseList;