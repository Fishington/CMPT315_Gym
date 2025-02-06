export const tempExercisesList = [{
    id              : 1,
    name            : 'Standing Hammer Curl',
    img             : '/images/standing-hammer-curl.webp',
    video           : '/video/temp-video.mp4',
    level           : 'Beginner',
    targetMuscle    : 'Biceps',
    secondaryMuscles: [
        'Forearms'
    ],
    exerciseType    : 'Strength',
    forceType       : 'Pull',
    mechanics       : 'Isolation',
    stretchFocus    : 'arm',
    stretchBothSide : true,
    stretchPerSide  : 30,
    caloriesMin     : 10,
    caloriesMax     : 20,
    timePerSet      : '2:30',
    equipments      : [
        {
            equipment: 'Dumbbells',
            required : 1
        },
        {
            equipment: 'Resistance Bands',
            required : 0
        },
        {
            equipment: 'Wrist Straps',
            required : 0
        },
    ],
    about           : 'The Standing Hammer Curl is a strength training exercise primarily targeting the biceps brachii and' +
        ' brachialis, with secondary activation of the forearms. This exercise involves lifting weights with a neutral grip, making it an effective and joint-friendly option for building arm strength and size. It’s suitable for beginners and advanced lifters alike, as the intensity can be adjusted by varying the weight or repetitions.',
    instructions    : [
        'Grab a pair of dumbbells and stand up with the dumbbells by your sides.',
        'With a neutral grip, bend your arms slightly to keep the tension on the biceps.',
        'With your palms still facing your body, slowly curl the dumbbells up as far as possible.',
        'Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting' +
        ' position.',
        'Repeat for desired reps.'
    ],
    tips            : [
        {
            header: 'Maintain Proper Posture',
            body  : 'Grab a pair of dumbbells and stand up with the dumbbells by your sides.'
        },
        {
            header: 'Controlled Movements',
            body  : 'Avoid swinging your arms or using momentum; focus on slow, controlled reps to fully engage your biceps.'
        },
        {
            header: 'Grip Adjustments',
            body  : 'Use a neutral grip (palms facing each other) to reduce strain on the wrists and emphasize the brachialis muscle.'
        },
        {
            header: 'Avoid Overloading',
            body  : 'Start with a manageable weight to maintain good form and gradually increase as you build strength.'
        },
        {
            header: 'Elbow Positioning',
            body  : 'Keep your elbows close to your torso and avoid flaring them out to ensure proper muscle isolation.'
        }
    ]
},
    {
        id              : 2,
        name            : 'Not Standing Hammer Curl',
        img             : '/images/standing-hammer-curl.webp',
        video           : '/video/temp-video.mp4',
        level           : 'Beginner',
        targetMuscle    : 'Biceps',
        secondaryMuscles: [
            'Forearms'
        ],
        exerciseType    : 'Strength',
        forceType       : 'Pull',
        mechanics       : 'Isolation',
        stretchFocus    : 'arm',
        stretchBothSide : true,
        stretchPerSide  : 30,
        caloriesMin     : 10,
        caloriesMax     : 20,
        timePerSet      : '2:30',
        equipments      : [
            {
                equipment: 'Dumbbells',
                required : 1
            },
            {
                equipment: 'Resistance Bands',
                required : 0
            },
            {
                equipment: 'Wrist Straps',
                required : 0
            },
        ],
        about           : 'The Standing Hammer Curl is a strength training exercise primarily targeting the biceps brachii and' +
            ' brachialis, with secondary activation of the forearms. This exercise involves lifting weights with a neutral grip, making it an effective and joint-friendly option for building arm strength and size. It’s suitable for beginners and advanced lifters alike, as the intensity can be adjusted by varying the weight or repetitions.',
        instructions    : [
            'Grab a pair of dumbbells and stand up with the dumbbells by your sides.',
            'With a neutral grip, bend your arms slightly to keep the tension on the biceps.',
            'With your palms still facing your body, slowly curl the dumbbells up as far as possible.',
            'Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting' +
            ' position.',
            'Repeat for desired reps.'
        ],
        tips            : [
            {
                header: 'Maintain Proper Posture',
                body  : 'Grab a pair of dumbbells and stand up with the dumbbells by your sides.'
            },
            {
                header: 'Controlled Movements',
                body  : 'Avoid swinging your arms or using momentum; focus on slow, controlled reps to fully engage your biceps.'
            },
            {
                header: 'Grip Adjustments',
                body  : 'Use a neutral grip (palms facing each other) to reduce strain on the wrists and emphasize the brachialis muscle.'
            },
            {
                header: 'Avoid Overloading',
                body  : 'Start with a manageable weight to maintain good form and gradually increase as you build strength.'
            },
            {
                header: 'Elbow Positioning',
                body  : 'Keep your elbows close to your torso and avoid flaring them out to ensure proper muscle isolation.'
            }
        ]
    },
]

export const tempRoutineList = [{
    id          : 1,
    name        : 'Dumbbell Only Workout For Beginners',
    image       : '/images/exercise-button.jpg',
    author      : 'HyperFit-Team',
    level       : 'Beginner',
    targetMuscle: 'Full Body',
    exerciseType: 'Strength',
    goal        : 'Muscle Gain',
    about       : 'This Dumbbell Only Workout for Beginners is designed to introduce newcomers to strength training' +
        ' using minimal equipment. It focuses on foundational movements that improve muscle strength, balance, and endurance, all while promoting proper form and preventing injury. The routine combines exercises targeting multiple muscle groups, ensuring a well-rounded and effective workout in a short amount of time. This workout is perfect for those new to fitness or transitioning to strength training and can be performed at home or in the gym.',
    benefits    : [
        'Improves overall strength and endurance.',
        'Builds muscle balance and coordination.',
        'Helps with fat loss by increasing metabolism.',
        'Requires minimal equipment, perfect for home workouts.'
    ],
    exercises   : {
        warmups  : [
            {workoutId: 1, reps: null, sets: null},
            {workoutId: 1, reps: null, sets: null},
        ],
        exercises: [
            {workoutId: 1, reps: 10, sets: 3},
            {workoutId: 1, reps: 10, sets: 3},
            {workoutId: 1, reps: 10, sets: 3},
            {workoutId: 1, reps: 10, sets: 3},
        ],
        stretches: [
            {workoutId: 1, reps: null, sets: null},
            {workoutId: 1, reps: null, sets: null},
            {workoutId: 1, reps: null, sets: null},
        ]
    }
},
    {
        id          : 2,
        name        : 'Dumbbell Only Workout For Intermediates',
        image       : '/images/exercise-button.jpg',
        author      : 'HyperFit-Team',
        level       : 'Beginner',
        targetMuscle: 'Full Body',
        exerciseType: 'Strength',
        goal        : 'Muscle Gain',
        about       : 'This Dumbbell Only Workout for Beginners is designed to introduce newcomers to strength training' +
            ' using minimal equipment. It focuses on foundational movements that improve muscle strength, balance, and endurance, all while promoting proper form and preventing injury. The routine combines exercises targeting multiple muscle groups, ensuring a well-rounded and effective workout in a short amount of time. This workout is perfect for those new to fitness or transitioning to strength training and can be performed at home or in the gym.',
        benefits    : [
            'Improves overall strength and endurance.',
            'Builds muscle balance and coordination.',
            'Helps with fat loss by increasing metabolism.',
            'Requires minimal equipment, perfect for home workouts.'
        ],
        exercises   : {
            warmups  : [
                {workoutId: 1, reps: null, sets: null},
                {workoutId: 1, reps: null, sets: null},
            ],
            exercises: [
                {workoutId: 1, reps: 10, sets: 3},
                {workoutId: 1, reps: 10, sets: 3},
                {workoutId: 1, reps: 10, sets: 3},
                {workoutId: 1, reps: 10, sets: 3},
            ],
            stretches: [
                {workoutId: 1, reps: null, sets: null},
                {workoutId: 1, reps: null, sets: null},
                {workoutId: 1, reps: null, sets: null},
            ]
        }
    },
]