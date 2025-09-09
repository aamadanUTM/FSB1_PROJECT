import express from "express";
const router = express.Router();

import {
  getAllCountries,
  insertCountry,
  updateCountry,
  deleteCountry,
  getCountryById,
} from "../controllers/CountryControllers.js";

router.get("/countries", getAllCountries);
router.post("/saveCountry", insertCountry);
router.put("/updateCountry/:id", updateCountry);
router.delete("/deleteCountry/:id", deleteCountry);
router.get("/country/:id", getCountryById);

export default router;
