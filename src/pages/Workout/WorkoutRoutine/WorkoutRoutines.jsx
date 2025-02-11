import React from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import ItemSearchList from '@/components/ItemSearch/ItemSearchList';
import ItemSearchRow from '@/components/ItemSearch/ItemSearchRow';
import PageHeader from '@/components/Layout/PageHeader';
import Tag from '@/components/Tag';

import {tempRoutineList} from '@/data/tempData.js';
import ItemCard from '@/components/ItemCard';


function WorkoutRoutines() {
    return (
        <>
            <PageHeader
                pageTitle="View Workout Routines"
                showBack={true}
                backTarget="/workout"
            />

            <Section
                title="Featured Routines"
                tip="Take a look at the featured workout routines that are currently popular."
            >
                <ItemCard
                    data={tempRoutineList[0]}
                    baseLink="workout/routines"
                />

                <ItemCard
                    data={tempRoutineList[1]}
                    baseLink="workout/routines"
                />

                <ItemCard
                    data={tempRoutineList[0]}
                    baseLink="workout/routines"
                />

                <ItemCard
                    data={tempRoutineList[0]}
                    baseLink="workout/routines"
                />
            </Section>


            <Section
                title="All Routines"
                tip="View all our routines available made by not only use but also the community."
            >
                <Card>
                    <ItemSearch
                        onChangeSearchInput={() => console.log('Change Input')}
                        onNextPage={() => console.log('Next Page')}
                        onPreviousPage={() => console.log('Previous Page')}
                        onJumpPage={() => console.log('Jump Page')}
                        create="routine"
                    >
                        <ItemSearchList
                            data={tempRoutineList}
                            columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories', 'Length']}
                        >
                            {tempRoutineList.map((routine) => (
                                <ItemSearchRow data={routine} columnsNum={6} key={routine.name}>
                                    <p>{routine.exerciseType}</p>
                                    <p>{routine.targetMuscle}</p>
                                    <p>{routine.equipment[0]}</p>
                                    <Tag tagTitle={routine.level} color={routine.level.toLowerCase()} size="large"/>
                                    <p>{((routine.caloriesMax + routine.caloriesMin) / 2).toFixed(0)} cal</p>
                                    <p><strong>{routine.length}</strong> minutes</p>
                                </ItemSearchRow>
                            ))}
                        </ItemSearchList>
                    </ItemSearch>
                </Card>
            </Section>
        </>
    );
}

export default WorkoutRoutines;

