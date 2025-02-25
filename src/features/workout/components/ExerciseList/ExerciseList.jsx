import {toTitle} from '@/utils/formatter.js';

import Button from "@/components/Button";
import LoginIcon from "@/components/Icons/LoginIcon";
import ExerciseListHeader from "@/features/workout/components/ExerciseList/ExerciseListHeader";
import ExerciseListSection from "@/features/workout/components/ExerciseList/ExerciseListSection";

import './ExerciseList.scss'

const exerciseTypes = ['warmups', 'exercises', 'stretches'];

function ExerciseList({routine, create = false}) {
    return (
        <div className="exercise-list">
            {exerciseTypes.map((type) => {
                const hasExercises = routine.exercises[type].set.length > 0;

                if (!create && !hasExercises)
                    return null;

                return (
                    <div className="grid gap-1">
                        <ExerciseListHeader
                            type={type}
                            routine={routine}
                            hasExercises={hasExercises}
                        />

                        {hasExercises &&
                            <ExerciseListSection
                                routine={routine}
                                type={type}
                            />
                        }

                        {create &&
                            <Button color="blue" size="full-width">
                                <LoginIcon/>
                                Add {toTitle(type)}
                            </Button>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default ExerciseList;