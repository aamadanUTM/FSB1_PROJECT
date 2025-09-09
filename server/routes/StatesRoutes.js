import express from "express";
import { 
    getAllStates,
    getStatesById,
    insertState,
    updateState,
    deleteState
} from "../controllers/StatesControllers.js";

const router = express.Router();

router.get("/states", getAllStates);
router.get("/states/:id", getStatesById);
router.post("/save_state", insertState);
router.put("/update_state/:id", updateState);
router.delete("/delete_state/:id", deleteState);

export default router;