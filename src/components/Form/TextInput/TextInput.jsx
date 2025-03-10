import './TextInput.scss';

export default function TextInput({id, type, variant, label, error, errorText, value, onChange}) {
    return (
        <div className="text-input">
            {label &&
                <label className="text-input__label" htmlFor={id}>
                    {label}
                </label>
            }

            <input
                className={'text-input__field ' + (error ? ('text-input__field--error') : '') + ` ${variant ? variant : ''}`}
                id={id}
                type={type}
                value={value}
                onChange={onChange}/>

            {error && <p className="text-input__status">{errorText}</p>}
        </div>
    );
}