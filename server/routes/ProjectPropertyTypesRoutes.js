import express from 'express';
import {
    getAllProjectPropertyTypes,
getProjectPropertyTypeById,
insertProjectPropertyType,
updateProjectPropertyType,
deleteProjectPropertyType
} from '../controllers/ProjectPropertyTypesControllers.js';

const router = express.Router();
router.get("/", getAllProjectPropertyTypes);
router.get("/:id", getProjectPropertyTypeById);
router.post("/save_project_property_type", insertProjectPropertyType);
router.put("/update_project_property_type/:id", updateProjectPropertyType);
router.delete("/delete_project_property_type/:id", deleteProjectPropertyType);

export default router;
