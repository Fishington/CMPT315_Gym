import {toTitle} from '@/utils/formatter.js';

import Button from "@/components/Button";
import LoginIcon from "@/components/Icons/LoginIcon";
import ExerciseOrderHeader from "./ExerciseOrderHeader";
import ExerciseOrderSection from "./ExerciseOrderSection";
import AddExerciseModal from "@/features/workout/createRoutine/AddExerciseModal";

import './ExerciseOrder.scss'
import {useState} from "react";

const exerciseTypes = ['warmups', 'exercises', 'stretches'];

function ExerciseOrder({routine, setRoutine, create = false}) {
    const [modalType, setModalType] = useState('');

    function handleAddExerciseModal(type) {
        if (modalType !== type) {
            setModalType(type)
        } else {
            setModalType(null)
        }
    }

    return (
        <div className="exercise-list">
            {modalType &&
                <AddExerciseModal
                    modalType={modalType}
                    setRoutine={setRoutine}
                    setModalType={setModalType}
                />
            }

            {exerciseTypes.map((type) => {
                const hasExercises = routine.exercises[type].set.length > 0;

                if (!create && !hasExercises)
                    return null;

                return (
                    <div key={type} className="grid gap-1">
                        <ExerciseOrderHeader type={type}
                            routine={routine}
                            hasExercises={hasExercises}
                        />

                        {hasExercises &&
                            <ExerciseOrderSection
                                routine={routine}
                                type={type}
                            />
                        }

                        {create &&
                            <Button
                                color="blue"
                                size="full-width"
                                onClick={() => handleAddExerciseModal(type)}
                            >
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

export default ExerciseOrder;