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


// Add Export Code here

// const fs = require('fs');
// const path = require('path');

// const exportCollectionToJson = async (collectionName, outputPath = "export.json") => {
//     try {
//         const db = module.exports.getDb();
//         const collection = db.collection(collectionName);

//         // Fetch all documents
//         const documents = await collection.find({}).toArray();

//         // Convert to JSON format
//         const jsonData = JSON.stringify(documents, null, 2); // Pretty print with 2 spaces

//         // Write to file
//         fs.writeFileSync(path.resolve(outputPath), jsonData, 'utf8');

//         console.log(`Collection '${collectionName}' exported to '${outputPath}'`);
//     } catch (error) {
//         console.error("Error exporting collection:", error);
//     }
// };

// // Example usage
// (async () => {
//     await module.exports.connectToServer();
//     await exportCollectionToJson("routines", "routines_export.json");
//     await module.exports.closeConnection();
// })();
