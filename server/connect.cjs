const {MongoClient, ServerApiVersion} = require('mongodb');
require('dotenv').config({path: "./config.env"});
const uri = process.env.ATLAS_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version          : ServerApiVersion.v1,
        strict           : true,
        deprecationErrors: true,
    }
});

let database
let mongoClient;

module.exports = {
    connectToServer: async () => {
        try {
            await client.connect();

            database = client.db("Gym_App");
            mongoClient = client;

            console.log("Successfully connected to MongoDB");
            return true;
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            return false;
        }
    },

    getDb: () => {
        if (!database) {
            throw new Error("Database not initialized. Call connectToServer first.");
        }
        return database;
    },

    getClient: () => {
        if (!mongoClient) {
            throw new Error("Client not initialized. Call connectToServer first.");
        }
        return mongoClient;
    },

    closeConnection: async () => {
        if (mongoClient) {
            await mongoClient.close();
            database = null;
            mongoClient = null;
        }
    }
}


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await listDatabases(client);
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     console.log("Collections");
//     collectionList = await client.db("Gym_App").listCollections().toArray();
//     collectionList.forEach(collection => console.log(` - ${collection.name}`));
// };

// run().catch(console.dir);