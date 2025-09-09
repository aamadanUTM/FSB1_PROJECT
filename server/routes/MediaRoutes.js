import express from 'express';
import {
    getAllMedia,
getMediaById,
insertMedia,
updateMedia,
deleteMedia
} from '../controllers/MediaControllers.js';
const router = express.Router();
router.get("/", getAllMedia);
router.get("/:id", getMediaById);
router.post("/save_media", insertMedia);
router.put("/update_media/:id", updateMedia);
router.delete("/delete_media/:id", deleteMedia);
export default router;