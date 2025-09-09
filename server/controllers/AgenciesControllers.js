import express from 'express';
import {
    getAllAgenciesModel,
getAgencyByIdModel,
insertAgencyModel,
updateAgencyModel,
deleteAgencyModel
} from '../models/AgenciesModels.js';
// Get all agencies
export const getAllAgencies = (req, res) => {
    getAllAgenciesModel((err, agencies) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve agencies' });
        }
        res.json(agencies);
    });
};
// Get agency by id
export const getAgencyById = (req, res) => {
    const { id } = req.params;  
    getAgencyByIdModel(id, (err, agency) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve agency' });
        }
        if (!agency) {
            return res.status(404).json({ error: 'Agency not found' });
        }
        res.json(agency);
    });
};

// Insert new agency
export const insertAgency = (req, res) => {
    const { name, regulator_id, address, phone } = req.body;   
    if (!name || !regulator_id || !address || !phone) {
        return res.status(400).json({ error: 'All Feild are required' });
    }   
    insertAgencyModel(name, regulator_id, address, phone, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert agency' });
        }
        res.status(201).json({ message: 'Agency inserted successfully', id: result.insertId });
    });
};

// Update agency by id
export const updateAgency = (req, res) => {
    const { id } = req.params;  
    const { name, regulator_id, address, phone } = req.body;   
    if (!name || !regulator_id || !address || !phone) {
        return res.status(400).json({ error: 'All Feild are required' });
    }
    updateAgencyModel(id, name, regulator_id, address, phone, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update agency' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Agency not found' });
        }
        res.json({ message: 'Agency updated successfully' });
    });
};
// Delete agency by id
export const deleteAgency = (req, res) => {
    const { id } = req.params;  
    deleteAgencyModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete agency' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Agency not found' });
        }
        res.json({ message: 'Agency deleted successfully' });
    });

};

