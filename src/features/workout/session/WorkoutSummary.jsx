import React from 'react';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import ItemDetails from '@/components/ItemDetails/';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';
import {formatTimeToString} from "@/utils/formatter";
import ExerciseWeightProgressCard from "@/features/dashboard/Cards/ExerciseWeightProgressCard";
import MuscleGroupDistributionCard from "@/features/dashboard/Cards/MuscleGroupDistributionCard";
import ExercisesPerformed from "@/features/dashboard/Cards/ExercisesPerformed";
import AverageHeartRate from "@/features/dashboard/Cards/AverageHeartRate";
import {useSelector} from "react-redux";
import {saveWorkoutStats} from "@/api/userDataApi";
import {useNavigate} from "react-router-dom";

function WorkoutSummary() {
    const navigate = useNavigate();
    const {
        routine,
        modifiedRoutine,
        loading,
        workoutState
    } = useSelector(state => state.workoutSession);

    const {user} = useSelector(state => state.auth);

    const handleSaveWorkout = async () => {
        const userID = user._id;
        const date = new Date().toISOString().split('T')[0];

        const completedExercises = [];

        ['warmups', 'exercises', 'stretches'].forEach(phase => {
            const exercises = completedRoutine?.exercises[phase]?.set || [];
            exercises.forEach(ex => {
                completedExercises.push({
                    workoutId: ex.workoutId,
                    duration: ex.duration,
                    calories: ex.calories || 0,
                    sets: ex.sets || 1,
                    reps: ex.reps || null,
                    phase,
                    name: ex.name || `Exercise ${ex.workoutId}`
                });
            });
        });

        try {
            await saveWorkoutStats({ userID, date, completedExercises });
            navigate('/workout');
            alert("Workout statistics saved successfully!");
        } catch (err) {
            alert("Failed to save workout statistics.");
        }
    };



    const createCompletedRoutine = () => {
        if (!routine || !modifiedRoutine) return null;

        const completed = JSON.parse(JSON.stringify(routine));

        ['warmups', 'exercises', 'stretches'].forEach(phase => {
            if (!completed.exercises[phase]?.set) return;

            completed.exercises[phase].set = completed.exercises[phase].set.filter(exercise => {
                const stillExists = modifiedRoutine.exercises[phase]?.set?.some(ex =>
                    ex.workoutId === exercise.workoutId &&
                    ex.duration === exercise.duration &&
                    ex.sets === exercise.sets
                );

                return !stillExists;
            });

            completed.exercises[phase].duration = completed.exercises[phase].set.reduce(
                (total, ex) => total + ex.duration, 0
            );
        });

        return completed;
    };

    const completedRoutine = createCompletedRoutine();
    const calculateTotalCompletedExercises = () => {
        if (!completedRoutine) return 0;

        let count = 0;
        ['warmups', 'exercises', 'stretches'].forEach(phase => {
            count += completedRoutine.exercises[phase]?.set?.length || 0;
        });

        return count;
    };

    const totalCompletedExercises = calculateTotalCompletedExercises();

    if (loading) return <p>Loading routine details...</p>;
    if (!routine) return <p>Error: Routine not found.</p>;

    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : totalCompletedExercises,
            subtitle: 'Completed Exercises'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : `${routine.calories.min} - ${routine.calories.max} Cal`,
            subtitle: 'Calories Burned'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : formatTimeToString(routine.duration - workoutState.workoutTimeRemaining),
            subtitle: 'Duration'
        },
    ]

    return (
        <>
            <PageHeader pageTitle="Workout Summary"/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img src="/images/arm-curl.png" alt="Arm Curl"/>

                            <section className="gird gap-1">
                                <h2>{routine.name}</h2>
                                <ItemDetails columns={4} details={itemDetails}/>
                            </section>

                            <Button color="blue" size="full-width" onClick={handleSaveWorkout}>
                                Save Workout Statistics
                            </Button>
                        </Card>
                    </Section>

                    <Section>
                        <MuscleGroupDistributionCard/>
                        <ExerciseWeightProgressCard/>
                    </Section>

                    <Section>
                        <AverageHeartRate/>
                        <ExercisesPerformed/>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="Completed Exercises">
                        {completedRoutine && completedRoutine.exercises && (
                            totalCompletedExercises > 0 ? (
                                <ExerciseOrder routine={completedRoutine}/>
                            ) : (
                                <Card>
                                    <p className="text-center p-4">No exercises completed yet.</p>
                                </Card>
                            )
                        )}
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default WorkoutSummary;