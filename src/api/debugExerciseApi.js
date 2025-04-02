import { createMultiExercise } from './exerciseApi.js';
import { createMultiExerciseReplicaSet } from './exerciseApi.js';
// const newExercises = [
//     { name: 'Push Ups', description: 'Test Description 1', duration: 5, count: 10 },
//     { name: 'Pull Ups', description: 'Test Description 2', duration: 5, count: 10 },
//     { name: 'Squats', description: 'Test Description 3', duration: 5, count: 10 },
//     { name: 'Lunges', description: 'Test Description 4', duration: 5, count: 10 },
//     { name: 'Plank', description: 'Test Description 5', duration: 5, count: 10 },
//     { name: 'Crunches', description: 'Test Description 6', duration: 5, count: 10 },
//     // { name: '', description: 'Invalid Exercise', duration: -1, count: null } // Invalid exercise to test error handling
// ];

// createMultiExercise(newExercises)
//     .then((result) => {
//         if (result) {
//             console.log('All exercises created successfully:', result);
//         } else {
//             console.log('Failed to create exercises.');
//         }
//     })
//     .catch((error) => console.error('Unexpected error:', error));

const exampleExercises = [
    {
        name: 'Push-ups',
        category: 'Strength',
        duration: 10, // in minutes
        caloriesBurned: 50,
    },
    {
        name: 'Running',
        category: 'Cardio',
        duration: 30, // in minutes
        caloriesBurned: 300,
    },
    {
        name: 'Yoga',
        category: 'Flexibility',
        duration: 20, // in minutes
        caloriesBurned: 100,
    },
];

const createExercises = async () => {
    try {
        const result = await createMultiExerciseReplicaSet(exampleExercises);

        if (result) {
            console.log('Exercises created successfully:', result);
        } else {
            console.error('Failed to create exercises.');
        }
    } catch (error) {
        console.error('An error occurred while creating exercises:', error);
    }
};

createExercises();