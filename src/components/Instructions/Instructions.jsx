import './Instructions.scss'
import React from 'react';

export default function Instructions({steps}) {
    return (
        <div className="grid gap-05">
            <h3>Instructions:</h3>
            
            <div className="instructions__details">
                {steps.map((step, index) => (
                    <div key={index} className="instructions__step">
                        <h3 className="instructions__step-index">{index + 1}</h3>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}