import React from 'react';
import { useParams } from "react-router-dom";
import {slugToTitle} from '../../utils/formatter.js';

function ExercisesDetails() {
    const { name } = useParams();

    return (
        <div>
            <>
                <p>This page contains details about {slugToTitle(name)}</p>
            </>
        </div>
    );
}

export default ExercisesDetails;