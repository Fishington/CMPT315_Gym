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
    let db = database.getDb();

    try {
        let userID = new ObjectId(request.body.userID);
        let exerciseEntry = {
            exerciseID: request.body.exerciseID,
            duration: request.body.duration,
            calories: request.body.calories,
            otherInfo: request.body.otherInfo || {} // ADD OTHER SET DATA HERE
        };
        let date = request.body.date; // Format: YYYY-MM-DD

        // Check if user data exists
        let userData = await db.collection("userData").findOne({ userID });

        if (userData) {
            // If date exists, push new exercise, otherwise create the date
            let update = {};
            if (userData[date]) {
                update = { $push: { [`${date}`]: exerciseEntry } };
            } else {
                update = { $set: { [`${date}`]: [exerciseEntry] } };
            }

            await db.collection("userData").updateOne({ userID }, update);
        } else {
            // Create a new user entry if none exists
            let newUserData = {
                userID: userID,
                [date]: [exerciseEntry]
            };
            await db.collection("userData").insertOne(newUserData);
        }

        response.json({ message: "Exercise entry added successfully" });

    } catch (error) {
        console.error("Error adding exercise entry:", error);
        response.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = userDataRoutes;
