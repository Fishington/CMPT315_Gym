import React from 'react';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import Section from '@/components/Layout/Section/index.js';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import ItemDetails from '@/components/ItemDetails/';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';
import {useWorkoutSession} from "@/context/WorkoutSessionContext";
import {formatTimeToString} from "@/utils/formatter";
import ExerciseWeightProgressCard from "@/features/dashboard/Cards/ExerciseWeightProgressCard";
import MuscleGroupDistributionCard from "@/features/dashboard/Cards/MuscleGroupDistributionCard";
import ExercisesPerformed from "@/features/dashboard/Cards/ExercisesPerformed";
import AverageHeartRate from "@/features/dashboard/Cards/AverageHeartRate";

function WorkoutSummary() {
    const {
        routine,
        modifiedRoutine,
        loading,
        error,
        workoutState
    } = useWorkoutSession();

    // Create a completed exercises routine by comparing the original routine with the modified one
    const createCompletedRoutine = () => {
        if (!routine || !modifiedRoutine) return null;

        // Create a deep copy of the routine to avoid mutations
        const completed = JSON.parse(JSON.stringify(routine));

        // For each phase, filter to only include exercises that are completed
        // (i.e., those that exist in original routine but not in modifiedRoutine)
        ['warmups', 'exercises', 'stretches'].forEach(phase => {
            if (!completed.exercises[phase]?.set) return;

            // Keep only exercises that are completed (not present in modifiedRoutine)
            completed.exercises[phase].set = completed.exercises[phase].set.filter(exercise => {
                // Check if this exercise exists in the modified routine
                const stillExists = modifiedRoutine.exercises[phase]?.set?.some(ex =>
                    ex.workoutId === exercise.workoutId &&
                    ex.duration === exercise.duration &&
                    ex.sets === exercise.sets
                );

                // Keep it only if it's been completed (doesn't exist in modified)
                return !stillExists;
            });

            // Update the phase duration based on completed exercises
            completed.exercises[phase].duration = completed.exercises[phase].set.reduce(
                (total, ex) => total + ex.duration, 0
            );
        });

        return completed;
    };

    const completedRoutine = createCompletedRoutine();

    // Calculate total completed exercises
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

                            <Button color="blue" size="full-width" to="/workout">
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
                                <ExerciseOrder routine={completedRoutine} />
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