import React, {useState} from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import ItemSearchList from '@/components/ItemSearch/ItemSearchList';
import ItemSearchRow from '@/components/ItemSearch/ItemSearchRow';
import Tag from '@/components/Tag';
import PageHeader from '@/components/Layout/PageHeader';

import {tempExercisesList} from '@/data/tempData.js';

function Exercises() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <PageHeader pageTitle="View Exercises" showBack={true} backTarget='/workout'/>
            
            <Section>
                <Card>
                    <ItemSearch
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    >
                        <ItemSearchList
                            data={tempExercisesList}
                            columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories Per Rep']}
                        >
                            {tempExercisesList.map((exercise) => (
                                <ItemSearchRow data={exercise} key={exercise.id} columnsNum={5}>
                                    <p>{exercise.exerciseType}</p>
                                    <p>{exercise.targetMuscle}</p>
                                    <p>{exercise.equipment[0]}</p>
                                    <Tag tagTitle={exercise.level} color={exercise.level.toLowerCase()} size="large"/>
                                    <p>{((exercise.caloriesMax + exercise.caloriesMin) / 2).toFixed(0)} cal</p>
                                </ItemSearchRow>
                            ))}
                        </ItemSearchList>
                    </ItemSearch>
                </Card>
            </Section>
        </>
    );
}

export default Exercises;