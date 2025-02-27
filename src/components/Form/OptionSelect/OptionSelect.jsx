import './OptionSelect.scss';

export default function OptionSelect({id, name, label, error, errorText, variant, value, onChange, options, placeholder}) {
    return (
        <div className="option-select">
            {label &&
                <label className="option-select__label" htmlFor={id}>
                    {label}
                </label>
            }

            <select
                className={`option-select__field ${error ? 'option-select__field--error' : ''} ${variant ? variant : ''}`}
                id={id}
                name={name}
                value={value || ''}
                onChange={onChange}
            >
                <option className='option-select' value="" disabled={!!value}>{placeholder}</option>

                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {error && <p className="option-select__status">{errorText}</p>}
        </div>
    );
}