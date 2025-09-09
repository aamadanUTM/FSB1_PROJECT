import express from 'express';
import {

  getAllProjectsModel,
getProjectByIdModel,
insertProjectModel,
updateProjectModel,
deleteProjectModel
} from '../models/ProjectModels.js';

// Get all projects
export const getAllProjects = (req, res) => {
  getAllProjectsModel((err, projects) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve projects' });
    }
    res.json(projects);
  });
};

// Get project by id
export const getProjectById = (req, res) => {
  const { id } = req.params;
  getProjectByIdModel(id, (err, project) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve project' });
    }
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  });
};

// Insert new project
export const insertProject = (req, res) => {  
  const { name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id } = req.body;
  if (!name || !completion_year || !description_md || !total_units || !total_floors || !latitude || !longitude || !address_line1 || !neighbourhood_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  insertProjectModel(name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert project' });
    }
    res.status(201).json({ message: 'Project inserted successfully', id: result.insertId });
  });
};


// Update project by id
export const updateProject = (req, res) => {
  const { id } = req.params;
  const { name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id } = req.body;
  if (!name || !completion_year || !description_md || !total_units || !total_floors || !latitude || !longitude || !address_line1 || !neighbourhood_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  updateProjectModel(id, name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update project' });
    }
    res.json({ message: 'Project updated successfully' });
  });
};

// Delete project by id
export const deleteProject = (req, res) => {
  const { id } = req.params;
  deleteProjectModel(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete project' });
    }
    res.json({ message: 'Project deleted successfully' });
  });
};