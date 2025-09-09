import express from 'express';
import {
    getAllProjectFacilitiesModel,
getProjectFacilitiesByIdModel,
insertProjectFacilitiesModel,
updateProjectFacilitiesModel,
deleteProjectFacilitiesModel
} from '../models/ProjectFacilitiesModel.js';

// Get all project facilities
export const getAllProjectFacilities = (req, res) => {
    getAllProjectFacilitiesModel((err, facilities) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project facilities' });
        }
        res.json(facilities);
    });
};

// Get project facilities by id
export const getProjectFacilitiesById = (req, res) => {
    const { id } = req.params;
    getProjectFacilitiesByIdModel(id, (err, facility) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project facility' });
        }
        if (!facility) {
            return res.status(404).json({ error: 'Project facility not found' });
        }
        res.json(facility);
    });
};

// Insert new project facilities INSERT INTO `project_facilities`(`amenity_id `)
export const insertProjectFacilities = (req, res) => {
    const { project_id, amenity_id  }   = req.body;
    if (!amenity_id || !project_id ) {
        return res.status(400).json({ error: 'All Feilds  are required' });
    }
    insertProjectFacilitiesModel(project_id, amenity_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert project facility' });
        }
        res.status(201).json({ message: 'Project facility inserted successfully', id: result.insertId });
     });
};

// Update project facilities by id

export const updateProjectFacilities = (req, res) => {
    const { id } = req.params;
    const { amenity_id  } = req.body;
    if (!amenity_id ) {
        return res.status(400).json({ error: 'Amenity id is required' });
    }
    updateProjectFacilitiesModel(id, amenity_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update project facility' });
        }
        res.json({ message: 'Project facility updated successfully' });
    });
};


// Delete project facilities by id

export const deleteProjectFacilities = (req, res) => {
    const { id } = req.params;
    deleteProjectFacilitiesModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete project facility' });
        }
        res.json({ message: 'Project facility deleted successfully' });
    });
};



