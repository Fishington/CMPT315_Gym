import {useParams} from 'react-router-dom';

import PageHeader from '@/components/Layout/PageHeader';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ExerciseList from '@/features/workout/components/ExerciseList/index.js';

import {tempRoutineList} from '@/data/tempData.js';

import Button from '@/components/Button/index.js';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails.jsx';

function RoutineDetails() {
    const {id} = useParams();
    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

    return (
        <>
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img src={routine.image} alt=""/>

                            <MainRoutineDetails routine={routine}>
                                <Button color="blue" size="full-width" to={`/workout/session/${id}`}>
                                    Start Workout Routine
                                </Button>
                            </MainRoutineDetails>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="exercises">
                        <ExerciseList routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default RoutineDetails;