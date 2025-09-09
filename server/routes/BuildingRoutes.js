import express from 'express';

import {
    getAllBuildings,
getBuildingById,
insertBuilding,
updateBuilding,
deleteBuilding
} from '../controllers/BuildingsControllers.js';

const router = express.Router();
router.get("/", getAllBuildings);
router.get("/:id", getBuildingById);
router.post("/save_building", insertBuilding);
router.put("/update_building/:id", updateBuilding);
router.delete("/delete_building/:id", deleteBuilding);

export default router;