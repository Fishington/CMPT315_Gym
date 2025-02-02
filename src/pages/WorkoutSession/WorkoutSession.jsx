import React, {useEffect} from 'react'; 
import {useOutletContext, useParams} from 'react-router-dom';
import Button from '../../components/Button/index.js';
import {slugToTitle, toSlug} from '../../utils/formatter.js';

function WorkoutSession() {
    const { name } = useParams();
    const {setPageTitle} = useOutletContext();

    useEffect(() => {
        setPageTitle('Workout Session')
    }, [setPageTitle]);
    
    return (
        <>
            <p>Workout Session of {slugToTitle(name)}</p>

            <Button color='blue' size='full-width' href={`/workout/summary/${toSlug(name)}`}>
                Routine Summary
            </Button>
        </>
    );
}

export default WorkoutSession;