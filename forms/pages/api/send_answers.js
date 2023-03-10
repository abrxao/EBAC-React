import { connect } from "../../utils/connectDB";

export default async function send_answer(req, res) {
  try {
    if (req.body) {
      const { db } = await connect();
      const body = {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        maritalStatus: req.body.maritalStatus,
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
      };
      await db.collection("forms").insertOne(body);
      res.status(200).json({success: 'sended'})
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
