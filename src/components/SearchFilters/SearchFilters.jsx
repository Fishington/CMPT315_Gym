import {useState} from "react";
import { useDispatch } from 'react-redux';
import { updateFilter } from '@/redux/actions/itemSearchActions';
import DropDown from "@/components/Form/DropDown/index.js";
import CheckBoxGroup from "@/components/Form/CheckBoxGroup/index.js";
import './SearchFilters.scss'

export default function SearchFilters({filters}) {
    const dispatch = useDispatch();
    const [activeDropdown, setActiveDropdown] = useState('');

    const handleCheckBoxChange = (groupName, option, isChecked) => {
        dispatch(updateFilter(groupName, option, isChecked));
    };

    function handleOpenDropDown(label) {
        if (activeDropdown === label) {
            setActiveDropdown('')
            return
        }
        setActiveDropdown(label)
    }

    return (
        <div className="search-filters">
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
                        variant="search-filters__check-box-group"
                    />
                </DropDown>
            ))}
        </div>
    );
}