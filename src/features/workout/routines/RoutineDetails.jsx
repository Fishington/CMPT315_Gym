import {useParams} from 'react-router-dom';

import PageHeader from '@/components/Layout/PageHeader';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails';
import Button from '@/components/Button';

import tempRoutineList from '@/data/routines.json';
import {useAuth} from "@/context/AuthContext.jsx";

function RoutineDetails() {
    const {user} = useAuth();
    const {id} = useParams();
    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

    function handleRemoveRoutine(e) {
        console.log('delete routine');
    }

    return (
        <>
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img
                                style={{maxHeight: '40rem', objectFit: 'cover'}}
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