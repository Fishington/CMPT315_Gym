import React, {useEffect, useState} from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import Tag from '@/components/Tag';
import PageHeader from '@/components/Layout/PageHeader';

import {useNavigate} from "react-router-dom";
import {fetchExercises} from "@/api/exerciseApi.js";
import LoadingScreen from "@/components/LoadingScreen/index.js";

const exerciseFilters = [
    {
        label  : 'Category',
        id     : 'exerciseType',
        options: ['Strength', 'Stretch']
    },
    {
        label  : 'Muscle Group',
        id     : 'targetMuscle',
        options: [
            'Abductors',
            'Abs',
            'Adductors',
            'Biceps',
            'Calves',
            'Chest',
            'Forearms',
            'Glutes',
            'Hamstrings',
            'Hip Flexors',
            'IT Band',
            'Lats',
            'Lower Back',
            'Upper Back',
            'Neck',
            'Obliques',
            'Palmar Fascia',
            'Plantar Fascia',
            'Quads',
            'Shoulders',
            'Traps',
            'Triceps',
        ]
    },
    {
        label  : 'Equipment',
        id     : 'equipment',
        options: ['Dumbbells', 'Mat']
    }
]

function ExercisesList() {
    const navigate = useNavigate();

    const [exercisesList, setExercisesList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadExercise = async () => {
            try {
                const data = await fetchExercises();
                setExercisesList(data);
            } catch (error) {
                console.error("Failed to fetch from API:", error);
            } finally {
                setLoading(false);
            }
        };

        loadExercise();
    }, []);

    if (loading) return <LoadingScreen/>;
    if (error) return <p>Error: {error}</p>;
    if (!exercisesList) return <p>Exercise not found</p>;

    return (
        <>
            <PageHeader pageTitle="View Exercises" showBack={true} backTarget="/workout"/>

            <Section>
                <Card>
                    <ItemSearch
                        filters={exerciseFilters}
                        data={exercisesList}
                        columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories Burn']}
                        rowFormat={(data) => <ExerciseSearchRow data={data}/>}
                        onDataClick={(itemData) => navigate(`${itemData.id}`)}
                    />
                </Card>
            </Section>
        </>
    );
}

function ExerciseSearchRow({data}) {
    return (
        <>
            <p><span>Exercise Type: </span>{data.exerciseType}</p>
            <p><span>Target Muscle: </span>{data.targetMuscle}</p>
            <p><span>Equipment: </span>{data.equipment[0]}</p>
            <Tag tagTitle={data.level} color={data.level.toLowerCase()} size="large"/>
            <p>
                <span>Calories Per Rep: </span>{((data.caloriesMax + data.caloriesMin) / 2).toFixed(0)} cal
            </p>
        </>
    );
}

export default ExercisesList;