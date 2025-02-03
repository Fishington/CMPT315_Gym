import React, {useEffect} from 'react';
import Button from '@/components/Button/index.js';
import {useOutletContext} from 'react-router-dom';

function Workout() {
    const { setBackTarget } = useOutletContext();

    useEffect(() => {
        setBackTarget({showBack: false})
    }, [setBackTarget]);
    
    return (
        <>
            <Button color='blue' size='full-width' href="/workout/exercises">
                View Exercises 
            </Button>

            <Button color='blue' size='full-width' href="/workout/routines">
                View Workout Routines
            </Button>
        </>
    );
}

export default Workout;