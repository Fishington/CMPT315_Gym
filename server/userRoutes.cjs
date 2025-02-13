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
    let db = database.getDb()
    // Wait until the data is done being collected,
    // just in case it is a lot of data
    let data = await db.collection("users").find({}).toArray()

    if (data.length > 0) {
        // MongoDB found our data and has it in an array
        // Think of thi as a return statement 
        response.json(data)
    }
    else {
        throw new Error("No data found")
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
    let db = database.getDb()
    let mobgoObject = {
        firstname: request.body.firstname,
        lastname:request.body.lastname,
        email: request.body.email,
        password: request.body.password,

    }
    // Wait until the data is done being collected,
    // just in case it is a lot of data
    let data = await db.collection("users").insertOne(mobgoObject)
    response.json(data)

})

//#4 - Update One
userRoutes.route("/users/:id").put(async (request, response) => {
    let db = database.getDb()
    let mobgoObject = {
        $set: {   
            firstname: request.body.firstname,
            lastname:request.body.lastname,
            email: request.body.email,
            password: request.body.password,
        }
    }
    // Wait until the data is done being collected,
    // just in case it is a lot of data
    let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)},(mobgoObject))
    response.json(data)

})

//#5 - Delete One
userRoutes.route("/users/:id").delete(async (request, response) => {
    let db = database.getDb()
    // Wait until the data is done being collected,
    // just in case it is a lot of data
    let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})

module.exports = userRoutes