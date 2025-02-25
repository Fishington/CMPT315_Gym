import React from 'react';

import Card from '@/components/Card';

function ExerciseAdditionalDetails({exercise}) {
    const sections = [
        {title: 'Equipment', content: exercise.equipment},
        {title: 'Target Muscles', content: exercise.targetMuscle},
        {title: 'Secondary Muscles', content: exercise.secondaryMuscles},
        {title: 'Exercise Type', content: exercise.exerciseType},
        {title: 'Force Type', content: exercise.forceType},
        {title: 'Mechanics', content: exercise.mechanics}
    ];
    return (
        <Card>
            {sections.map(({title, content}) => (
                <div key={title} className="card__section">
                    <h3>{title}:</h3>

                    {Array.isArray(content) ?
                        content.map((item) =>
                            <p key={item} className="exercise-details__indent">{item}</p>
                        ) : (
                            <p className="exercise-details__indent">{content}</p>
                        )}
                </div>
            ))}
        </Card>
    );
}

export default ExerciseAdditionalDetails;
