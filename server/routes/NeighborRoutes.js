import { Router } from "express";
import {
  getAllNeighbors,
  getNeighborById,
  insertNeighbor,
  updateNeighbor,
  deleteNeighbor
} from "../controllers/NeighborControllers.js";

const router = Router();

// Get all neighborhoods
router.get("/", getAllNeighbors);

// Get neighborhood by id
router.get("/:id", getNeighborById);

// Insert new neighborhood
router.post("/save_neighbor", insertNeighbor);

// Update neighborhood by id
router.put("/update_neighbor/:id", updateNeighbor);

// Delete neighborhood by id
router.delete("/delete_neighbor/:id", deleteNeighbor);

export default router;