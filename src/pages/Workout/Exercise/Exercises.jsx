import React, {useState} from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import DataList from '@/components/DataList';
import Tag from '@/components/Tag';
import DataRow from '@/components/DataRow';
import PageHeader from '@/components/Layout/PageHeader';

import {tempExercisesList} from '@/data/tempData.js';

function Exercises() {
    document.title = 'Exercises | HyperFit';
    
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
                        <DataList
                            data={tempExercisesList}
                            columns={['Category', 'Muscle Group', 'Equipment', 'Difficulty', 'Calories Per Rep']}
                        >
                            {tempExercisesList.map((exercise) => (
                                <DataRow data={exercise} key={exercise.id} columnsNum={5}>
                                    <p>{exercise.exerciseType}</p>
                                    <p>{exercise.targetMuscle}</p>
                                    <p>{exercise.equipment[0]}</p>
                                    <Tag tagTitle={exercise.level}/>
                                    <p>{((exercise.caloriesMax + exercise.caloriesMin) / 2).toFixed(0)} cal</p>
                                </DataRow>
                            ))}
                        </DataList>
                    </ItemSearch>
                </Card>
            </Section>
        </>
    );
}

export default Exercises;