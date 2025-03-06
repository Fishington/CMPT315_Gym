import {useNavigate} from "react-router-dom";

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import PageHeader from '@/components/Layout/PageHeader';
import Tag from '@/components/Tag';
import ItemCard from '@/components/ItemCard';
import Button from '@/components/Button/index.js';

import {formatTimeToString} from "@/utils/formatter.js";
import {useEffect, useState} from "react";
import {fetchRoutines} from "@/api/routinesApi.js";
import LoadingScreen from "@/components/LoadingScreen/index.js";

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

function RoutinesList() {
    const navigate = useNavigate();
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRoutines = async () => {
            try {
                const data = await fetchRoutines();
                if (data) {
                    setRoutines(data);
                } else {
                    console.error("No routines found.");
                }
            } catch (error) {
                console.error("Error fetching routines:", error);
            } finally {
                setLoading(false);
            }
        };

        getRoutines();
    }, []);

    if (loading) return <LoadingScreen/>;

    return (
        <>
            <PageHeader pageTitle="View Workout Routines" showBack={true} backTarget="/workout"/>

            <Section
                title="Featured Routines"
                tip="Take a look at the featured workout routines that are currently popular."
            >
                <ItemCard data={routines.find((ro) => ro.id === Number(1))} baseLink="workout/routines"/>
                <ItemCard data={routines.find((ro) => ro.id === Number(2))} baseLink="workout/routines"/>
                <ItemCard data={routines.find((ro) => ro.id === Number(3))} baseLink="workout/routines"/>
                <ItemCard data={routines.find((ro) => ro.id === Number(4))} baseLink="workout/routines"/>
            </Section>

            <Section
                title="All Routines"
                tip="View all our routines available made by not only use but also the community."
            >
                <Card>
                    <ItemSearch
                        filters={exerciseFilters}
                        data={routines}
                        columns={['Workout Goal','Muscle Group', 'Difficulty', 'Calories', 'Duration']}
                        rowFormat={(data) => <RoutineListRow data={data}/>}
                        onDataClick={(itemData) => navigate(`${itemData.id}`)}
                        searchBarContent={
                            <Button color="blue" size="medium" to={`/workout/routines/create`}>
                                Create Workout Routine
                            </Button>
                        }
                    />
                </Card>
            </Section>
        </>
    );
}

function RoutineListRow({data}) {
    return (
        <>
            <p>{data.goal}</p>
            <p>{data.targetMuscle}</p>
            <Tag tagTitle={data.level} color={data.level.toLowerCase()} size="large"/>
            <p>{((data.calories.min + data.calories.max) / 2).toFixed(0)} cal</p>
            <p>{formatTimeToString(data.duration)}</p>
        </>
    )
}

export default RoutinesList;

