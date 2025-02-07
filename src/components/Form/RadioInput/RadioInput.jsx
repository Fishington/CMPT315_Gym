import React, {useState} from 'react';
import './RadioInput.scss';

function RadioInput({ onChange, options, label, required }) {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingChange = (value) => {
        setSelectedRating(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className='radio-input'>
            <label className="radio-input__label">{label}</label>

            <div
                className="radio-input__row"
                style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}
            >
                {options.map((value) => (
                    <label
                        key={value}
                        className={`radio-input__container ${
                            selectedRating === value ? 'radio-input__container--selected' : ''
                        }`}
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
                            required={required}
                        />
                        <span className="radio-input__value">{value}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default RadioInput;
