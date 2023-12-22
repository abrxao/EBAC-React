import { MongoClient } from "mongodb";

const db_url =
  "mongodb+srv://forms:teste12345@portfolio.ca5u4ya.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connect() {
  await client.connect();
  const db = client.db("portfolio");
  return { db, client };
}
