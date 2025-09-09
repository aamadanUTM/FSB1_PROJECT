import express from 'express';
import {
    getAllAgents,
getAgentById,
insertAgent,
updateAgent,
deleteAgent
} from '../controllers/AgentsControllers.js';
const router = express.Router();
router.get("/", getAllAgents);
router.get("/:id", getAgentById);
router.post("/save_agent", insertAgent);
router.put("/update_agent/:id", updateAgent);
router.delete("/delete_agent/:id", deleteAgent);
export default router;