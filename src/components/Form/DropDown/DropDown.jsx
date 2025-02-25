import {useEffect, useRef} from "react";

import Button from "@/components/Button/index.js";

import './DropDown.scss'

export default function DropDown({children, color = 'blue', size = 'medium', label, active, onClick}) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClick();
            }
        }

        if (active) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [active, onClick]);

    return (
        <div className="drop-down" ref={dropdownRef}>
            <Button color={color} size={size} onClick={onClick}>
                {label}
            </Button>

            <div
                className="drop-down__modal"
                style={{display: active ? 'grid' : 'none'}}
            >
                {children}
            </div>
        </div>
    );
}