import express from "express";

import {
    getAllProjects,
getProjectById,
insertProject,
updateProject,
deleteProject
} from "../controllers/ProjectControllers.js";


const router = express.Router();
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/save_project", insertProject);
router.put("/update_project/:id", updateProject);
router.delete("/delete_project/:id", deleteProject);





export default router;