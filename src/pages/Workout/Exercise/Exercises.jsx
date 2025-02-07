import React, {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import ItemSearch from '@/components/ItemSearch';
import DataList from '@/components/DataList';
import './Exercises.scss'
import {tempExercisesList} from '@/data/tempData.js';
import LevelTag from '@/components/LevelTag/index.js';
import DataRow from '@/components/DataRow/index.js';

function Exercises() {
    const {setBackTarget} = useOutletContext();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setBackTarget('workout')
    }, [setBackTarget]);

    return (
        <>
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