import React, {useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import {tempRoutineList} from '@/data/tempData.js';

function ViewWorkoutRoutines() {
    const {setBackTarget} = useOutletContext();

    useEffect(() => {
        setBackTarget('/workout')
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
                            {tempRoutineList.map((routine) => (
                                <li className="item-search" key={routine.id}>

                                    <Link className="item-search__container" to={`${routine.id}`}>
                                        <div className="item-search__item-name">
                                            <img className="item-search__image" src={routine.image} alt=""/>
                                            {routine.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </Section>

            {/*<Button color='blue' size='full-width' href={`/workout/routines/create`}>*/}
            {/*    Create Routine*/}
            {/*</Button>*/}
        </>
    );
}

export default ViewWorkoutRoutines;