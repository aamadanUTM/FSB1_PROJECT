import e from "express";
import express from "express";
const router = express.Router();

router.get("/countries", (req, res) => {
  res.status(200).json({ message: "List of countries" });
});

export default router;
