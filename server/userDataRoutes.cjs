const express = require('express');
const database = require('./connect.cjs');
const { ObjectId } = require('mongodb');

let userDataRoutes = express.Router();

/**
 * Retrieve all workout data for a specific user.
 * GET https://localhost:3000/userData/:userID
 */
userDataRoutes.route("/userData/:userID").get(async (request, response) => {
    let db = database.getDb();
    let userID = request.params.userID;

    try {
        let objectId = new ObjectId(userID);

        // Find user workout data
        let userData = await db.collection("userData").findOne({ userID: objectId });

        if (userData) {
            response.json(userData);
        } else {
            response.status(404).json({ message: "No workout data found for this user" });
        }
    } catch (error) {
        console.error("Error retrieving user workout data:", error);
        response.status(500).json({ message: "Server error", error: error.message });
    }
});

/**
 * Add an exercise entry for a user on a specific date.
 * POST https://localhost:3000/userData
 */
userDataRoutes.route("/userData").post(async (request, response) => {
    const db = database.getDb();
    const client = database.getClient();
    const session = client.startSession();

    try {
        const userID = new ObjectId(request.body.userID);
        const date = request.body.date;
        const exerciseEntry = {
            exerciseID: request.body.exerciseID,
            duration: request.body.duration,
            calories: request.body.calories,
            otherInfo: request.body.otherInfo || {}
        };

        await session.withTransaction(async () => {
            const userDataCollection = db.collection("userData");

            const existing = await userDataCollection.findOne({ userID }, { session });

            if (existing) {
                // Update existing user document
                const update = existing[date]
                    ? { $push: { [date]: exerciseEntry } }
                    : { $set: { [date]: [exerciseEntry] } };

                await userDataCollection.updateOne({ userID }, update, { session });
            } else {
                // Insert new user workout document
                const newUserData = {
                    userID,
                    [date]: [exerciseEntry]
                };

                await userDataCollection.insertOne(newUserData, { session });
            }
        });

        response.status(200).json({ message: "Exercise entry added successfully" });

    } catch (error) {
        console.error("Transaction error while adding exercise entry:", error);
        response.status(500).json({ message: "Server error", error: error.message });
    } finally {
        await session.endSession();
    }
});

module.exports = userDataRoutes;