import {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';

import PageHeader from '@/components/Layout/PageHeader';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails';
import Button from '@/components/Button';

import {deleteRoutine, fetchRoutineById} from "@/api/routinesApi.js";
import LoadingScreen from "@/components/LoadingScreen/index.js";
import {useSelector} from "react-redux";

function RoutineDetails() {
    const user = useSelector((state) => state.auth.user);
    const {id} = useParams();
    const navigate = useNavigate();

    const [routine, setRoutine] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRoutine = async () => {
            try {
                const data = await fetchRoutineById(id);
                if (data) {
                    setRoutine(data);
                } else {
                    console.error(`Routine with ID ${id} not found.`);
                }
            } catch (error) {
                console.error("Error fetching routine:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) getRoutine();
    }, [id]);

    async function handleRemoveRoutine() {
        if (!window.confirm("Are you sure you want to delete this routine?")) return;

        try {
            const result = await deleteRoutine(id);
            if (result) {
                console.log(`Routine ${id} deleted successfully.`);
                navigate("/workout");
            }
        } catch (error) {
            console.error("Error deleting routine:", error);
        }
    }

    if (loading) return <LoadingScreen/>;
    if (!routine) return <p>Error: Routine not found.</p>;

    return (
        <>
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img
                                style={{objectFit: 'cover',}}
                                src={routine.image}
                                alt=""
                            />

                            <MainRoutineDetails routine={routine}>
                                <Button color="blue" size="full-width" to={`/workout/session/${id}`}>
                                    Start Workout Routine
                                </Button>
                            </MainRoutineDetails>

                            {routine.authorID === user._id && (
                                <Button
                                    color="red"
                                    size="full-width"
                                    onClick={() => handleRemoveRoutine(routine.id)}
                                >
                                    Delete this routine
                                </Button>
                            )}

                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="exercises">
                        <ExerciseOrder routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default RoutineDetails;