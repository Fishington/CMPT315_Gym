const connect = require("./connect.cjs")
const cors = require('cors')
const express = require('express')
const users = require("./userRoutes.cjs")
const exercises = require("./exerciseRoutes.cjs")
const routines = require("./routinesRoutes.cjs")
const userData = require("./userDataRoutes.cjs")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(users)
app.use(exercises)
app.use(routines)
app.use(userData)

async function startServer() {
    try {
        // Connect to the database first
        await connect.connectToServer();

        // Start the server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();