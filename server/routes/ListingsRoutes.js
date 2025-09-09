import express from 'express';
import {
    getAllListings,
getListingById,
insertListing,
updateListing,
deleteListing
} from '../controllers/ListingsControllers.js';
const router = express.Router();
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.post("/save_listing", insertListing);
router.put("/update_listing/:id", updateListing);
router.delete("/delete_listing/:id", deleteListing);
export default router;