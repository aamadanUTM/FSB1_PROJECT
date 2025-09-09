import express from 'express';
import {
    getAllListingAmenitiesModel,
getListingAmenityByIdModel,
insertListingAmenityModel,
updateListingAmenityModel,
deleteListingAmenityModel
} from '../models/ListingAmenitiesModel.js';

// Get all listing amenities
export const getAllListingAmenities = (req, res) => {
    getAllListingAmenitiesModel((err, amenities) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve listing amenities' });
        }
        res.json(amenities);
    });
};

// Get listing amenity by id
export const getListingAmenityById = (req, res) => {
    const { id } = req.params;
    getListingAmenityByIdModel(id, (err, amenity) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve listing amenity' });
        }
        if (!amenity) {
            return res.status(404).json({ error: 'Listing amenity not found' });
        }
        res.json(amenity);
    });
};

// Insert new listing amenity INSERT INTO `listing_amenities`(listing_id ,`amenity_id`, `value`)
export const insertListingAmenity = (req, res) => {
    const {listing_id ,amenity_id, value }   = req.body;
    if (!listing_id|| !amenity_id || !value) {
        return res.status(400).json({ error: 'listing_id, Amenity id and value are required' });
    }
    insertListingAmenityModel(listing_id, amenity_id, value, (err, result) => {
        if (err) {
            // add more descriptive error handling based on err.code if needed

            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Listing amenity inserted successfully', id: result.insertId });
    });
};

// Update listing amenity by id
export const updateListingAmenity = (req, res) => {
    const { id } = req.params;
    const { amenity_id, value } = req.body;
    if (!amenity_id || !value) {
        return res.status(400).json({ error: 'Amenity id and value are required' });
    }
    updateListingAmenityModel(id, amenity_id, value, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update listing amenity' });
        }
        res.json({ message: 'Listing amenity updated successfully' });
    });
};
// Delete listing amenity by id
export const deleteListingAmenity = (req, res) => {
    const { id } = req.params;
    deleteListingAmenityModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete listing amenity' });
        }
        res.json({ message: 'Listing amenity deleted successfully' });
    });
};
