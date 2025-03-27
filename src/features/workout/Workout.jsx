import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section/index.js';
import Button from '@/components/Button/index.js';
import BackIcon from '@/components/Icons/BackIcon/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import CaloriesBurned from "@/features/dashboard/Cards/CaloriesBurned";
import MuscleGroupDistributionCard from "@/features/dashboard/Cards/MuscleGroupDistributionCard";
import ExerciseWeightProgressCard from "@/features/dashboard/Cards/ExerciseWeightProgressCard";
import {useEffect, useState} from "react";
import {fetchRoutines} from "@/api/routinesApi";
import LoadingScreen from "@/components/LoadingScreen";
import ItemCard from "@/components/ItemCard";

function Workout() {
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
            <PageHeader pageTitle="Workout"/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Button color="image-button" to="exercises" image="/images/exercise-button.jpg">
                            View Exercises
                            <BackIcon/>
                        </Button>

                        <Button color="image-button" to="routines" image="/images/routine-button.jpg">
                            View Workout Routines
                            <BackIcon/>
                        </Button>
                    </Section>

                    <Section title="Progress Tracker">
                        <Section.Column>
                            <ExerciseWeightProgressCard/>
                            <MuscleGroupDistributionCard/>
                            <CaloriesBurned/>
                        </Section.Column>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="Today’s Workouts">
                        <ItemCard data={routines.find((ro) => ro.id === Number(1))} baseLink="workout/routines"/>
                    </Section>

                    <Section title="Upcoming Workouts">
                        <ItemCard data={routines.find((ro) => ro.id === Number(2))} baseLink="workout/routines"/>
                        <ItemCard data={routines.find((ro) => ro.id === Number(3))} baseLink="workout/routines"/>
                        <ItemCard data={routines.find((ro) => ro.id === Number(4))} baseLink="workout/routines"/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default Workout;