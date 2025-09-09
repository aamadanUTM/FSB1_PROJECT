import express from 'express';
import {
    getAllListingMedia,
getListingMediaById,
insertListingMedia,
updateListingMedia,
deleteListingMedia
} from '../controllers/ListingMediaControllers.js';
const router = express.Router();
router.get("/", getAllListingMedia);
router.get("/:id", getListingMediaById);
router.post("/save_listing_media", insertListingMedia);
router.put("/update_listing_media/:id", updateListingMedia);
router.delete("/delete_listing_media/:id", deleteListingMedia);
export default router;