const express = require('express');
const database = require('./connect.cjs');
const { ObjectId } = require('mongodb');

let routineRoutes = express.Router();

async function getNextSequence(db, sequenceName) {
    const sequenceDoc = await db.collection("counters").findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { value: 1 } },
        { returnDocument: "after", upsert: true }
    );

    if (!sequenceDoc || !sequenceDoc.value) {
        console.error("Error: Counter document not found or invalid");
    }

    return sequenceDoc.value;
}


// #1 - Retrieve All Routines
// GET https://localhost:3000/routines
routineRoutes.route("/routines").get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection("routines").find({}).toArray();

    if (data.length > 0) {
        response.json(data);
    } else {
        response.status(404).json({ message: "No routines found" });
    }
});

// #2 - Retrieve One Routine by ID
// GET https://localhost:3000/routines/:id
routineRoutes.route("/routines/:id").get(async (request, response) => {
    let db = database.getDb();

    try {
        const numericId = parseInt(request.params.id)
        let data = await db.collection("routines").findOne({ id: numericId })

        if (data) {
            response.json(data);
        } else {
            response.status(404).json({ message: "Routine not found" });
        }
    } catch (error) {
        response.status(400).json({ message: "Invalid routine ID format" });
    }
});

// #3 - Create a New Routine
// POST https://localhost:3000/routines
routineRoutes.route("/routines").post(async (request, response) => {
    let db = database.getDb();
    const nextId = await getNextSequence(db, "routineId");

    let newRoutine = {
        id: nextId,
        name: request.body.name,
        image: request.body.image || null,
        author: request.body.author,
        authorID: request.body.authorID,
        level: request.body.level,
        targetMuscle: request.body.targetMuscle,
        goal: request.body.goal,
        calories: request.body.calories || { min: 0, max: 0 },
        duration: request.body.duration,
        equipment: request.body.equipment || [],
        about: request.body.about,
        exerciseCount: request.body.exerciseCount || 0,
        exercises: {
            warmups: request.body.exercises?.warmups || {
                set: [],
                duration: 0,
                breakDuration: 0,
                calories: { min: 0, max: 0 },
            },
            exercises: request.body.exercises?.exercises || {
                set: [],
                duration: 0,
                calories: { min: 0, max: 0 },
            },
            stretches: request.body.exercises?.stretches || {
                set: [],
                duration: 0,
                calories: { min: 0, max: 0 },
            },
        },
        tags: request.body.tags || []
    };


    let data = await db.collection("routines").insertOne(newRoutine);
    response.status(201).json(data);
});

// #4 - Update an Existing Routine
// PUT https://localhost:3000/routines/:id
routineRoutes.route("/routines/:id").put(async (request, response) => {
    let db = database.getDb();

    let updatedRoutine = {
        $set: {
            name: request.body.name,
            image: request.body.image || null,
            author: request.body.author,
            authorID: request.body.authorID,
            level: request.body.level,
            targetMuscle: request.body.targetMuscle,
            goal: request.body.goal,
            calories: request.body.calories || { min: 0, max: 0 },
            duration: request.body.duration,
            equipment: request.body.equipment || [],
            about: request.body.about,
            exerciseCount: request.body.exerciseCount || 0,
            exercises: {
                warmups: request.body.exercises?.warmups || {
                    set: [],
                    duration: 0,
                    breakDuration: 0,
                    calories: { min: 0, max: 0 },
                },
                exercises: request.body.exercises?.exercises || {
                    set: [],
                    duration: 0,
                    calories: { min: 0, max: 0 },
                },
                stretches: request.body.exercises?.stretches || {
                    set: [],
                    duration: 0,
                    calories: { min: 0, max: 0 },
                },
            },
            tags: request.body.tags || []
        }
    };

    try {
        const numericId = parseInt(request.params.id)
        let data = await db.collection("routines").updateOne(
            { id: numericId },
            updatedRoutine
        );

        if (data.matchedCount === 0) {
            response.status(404).json({ message: "Routine not found" });
        } else {
            response.json(data);
        }
    } catch (error) {
        response.status(400).json({ message: "Invalid routine ID format" });
    }
});

// #5 - Delete a Routine
// DELETE https://localhost:3000/routines/:id
routineRoutes.route("/routines/:id").delete(async (request, response) => {
    let db = database.getDb();

    try {
        const numericId = parseInt(request.params.id)
        let data = await db.collection("routines").deleteOne({ id: numericId });

        if (data.deletedCount === 0) {
            response.status(404).json({ message: "Routine not found" });
        } else {
            response.json({ message: "Routine deleted successfully" });
        }
    } catch (error) {
        response.status(400).json({ message: "Invalid routine ID format" });
    }
});

module.exports = routineRoutes;
