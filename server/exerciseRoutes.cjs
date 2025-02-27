const express = require('express')
const database = require('./connect.cjs')

let exerciseRoutes = express.Router()

// #1 - Retrieve All Exercises
// GET https://localhost:3000/exercises
exerciseRoutes.route("/exercises").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("exercises").find({}).toArray()

    if (data.length > 0) {
        response.json(data)
    } else {
        response.status(404).json({ message: "No exercises found" })
    }
})

// #2 - Retrieve One Exercise by ID
// GET https://localhost:3000/exercises/:id
exerciseRoutes.route("/exercises/:id").get(async (request, response) => {
    let db = database.getDb()
    try {
        const numericId = parseInt(request.params.id)
        let data = await db.collection("exercises").findOne({ id: numericId })

        if (data) {
            response.json(data)
        } else {
            response.status(404).json({ message: "Exercise not found" })
        }
    } catch (error) {
        console.error("Error retrieving exercise:", error)
        response.status(500).json({ message: "Server error", error: error.message })
    }
})

module.exports = exerciseRoutes;