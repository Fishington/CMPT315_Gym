import React from 'react';
import { useParams } from "react-router-dom";

function ExercisesDetails() {
    const { name } = useParams();

    return (
        <div>
            <>
                <p>This page contains details about {name}</p>
            </>
        </div>
    );
}

export default ExercisesDetails;