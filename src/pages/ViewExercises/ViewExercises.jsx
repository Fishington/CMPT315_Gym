import React, {useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import {tempExercisesList} from '@/data/tempData';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import './ViewExercises.scss'

function ViewExercises() {
    const {setBackTarget} = useOutletContext();

    useEffect(() => {
        setBackTarget('workout')
    }, [setBackTarget]);

    return (
        <>
            <Section>
                <Card>
                    <div>
                        <h3>Search Bar</h3>
                    </div>

                    <div>
                        <ul>
                            {tempExercisesList.map((exercise) => (
                                <li className="item-search" key={exercise.id}>

                                    <Link className="item-search__container" to={`${exercise.id}`} >
                                        <div className='item-search__item-name'>
                                            <img className='item-search__image' src={exercise.img} alt=""/>
                                            {exercise.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </Section>
        </>
    );
}

export default ViewExercises;