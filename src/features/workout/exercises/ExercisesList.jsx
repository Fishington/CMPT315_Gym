import React from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import Tag from '@/components/Tag';
import PageHeader from '@/components/Layout/PageHeader';

import {tempExercisesList} from '@/data/tempData.js';

const exerciseFilters = [
    {
        label  : 'Category',
        id     : 'exerciseType',
        options: ['Strength', 'Stretch']
    },
    {
        label  : 'Muscle Group',
        id     : 'targetMuscle',
        options: ['Full Body', 'Biceps']
    },
    {
        label  : 'Equipment',
        id     : 'equipment',
        options: ['Dumbbells', 'Mat']
    }
]

function ExercisesList() {
    return (
        <>
            <PageHeader pageTitle="View Exercises" showBack={true} backTarget="/workout"/>

            <Section>
                <Card>
                    <ItemSearch
                        filters={exerciseFilters}
                        data={tempExercisesList}
                        columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories Burn']}
                        rowFormat={(data) => <ExerciseSearchRow data={data}/>}
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