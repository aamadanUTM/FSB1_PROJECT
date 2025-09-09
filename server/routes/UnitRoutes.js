import express from 'express';

import {
   getAllUnits,
getUnitById,
insertUnit,
updateUnit,
deleteUnit,

}  from '../controllers/UnitsControllers.js';

const router = express.Router();


router.get("/", getAllUnits);
router.get("/:id", getUnitById);
router.post("/save_unit", insertUnit);  
router.put("/update_unit/:id", updateUnit);
router.delete("/delete_unit/:id", deleteUnit);

export default router;