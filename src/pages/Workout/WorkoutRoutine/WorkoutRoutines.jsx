import React from 'react';
import {useOutletContext} from 'react-router-dom';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import ItemSearch from '@/components/ItemSearch/index.js';
import DataList from '@/components/DataList/index.js';
import DataRow from '@/components/DataRow/index.js';
import LevelTag from '@/components/LevelTag/index.js';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import {tempRoutineList} from '@/data/tempData.js';

function WorkoutRoutines() {
    const {user} = useOutletContext();
    document.title = 'View Workout Routines | HyperFit';

    return (
        <>
            <PageHeader
                user={user}
                pageTitle="View Workout Routines"
                showBack={true}
                backTarget="/workout"
            />

            <Button
                color="blue"
                size="full-width"
                href={`/workout/routines/create`}
            >
                Create Routine
            </Button>

            <Section>
                <Card>
                    <ItemSearch
                        onChangeSearchInput={() => console.log('Change Input')}
                        onNextPage={() => console.log('Next Page')}
                        onPreviousPage={() => console.log('Previous Page')}
                        onJumpPage={() => console.log('Jump Page')}
                    >
                        <DataList
                            data={tempRoutineList}
                            columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories', 'Length']}
                        >
                            {tempRoutineList.map((routine) => (
                                <DataRow data={routine} columnsNum={6} key={routine.name}>
                                    <p>{routine.exerciseType}</p>
                                    <p>{routine.targetMuscle}</p>
                                    <p>{routine.equipment[0]}</p>
                                    <LevelTag level={routine.level}/>
                                    <p>{((routine.caloriesMax + routine.caloriesMin) / 2).toFixed(0)} cal</p>
                                    <p><strong>{routine.length}</strong> minutes</p>
                                </DataRow>
                            ))}
                        </DataList>
                    </ItemSearch>
                </Card>
            </Section>
        </>
    );
}

export default WorkoutRoutines;

