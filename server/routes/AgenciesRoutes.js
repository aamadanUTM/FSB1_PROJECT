import express from 'express';
import {
    getAllAgencies,
getAgencyById,
insertAgency,
updateAgency,
deleteAgency
} from '../controllers/AgenciesControllers.js';
const router = express.Router();    
router.get("/", getAllAgencies);
router.get("/:id", getAgencyById);
router.post("/save_agency", insertAgency);
router.put("/update_agency/:id", updateAgency);
router.delete("/delete_agency/:id", deleteAgency);
export default router;