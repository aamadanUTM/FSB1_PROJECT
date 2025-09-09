import express from 'express';
import {
    getAllProjectMedia,
getProjectMediaById,
insertProjectMedia,
updateProjectMedia,
deleteProjectMedia
} from '../controllers/ProjectMediaControllers.js';
const router = express.Router();
router.get("/", getAllProjectMedia);
router.get("/:id", getProjectMediaById);
router.post("/save_project_media", insertProjectMedia);
router.put("/update_project_media/:id", updateProjectMedia);
router.delete("/delete_project_media/:id", deleteProjectMedia);
export default router;