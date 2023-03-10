import { connect } from "../../utils/connectDB";

export default async function get_docs(req, res) {
  try {
    const { db } = await connect();
    const data = await db.collection("forms").find().toArray();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
