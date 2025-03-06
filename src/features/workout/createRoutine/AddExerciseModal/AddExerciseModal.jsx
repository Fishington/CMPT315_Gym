import React, {useEffect, useState} from "react";

import Card from "@/components/Card";
import ItemSearch from "@/components/ItemSearch";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Form from "@/components/Form"
import TextInput from "@/components/Form/TextInput";
import BackIcon from "@/components/Icons/BackIcon/index.js";

import './AddExerciseModal.scss'
import {fetchExercises} from "@/api/exerciseApi.js";

const exerciseFilters = [
    {
        label  : 'Goal',
        id: 'goal',
        options: [
            'Cardio Endurance',
            'Core Stability',
            'Joint Health',
            'Muscle Building',
            'Rehabilitation',
            'Weight Loss',
        ]
    },
    {
        label  : 'Muscle Group',
        id: 'targetMuscle',
        options: [
            'Full Body',
            'Chest & Shoulders',
            'Back & Arms',
            'Legs & Glutes',
            'Core'
        ]
    },
    {
        label  : 'Difficulty',
        id: 'level',
        options: [
            'Beginner',
            'Intermediate',
            'Advanced'
        ]
    }
]

export default function AddExerciseModal({modalType, setModalType, setRoutine}) {
    const [showReps, setShowReps] = useState(false);
    const [newExercise, setNewExercise] = useState();
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [breakDuration, setBreakDuration] = useState('')
    const [exercisesList, setExercisesList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getExercises = async () => {
            try {
                const data = await fetchExercises();
                if (data) {
                    setExercisesList(data);
                } else {
                    console.error("No exercises found.");
                }
            } catch (error) {
                console.error("Error fetching exercises:", error);
            } finally {
                setLoading(false);
            }
        };

        getExercises();
    }, []);

    function handleAddExercise(e) {
        e.preventDefault();

        const exerciseDuration = Math.round(
            ((newExercise.duration / 10) * reps) * sets + breakDuration * (sets - 1)
        );
        const totalCaloriesMin = Math.round(
            ((newExercise.caloriesMin / 10) * reps) * sets
        );
        const totalCaloriesMax = Math.round(
            ((newExercise.caloriesMax / 10) * reps) * sets
        );

        const newSet = {
            workoutId    : newExercise.id,
            reps         : parseInt(reps),
            sets         : parseInt(sets),
            breakDuration: parseInt(breakDuration),
            duration     : exerciseDuration,
            calories     : {min: totalCaloriesMin, max: totalCaloriesMax},
        }

        setRoutine((prev) => {
            const updatedEquipment = [...prev.equipment];

            newExercise.equipment.forEach((item) => {
                const existingIndex = updatedEquipment.findIndex(
                    (equipment) => equipment.name === item
                );
                if (existingIndex !== -1) {
                    updatedEquipment[existingIndex] = {
                        ...updatedEquipment[existingIndex],
                        count: updatedEquipment[existingIndex].count + 1,
                    };
                } else {
                    updatedEquipment.push({
                        name : item,
                        count: 1,
                    });
                }
            });

            return {
                ...prev,
                exercises    : {
                    ...prev.exercises,
                    [modalType]: {
                        ...prev.exercises[modalType],
                        duration: prev.exercises[modalType].duration + exerciseDuration,
                        set     : [...prev.exercises[modalType].set, newSet],
                    },
                },
                calories     : {
                    min: prev.calories.min + totalCaloriesMin,
                    max: prev.calories.max + totalCaloriesMax,
                },
                duration     : prev.duration + exerciseDuration,
                exerciseCount: ++prev.exerciseCount,
                equipment    : updatedEquipment,
            }
        });

        setModalType('')
    }

    function handleSetReps(exerciseData) {
        setNewExercise(exerciseData);
        setShowReps(true)
    }

    return (
        <div className="add-exercise-modal__background">
            {showReps ? (
                <Card variant="add-exercise-modal__sub">
                    <div className="flex gap-1">
                        <div
                            className="add-exercise-modal__back"
                            onClick={() => setShowReps(false)}
                        >
                            <BackIcon/>
                        </div>
                        <h2>Set the number of reps, sets and break duration:</h2>
                    </div>

                    <div className="item-search-row">
                        <div
                            className="item-search-row__container"
                            style={{gridTemplateColumns: `2.5fr repeat(5, 1fr)`}}
                        >
                            <div className="item-search-row__item">
                                <img className="item-search-row__image" src={newExercise.image} alt={newExercise.name}/>
                                <p>{newExercise.name}</p>
                            </div>
                            <AddExerciseModalRow data={newExercise}/>
                        </div>
                    </div>

                    <Form onSubmit={handleAddExercise}>
                        <div className="add-exercise-modal__form">
                            <TextInput
                                id="reps"
                                type="number"
                                label="Number of reps:"
                                value={reps}
                                // error={errors.about?.error}
                                // errorText={errors.about?.message}
                                onChange={(e) => setReps(e.currentTarget.value)}
                            />

                            <TextInput
                                id="about"
                                type="number"
                                label="Number of sets:"
                                value={sets}
                                // error={errors.about?.error}
                                // errorText={errors.about?.message}
                                onChange={(e) => setSets(e.currentTarget.value)}
                            />

                            <TextInput
                                id="break"
                                type="number"
                                label="Break Duration in Seconds:"
                                value={breakDuration}
                                // error={errors.about?.error}
                                // errorText={errors.about?.message}
                                onChange={(e) => setBreakDuration(e.currentTarget.value)}
                            />
                        </div>

                        <Button color="blue" size="medium" type="submit">
                            Add Exercise
                        </Button>
                    </Form>
                </Card>
            ) : (
                <Card variant="add-exercise-modal__main">
                    <div className="flex gap-1">
                        <div
                            className="add-exercise-modal__back"
                            onClick={() => setModalType('')}
                        >
                            <BackIcon/>
                        </div>
                        <h2>Add an exercise to the {modalType} List:</h2>
                    </div>
                    <ItemSearch
                        data={exercisesList}
                        filters={exerciseFilters}
                        columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories Burn', '']}
                        rowFormat={(data) => <AddExerciseModalRow data={data} setReps={true}
                                                                  handleSetReps={handleSetReps}/>}
                        itemsPerPage={12}
                    />
                </Card>
            )}
        </div>
    )
        ;
}

function AddExerciseModalRow({data, setReps, handleSetReps}) {
    return (
        <>
            <p><span>Exercise Type: </span>{data.exerciseType}</p>
            <p><span>Target Muscle: </span>{data.targetMuscle}</p>
            <p><span>Equipment: </span>{data.equipment[0]}</p>
            <Tag tagTitle={data.level} color={data.level.toLowerCase()} size="large"/>
            <p>
                <span>Calories Per Rep: </span>{((data.caloriesMax + data.caloriesMin) / 2).toFixed(0)} cal
            </p>
            {setReps &&
                <Button color="blue" size="medium" onClick={() => handleSetReps(data)}>
                    Add Exercise
                </Button>
            }
        </>
    );
}