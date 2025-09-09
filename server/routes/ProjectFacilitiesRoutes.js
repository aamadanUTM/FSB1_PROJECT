import express from 'express';
import {
getAllProjectFacilities,
getProjectFacilitiesById,
insertProjectFacilities,
updateProjectFacilities,
deleteProjectFacilities
} from '../controllers/ProjectFacilitiesControllers.js';

const router = express.Router();
router.get("/", getAllProjectFacilities);
router.get("/:id", getProjectFacilitiesById);
router.post("/save_project_facility", insertProjectFacilities);
router.put("/update_project_facility/:id", updateProjectFacilities);
router.delete("/delete_project_facility/:id", deleteProjectFacilities);

export default router;