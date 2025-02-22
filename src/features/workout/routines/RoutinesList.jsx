import React from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import PageHeader from '@/components/Layout/PageHeader';
import Tag from '@/components/Tag';

import {tempRoutineList} from '@/data/tempData.js';
import ItemCard from '@/components/ItemCard';
import Button from '@/components/Button/index.js';

const exerciseFilters = [
    {
        label  : 'Category',
        id: 'exerciseType',
        options: ['Strength', 'Stretch']
    },
    {
        label  : 'Muscle Group',
        id: 'targetMuscle',
        options: ['Full Body', 'Biceps']
    }
]

function RoutinesList() {
    return (
        <>
            <PageHeader pageTitle="View Workout Routines" showBack={true} backTarget="/workout"/>

            <Section
                title="Featured Routines"
                tip="Take a look at the featured workout routines that are currently popular."
            >
                <ItemCard data={tempRoutineList[0]} baseLink="workout/routines"/>
                <ItemCard data={tempRoutineList[1]} baseLink="workout/routines"/>
                <ItemCard data={tempRoutineList[0]} baseLink="workout/routines"/>
                <ItemCard data={tempRoutineList[0]} baseLink="workout/routines"/>
            </Section>

            <Section
                title="All Routines"
                tip="View all our routines available made by not only use but also the community."
            >
                <Card>
                    <ItemSearch
                        filters={exerciseFilters}
                        data={tempRoutineList}
                        columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories', 'Length']}
                        rowFormat={(data) => <RoutineListRow data={data}/>}
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
            <p>{data.exerciseType}</p>
            <p>{data.targetMuscle}</p>
            <p>{data.equipment[0]}</p>
            <Tag tagTitle={data.level} color={data.level.toLowerCase()} size="large"/>
            <p>{((data.caloriesMax + data.caloriesMin) / 2).toFixed(0)} cal</p>
            <p><strong>{data.length}</strong> minutes</p>
        </>
    )
}

export default RoutinesList;

