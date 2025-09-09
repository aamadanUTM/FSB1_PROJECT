import express from 'express';

import {
    getAllUnitsModel,
    getUnitByIdModel,
    insertUnitModel,
    updateUnitModel,
    deleteUnitModel
} from '../models/UnitsModels.js';  

// Get all units
export const getAllUnits = (req, res) => {
    getAllUnitsModel((err, units) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve units' });
        }
        res.json(units);
    });
};

// Get unit by id
export const getUnitById = (req, res) => {
    const { id } = req.params;  
    getUnitByIdModel(id, (err, unit) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve unit' });
        }
        if (!unit) {
            return res.status(404).json({ error: 'Unit not found' });
        }
        res.json(unit);
    });
};

// Insert new unit
export const insertUnit = (req, res) => {  
    const { building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft } = req.body;
    if (!building_id || !property_type_id || !level || !bedrooms || !bathrooms || !built_up_sqft || !carparks || !land_area_sqft) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    insertUnitModel(building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert unit' });
        }
        res.status(201).json({ message: 'Unit inserted successfully', id: result.insertId });
    });
};


// Update unit by id
export const updateUnit = (req, res) => {
    const { id } = req.params;
    const { building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft } = req.body;
    if (!building_id || !property_type_id || !level || !bedrooms || !bathrooms || !built_up_sqft || !carparks || !land_area_sqft) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    updateUnitModel(id, building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update unit' });
        }
        res.json({ message: 'Unit updated successfully' });
    });
};

// Delete unit by id
export const deleteUnit = (req, res) => {
    const { id } = req.params;
    deleteUnitModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete unit' });
        }
        res.json({ message: 'Unit deleted successfully' });
    });
};


