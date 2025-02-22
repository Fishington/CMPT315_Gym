import DropDown from "@/components/Form/DropDown/index.js";
import CheckBoxGroup from "@/components/Form/CheckBoxGroup/index.js";
import {useState} from "react";
import {useItemSearch} from "@/context/ItemSearchContext.jsx";

export default function SearchFilters({filters}) {
    const {handleCheckBoxChange} = useItemSearch();
    const [activeDropdown, setActiveDropdown] = useState('');

    function handleOpenDropDown(label) {
        if (activeDropdown === label) {
            setActiveDropdown('')
            return
        }
        setActiveDropdown(label)
    }

    return (
        <div className="flex flex-justify-items gap-1">
            <h3>Filters:</h3>

            {filters.map((filter) => (
                <DropDown
                    key={filter.label}
                    color="blue"
                    size="medium"
                    label={filter.label}
                    active={activeDropdown === filter.label}
                    onClick={() => handleOpenDropDown(filter.label)}
                >
                    <CheckBoxGroup
                        groupName={filter.id}
                        options={filter.options}
                        handleCheckBoxChange={handleCheckBoxChange}
                        variant="grid gap-075"
                    />
                </DropDown>
            ))}
        </div>
    );
}