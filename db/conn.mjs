import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://cynthy:1HoCaa8mX884EniU@cluster0.je4lhcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;