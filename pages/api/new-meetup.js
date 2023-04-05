// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://bondanjs:bondanjs@bondanjody.5piu27x.mongodb.net/meetups?retryWrites=true&w=majority"
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
