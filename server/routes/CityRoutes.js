import express from "express";
const router = express.Router();

import {
  getAllCities, 
  getCityById,
  insertCity,
  updateCity,
  deleteCity

 } from "../controllers/CityControllers.js";

router.get("/cities", getAllCities);
router.get("/city/:id", getCityById);
router.post("/save_city", insertCity);
router.put("/update_city/:id", updateCity);
router.delete("/delete_city/:id", deleteCity);







export default router;