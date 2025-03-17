const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({path: "./config.env"});
const uri = process.env.ATLAS_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database 

module.exports = {
  connectToServer: () => {
    database = client.db("Gym_App");
  },

  getDb: () => {
    return database
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
const { ObjectId } = require('mongodb');

const db = client.db("Gym_App");
const coll = db.collection("user_data");

coll.insertOne(
  {
    "_id": new ObjectId("67ae371604280cb671acf855"),
    "userID": new ObjectId("67ae371604280cb671acf855"),
    "2025-03-22": [
      {
        "exerciseID": 3,
        "duration": "4:00",
        "calories": 60
      },
      {
        "exerciseID": 7,
        "duration": "4:00"
      }
    ],
    "2025-03-23": [
      {
        "exerciseID": 5,
        "duration": "5:30",
        "calories": 80
      }
    ]
  }
)

