const express = require('express')
const database = require('./connect.cjs')
const ObjectId = require('mongodb').ObjectId


let userRoutes = express.Router() 

// .get = Recriving
// .post = Sending
// .put = update

//#1 - Retrieve All
//https://localhost:3000/user
userRoutes.route("/users").get(async (request, response) => {
    try {
        let db = database.getDb();
        let data = await db.collection("users").find({}).toArray()

        if (data.length > 0) {
            response.json(data)
        } else {
            response.status(404).json({ message: "No users found" });
        }
    } catch (error) {
        console.error("Error retrieving users:", error);
        response.status(500).json({ message: "Server error", error: error.message });
    }
})

//#2 - Retrieve One
//https://localhost:3000/user/12345
userRoutes.route("/users/:id").get(async (request, response) => {
    let db = database.getDb()
    // Wait until the data is done being collected,
    // just in case it is a lot of data
    let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})

    if (Object.keys(data).length > 0) { 
        response.json(data)
    }
    else {
        throw new Error("No data found")
    }
})

//#3 - Create One
userRoutes.route("/users").post(async (request, response) => {
    const db = database.getDb();
    const client = database.getClient();
    const session = client.startSession();

    const userObj = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
    };

    try {
        let result;
        await session.withTransaction(async () => {
            result = await db.collection("users").insertOne(userObj, { session });
        });

        response.status(201).json({ message: "User created", result });
    } catch (error) {
        console.error("Transaction error:", error);
        response.status(500).json({ message: "Failed to create user", error: error.message });
    } finally {
        await session.endSession();
    }
});

//#4 - Update One
userRoutes.route("/users/:id").put(async (request, response) => {
    const { db, client } = database.getDb();
    const session = client.startSession();

    const updateObj = {
        $set: {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: request.body.password,
        }
    };

    try {
        let result;
        await session.withTransaction(async () => {
            result = await db.collection("users").updateOne(
                { _id: new ObjectId(request.params.id) },
                updateObj,
                { session }
            );
        });

        if (result.matchedCount === 0) {
            response.status(404).json({ message: "User not found" });
        } else {
            response.json({ message: "User updated", result });
        }
    } catch (error) {
        console.error("Transaction error:", error);
        response.status(500).json({ message: "Failed to update user", error: error.message });
    } finally {
        await session.endSession();
    }
});

//#5 - Delete One
userRoutes.route("/users/:id").delete(async (request, response) => {
    const { db, client } = database.getDb();
    const session = client.startSession();

    try {
        let result;
        await session.withTransaction(async () => {
            result = await db.collection("users").deleteOne(
                { _id: new ObjectId(request.params.id) },
                { session }
            );
        });

        if (result.deletedCount === 0) {
            response.status(404).json({ message: "User not found" });
        } else {
            response.json({ message: "User deleted", result });
        }
    } catch (error) {
        console.error("Transaction error:", error);
        response.status(500).json({ message: "Failed to delete user", error: error.message });
    } finally {
        await session.endSession();
    }
});

module.exports = userRoutes