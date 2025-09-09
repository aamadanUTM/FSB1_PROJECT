import express from 'express';

import {
    getAllListingAmenities,
getListingAmenityById,
insertListingAmenity,
updateListingAmenity,
deleteListingAmenity
} from '../controllers/ListingAmenitiesControllers.js';
const router = express.Router();
router.get("/", getAllListingAmenities);
router.get("/:id", getListingAmenityById);
router.post("/save_listing_amenity", insertListingAmenity);
router.put("/update_listing_amenity/:id", updateListingAmenity);
router.delete("/delete_listing_amenity/:id", deleteListingAmenity);
export default router;