import React from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import Tag from '@/components/Tag';
import PageHeader from '@/components/Layout/PageHeader';

import {tempExercisesList} from '@/data/tempData.js';

function ExercisesList() {
    return (
        <>
            <PageHeader pageTitle="View Exercises" showBack={true} backTarget="/workout"/>

            <Section>
                <Card>
                    <ItemSearch data={tempExercisesList}
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