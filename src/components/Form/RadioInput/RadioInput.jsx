import React, {createContext, useContext, useState} from 'react';

import './RadioInput.scss';

const RadioInputContext = createContext(null);

function RadioInput({onChange, options, label, error, errorText}) {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingChange = (value) => {
        setSelectedRating(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="radio-input">
            <label className="radio-input__label">{label}</label>

            <div className="radio-input__row" style={{gridTemplateColumns: `repeat(${options.length}, 1fr)`}}>
                {options.map((value) => (
                    <RadioInputContext.Provider key={value} value={{value, selectedRating, handleRatingChange}}>
                        <Radio/>
                    </RadioInputContext.Provider>
                ))}
                
                {error && <p className="text-input__status">{errorText}</p>}
            </div>
        </div>
    );
}

const Radio = () => {
    const {value, selectedRating, handleRatingChange} = useContext(RadioInputContext)

    return (
        <label
            key={value}
            className={`radio-input__container ${selectedRating === value ? 'radio-input__container--selected' : ''}`}
            htmlFor={`radio-${value}`}
        >
            <input
                type="radio"
                id={`radio-${value}`}
                name="rating"
                value={value}
                checked={selectedRating === value}
                onChange={() => handleRatingChange(value)}
                className="radio-input__radio"
            />

            <span className="radio-input__value">{value}</span>
        </label>
    )
}

export default RadioInput;
