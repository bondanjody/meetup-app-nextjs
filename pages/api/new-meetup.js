// /api/new-meetup
// POST /api/new-meetup

import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://bondanjs:bondanjs@ac-z0rwix2-shard-00-00.4zimygo.mongodb.net:27017,ac-z0rwix2-shard-00-01.4zimygo.mongodb.net:27017,ac-z0rwix2-shard-00-02.4zimygo.mongodb.net:27017/?ssl=true&replicaSet=atlas-rwib50-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // Menutup koneksi ke database
    client.close();

    // Memberi response
    res.status(201).json({ message: "Meetups inserted!" });
  }
}

export default handler;
