import React from 'react';

import Card from '@/components/Card';

function ExerciseAdditionalDetails({ exercise }) {
    const sections = [
        { title: 'Equipment', content: exercise.equipment },
        { title: 'Target Muscles', content: exercise.targetMuscle },
        { title: 'Secondary Muscles', content: exercise.secondaryMuscles },
        { title: 'Exercise Type', content: exercise.exerciseType }
    ];
    
    const renderSection = (title, content) => (
        <div className="card__section">
            <h3>{title}:</h3>
            
            {Array.isArray(content) ? (
                content.map((item) => <p key={item} className="exercise-details__indent">{item}</p>)
            ) : (
                <p className="exercise-details__indent">{content}</p>
            )}
            
        </div>
    );

    return (
        <Card>
            {sections.map(({ title, content }) => renderSection(title, content))}
            
            {exercise.exerciseType === 'Strength' && (
                <>
                    {renderSection('Force Type', exercise.forceType)}
                    {renderSection('Mechanics', exercise.mechanics)}
                </>
            )}
        </Card>
    );
}

export default ExerciseAdditionalDetails;
