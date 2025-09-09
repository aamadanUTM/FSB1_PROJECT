import express from 'express';

import {
    getAllAmenitiesModel,
getAmenityByIdModel,
insertAmenityModel,
updateAmenityModel,
deleteAmenityModel
} from '../models/AmenitiesModel.js';

// Get all amenities
export const getAllAmenities = (req, res) => {
    getAllAmenitiesModel((err, amenities) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve amenities' });
        }
        res.json(amenities);
    });
};


// Get amenity by id
export const getAmenityById = (req, res) => {
    const { id } = req.params;
    getAmenityByIdModel(id, (err, amenity) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve amenity' });
        }
        if (!amenity) {
            return res.status(404).json({ error: 'Amenity not found' });
        }
        res.json(amenity);
    });
};

// Insert new amenity

export const insertAmenity = (req, res) => {
    const { name, scope } = req.body;
    if (!name || !scope) {
        return res.status(400).json({ error: 'Name and scope are required' });
    }
    insertAmenityModel(name, scope, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert amenity' });
        }
        res.status(201).json({ message: 'Amenity inserted successfully', id: result.insertId });
    });
};

// Update amenity by id
export const updateAmenity = (req, res) => {
    const { id } = req.params;
    const { name, scope } = req.body;
    if (!name || !scope) {
        return res.status(400).json({ error: 'Name and scope are required' });
    }
    updateAmenityModel(id, name, scope, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update amenity' });
        }
        res.json({ message: 'Amenity updated successfully' });
    });
};

// Delete amenity by id
export const deleteAmenity = (req, res) => {
    const { id } = req.params;  
    deleteAmenityModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete amenity' });
        }
        res.json({ message: 'Amenity deleted successfully' });
    });
};