import React, {useState} from 'react';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import DataList from '@/components/DataList';
import './Exercises.scss'
import {tempExercisesList} from '@/data/tempData.js';
import LevelTag from '@/components/LevelTag/index.js';
import DataRow from '@/components/DataRow/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import {useOutletContext} from 'react-router-dom';

function Exercises() {
    const {user} = useOutletContext();
    document.title = 'Exercises | HyperFit';
    
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <>
            <PageHeader
                user={user}
                pageTitle="View Exercises"
                showBack={true}
                backTarget='/workout'
            />
            
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
                                    <LevelTag level={exercise.level}/>
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