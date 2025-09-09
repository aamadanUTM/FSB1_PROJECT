import express from 'express';
import {
    getAllAmenities,
getAmenityById,
insertAmenity,
updateAmenity,
deleteAmenity
} from '../controllers/AmenitiesControllers.js';

const router = express.Router();
router.get("/", getAllAmenities);
router.get("/:id", getAmenityById);
router.post("/save_amenity", insertAmenity);
router.put("/update_amenity/:id", updateAmenity);
router.delete("/delete_amenity/:id", deleteAmenity);

export default router;
