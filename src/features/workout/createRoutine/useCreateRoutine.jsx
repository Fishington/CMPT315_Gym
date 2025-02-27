import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "@/context/AuthContext.jsx";
import {formatTimeToString} from "@/utils/formatter.js";
import MealPlanIcon from "@/components/Icons/MealPlanIcon/index.js";
import imageCompression from "browser-image-compression";
import {createRoutine} from "@/api/routinesApi.js";

export default function useCreateRoutine() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const {user} = useAuth();

    const [routine, setRoutine] = useState({
        id           : 0,
        name         : '',
        image        : null,
        author       : `${user.firstName} ${user.lastName}`,
        authorID     : `${user._id}`,
        level        : '',
        targetMuscle : '',
        goal         : '',
        calories     : {min: 0, max: 0},
        duration     : 0,
        equipment    : [],
        about        : '',
        exerciseCount: 0,
        exercises    : {
            warmups  : {
                set          : [],
                duration     : 0,
                breakDuration: 0,
                calories     : {min: 0, max: 0},
            },
            exercises: {
                set     : [],
                duration: 0,
                calories: {min: 0, max: 0},
            },
            stretches: {
                set     : [],
                duration: 0,
                calories: {min: 0, max: 0},
            },
        },
        tags         : []
    });

    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : `${routine.exerciseCount} Exercises`,
            subtitle: 'Total Exercises'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.calories.min} - ${routine.calories.max} Cal`,
            subtitle: 'Calories Burned'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${formatTimeToString(routine.duration)}`,
            subtitle: 'Duration'
        },
    ]

    // Form Validation
    const requiredFieldValidation = (value, fieldName, fieldID, errorList) => {
        if (!value)
            errorList[fieldID] = {message: `${fieldName} is required.`, error: true};
        else if (value.length < 3)
            errorList[fieldID] = {message: `${fieldName} must be at least 3 characters long.`, error: true};
        else
            delete errorList[fieldID];
    };

    const requiredRadio = (value, fieldName, fieldID, errorList) => {
        if (!value)
            errorList[fieldID] = {message: `${fieldName} is required.`, error: true};
        else
            delete errorList[fieldID];
    };

    const validation = () => {
        let newErrors = {...errors}

        requiredFieldValidation(routine.name, 'Routine name', 'name', newErrors)
        requiredFieldValidation(routine.about, 'About routine', 'about', newErrors)
        requiredFieldValidation(routine.goal, 'Routine goal', 'goal', newErrors)
        requiredRadio(routine.level, 'Routine difficulty', 'difficulty', newErrors)
        requiredFieldValidation(routine.targetMuscle, 'Target muscles', 'targetMuscle', newErrors)
        requiredFieldValidation(routine.targetMuscle, 'Exercise type', 'exerciseType', newErrors)

        console.log(newErrors)

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleImageUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        console.log("Original file size (bytes):", file.size);

        const options = {
            maxSizeMB       : 1,
            maxWidthOrHeight: 800,
            useWebWorker    : true,
        };

        try {
            const compressedFile = await imageCompression(file, options);
            console.log("Compressed file size (bytes):", compressedFile.size);

            const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
            console.log("Base64 string length:", base64.length);

            console.log("Base64:", base64);

            setRoutine(prev => ({...prev, image: base64}));
        } catch (error) {
            console.error("Error during image compression:", error);
        }
    }

    async function handleCreateRoutine(e) {
        e.preventDefault();

        if (!validation()) {
            console.log('Form not submitted: Invalid Fields');
            return;
        }

        try {
            const result = await createRoutine(routine);
            if (result) {
                console.log("Routine created successfully:", result, routine);
                navigate('/workout/routines');
            } else {
                console.error("Failed to create routine.");
            }
        } catch (error) {
            console.error("Error creating routine:", error);
        }
    }

    return {
        errors,
        routine,
        setRoutine,
        itemDetails,
        handleCreateRoutine,
        handleImageUpload
    }
}

