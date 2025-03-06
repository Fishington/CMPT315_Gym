import {useParams} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';
import PageHeader from '@/components/Layout/PageHeader';
import ExerciseAdditionalDetails from './ExerciseAdditionalDetails';
import ItemDetails from '@/components/ItemDetails';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import Instructions from '@/components/Instructions';
import ItemAbout from '@/components/ItemAbout';
import ExerciseTips from '@/features/workout/exercises/ExerciseTips';

import {formatTimeToString} from "@/utils/formatter.js";
import {fetchExerciseById} from "@/api/exerciseApi.js";
import {useEffect, useState} from "react";
import LoadingScreen from "@/components/LoadingScreen/index.js";

function ExercisesDetails() {
    const { id } = useParams();
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadExercise = async () => {
            try {
                const data = await fetchExerciseById(id);
                setExercise(data);
            } catch (error) {
                console.error("Failed to fetch from API:", error);
            } finally {
                setLoading(false);
            }
        };

        loadExercise();
    }, [id]);

    if (loading) return <LoadingScreen/>;
    if (error) return <p>Error: {error}</p>;
    if (!exercise) return <p>Exercise not found</p>;

    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : exercise.level,
            subtitle: 'Level'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : exercise.targetMuscle,
            subtitle: 'Target Muscles'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : `${exercise.caloriesMin} - ${exercise.caloriesMax} Cal`,
            subtitle: 'Calories Burned'
        },
        {
            icon    : <MealPlanIcon/>,
            value   : formatTimeToString(exercise.duration),
            subtitle: 'Time per 10 reps'
        },
    ]

    return (
        <>
            <PageHeader pageTitle={exercise.name} showBack={true}/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img src={exercise.image} alt=""/>
                            <ItemDetails columns={4} details={itemDetails}/>
                            <ItemAbout aboutName="Exercise" data={exercise.about}/>
                            <Instructions steps={exercise.instructions}/>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="Tips">
                        <ExerciseTips exercise={exercise.tips}/>
                    </Section>

                    <Section title="Additional Details">
                        <ExerciseAdditionalDetails exercise={exercise}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    )
        ;
}

export default ExercisesDetails;