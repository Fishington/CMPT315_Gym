import './CheckBoxGroup.scss'

export default function CheckBoxGroup({groupName, options, handleCheckBoxChange, variant}) {

    return (
        <div className={variant}>
            {options.map((option) => (
                <CheckBox
                    key={option}
                    label={option}
                    id={groupName + option}
                    onCheckBoxChange={(isChecked) => handleCheckBoxChange(groupName, option, isChecked)}
                />
            ))}
        </div>
    );
}

function CheckBox({label, id, onCheckBoxChange}) {
    function handleChange(event) {
        onCheckBoxChange(event.target.checked);
    }

    return (
        <div className="flex gap-1">
            <input type="checkbox" id={id} name={id} value={label} onChange={handleChange}/>
            <label className="check-box-group__label" htmlFor={id}>{label}</label>
        </div>
    );
}