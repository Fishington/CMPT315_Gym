export const tempRoutineList = [{
    id          : 1,
    name        : 'Dumbbell Only Workout For Beginners',
    image       : '/images/exercise-button.jpg',
    author      : 'HyperFit-Team',
    level       : 'Beginner',
    targetMuscle: 'Full Body',
    exerciseType: 'Strength',
    goal        : 'Muscle Gain',
    caloriesMin : 110,
    caloriesMax : 140,
    length      : '35:00',
    count       : 10,
    equipment   : ['Dumbbells', 'Dumbbells', 'Dumbbells'],
    about       : 'This Dumbbell Only Workout for Beginners is designed to introduce newcomers to strength training' +
        ' using minimal equipment. It focuses on foundational movements that improve muscle strength, balance, and endurance, all while promoting proper form and preventing injury. The routine combines exercises targeting multiple muscle groups, ensuring a well-rounded and effective workout in a short amount of time. This workout is perfect for those new to fitness or transitioning to strength training and can be performed at home or in the gym.',
    exercises   : {
        warmups  : {
            duration: '2:00',
            set     : [
                {workoutId: 11, reps: null, sets: null},
                {workoutId: 21, reps: null, sets: null},
            ],
        },
        exercises: {
            duration: '30:00',
            set     : [
                {workoutId: 23, reps: 10, sets: 3},
                {workoutId: 13, reps: 10, sets: 3},
                {workoutId: 16, reps: 10, sets: 3},
                {workoutId: 14, reps: 10, sets: 3},
            ],
        },
        stretches: {
            duration: '3:00',
            set     : [
                {workoutId: 17, reps: null, sets: null},
                {workoutId: 18, reps: null, sets: null},
                {workoutId: 19, reps: null, sets: null},

            ],
        },
    },
    tags        : ['Muscle Gain', 'Dumbbells', 'Full Body']
},
    {
        id          : 2,
        name        : 'Dumbbell Only Workout For Intermediates',
        image       : '/images/exercise-button.jpg',
        author      : 'HyperFit-Team',
        level       : 'Intermediate',
        targetMuscle: 'Full Body',
        exerciseType: 'Strength',
        goal        : 'Muscle Gain',
        caloriesMin : 110,
        caloriesMax : 140,
        length      : '50:00',
        count       : 6,
        equipment   : ['Dumbbells', 'Dumbbells', 'Dumbbells'],
        about       : 'This Dumbbell Only Workout for Beginners is designed to introduce newcomers to strength training' +
            ' using minimal equipment. It focuses on foundational movements that improve muscle strength, balance, and endurance, all while promoting proper form and preventing injury. The routine combines exercises targeting multiple muscle groups, ensuring a well-rounded and effective workout in a short amount of time. This workout is perfect for those new to fitness or transitioning to strength training and can be performed at home or in the gym.',
        exercises   : {
            warmups  : {
                duration: '5:00',
                set     : [
                    {workoutId: 12, reps: null, sets: null},
                    {workoutId: 4, reps: null, sets: null},
                ],
            },
            exercises: {
                duration: '40:00',
                set     : [
                    {workoutId: 16, reps: 10, sets: 3},
                    {workoutId: 4, reps: 10, sets: 3},
                    {workoutId: 8, reps: 10, sets: 3},
                    {workoutId: 11, reps: 10, sets: 3},
                ],
            },
            stretches: {
                duration: '0:00',
                set     : []
            },
        },
        tags        : ['Muscle Gain', 'Dumbbells', 'Full Body']
    },
]