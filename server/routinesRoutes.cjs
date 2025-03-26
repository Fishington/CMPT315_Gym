import {validateRoutine} from './validation'
const express = require('express');
const database = require('./connect.cjs');
const { ObjectId } = require('mongodb');

let routineRoutes = express.Router();

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
    const db = database.getDb();
    const client = db.client; // Need access to the raw client
    const session = client.startSession();

    const routine = request.body;

    const validationErrors = validateRoutine(routine);
    if (validationErrors.length > 0) {
        return response.status(400).json({ message: "Validation failed", errors: validationErrors });
    }

    try {
        let result;

        await session.withTransaction(async () => {
            const routinesCollection = db.collection("routines");
            const countersCollection = db.collection("counters");

            // Get next routine ID
            const counterUpdate = await countersCollection.findOneAndUpdate(
                { _id: "routineId" },
                { $inc: { value: 1 } },
                { returnDocument: "after", upsert: true, session }
            );

            const nextId = counterUpdate.value;

            const newRoutine = {
                id: nextId,
                name: routine.name,
                image: routine.image || null,
                author: routine.author,
                authorID: routine.authorID,
                level: routine.level,
                targetMuscle: routine.targetMuscle,
                goal: routine.goal,
                calories: routine.calories || { min: 0, max: 0 },
                duration: routine.duration,
                equipment: routine.equipment || [],
                about: routine.about,
                exerciseCount: routine.exerciseCount || 0,
                exercises: routine.exercises || {
                    warmups: { set: [], duration: 0, breakDuration: 0, calories: { min: 0, max: 0 } },
                    exercises: { set: [], duration: 0, calories: { min: 0, max: 0 } },
                    stretches: { set: [], duration: 0, calories: { min: 0, max: 0 } },
                },
                tags: routine.tags || []
            };

            result = await routinesCollection.insertOne(newRoutine, { session });
        });

        response.status(201).json({ message: "Routine created successfully", result });

    } catch (error) {
        console.error("Error creating routine:", error);
        response.status(500).json({ message: "Server error", error: error.message });
    } finally {
        await session.endSession();
    }
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
        const numericId = parseInt(request.params.id);
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