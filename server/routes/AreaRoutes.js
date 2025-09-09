import express from "express";

import 
{

    getAllAreas,
    getAreaById,
    insertArea,
    updateArea,
    deleteArea
} from '../controllers/AreaControllers.js';

const router = express.Router();

router.get("/All_area", getAllAreas);
router.get("/:id", getAreaById);
router.post("/save_area", insertArea);
router.put("/update_area/:id", updateArea);
router.delete("/delete_area/:id", deleteArea);


export default router;