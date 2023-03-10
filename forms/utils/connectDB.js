import { MongoClient} from "mongodb";

const db_url = process.env.DATABASE_URL;

const client = new MongoClient(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connect() {
    await client.connect();
    const db = client.db("portfolio");
    return {db, client}
};