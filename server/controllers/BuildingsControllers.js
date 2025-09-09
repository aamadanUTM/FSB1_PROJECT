import express from 'express';
import {
    getAllBuildingsModel,
getBuildingByIdModel,
insertBuildingModel,
updateBuildingModel,
deleteBuildingModel
} from '../models/BuildingsModels.js';

// Get all buildings
export const getAllBuildings = (req, res) => {
    getAllBuildingsModel((err, buildings) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve buildings' });
        }
        res.json(buildings);
    });
};

// Get building by id
export const getBuildingById = (req, res) => {
    const { id } = req.params;
    getBuildingByIdModel(id, (err, building) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve building' });
        }
        if (!building) {
            return res.status(404).json({ error: 'Building not found' });
        }
        res.json(building);
    });
};

// Insert new building
export const insertBuilding = (req, res) => {   
    const { project_id, name, floors, units_count } = req.body;
    if (!project_id || !name || !floors || !units_count) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    insertBuildingModel(project_id, name, floors, units_count, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert building' });
        }
        res.status(201).json({ message: 'Building inserted successfully', id: result.insertId });
    });
};


// Update building by id
export const updateBuilding = (req, res) => {
    const { id } = req.params;
    const { project_id, name, floors, units_count } = req.body;
    if (!project_id || !name || !floors || !units_count) {
        return res.status(400).json({ error: 'All fields are required' });
    }   
    updateBuildingModel(project_id, name, floors, units_count, id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update building' });
        }
        res.json({ message: 'Building updated successfully' });
    });
};


// Delete building by id
export const deleteBuilding = (req, res) => {
    const { id } = req.params;
    deleteBuildingModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete building' });
        }
        res.json({ message: 'Building deleted successfully' });
    });
};


