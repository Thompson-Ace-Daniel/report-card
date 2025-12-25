import express from "express";
import { resultModel } from "../model/resultSchema.js";

const router = express.Router();

router.post("/delete", async (req, res) => {
  try {
    const deleteData = req.body;
    await resultModel.deleteOne(deleteData);
    res.status(200).json(deleteData);
    console.log("deleted", deleteData);
  } catch (err) {
    console.log("Error:", err);
  }
});

export default router;
