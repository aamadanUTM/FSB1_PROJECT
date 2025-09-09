import express from 'express';
import {
   getAllListingModel,
getListingByIdModel,
insertListingModel,
updateListingModel,
deleteListingModel
} from '../models/ListingsModels.js';
// Get all listings 
export const getAllListings = (req, res) => {
    getAllListingModel((err, listings) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve listings' });
        }
        res.json(listings);
    });

};
// Get listing by id
export const getListingById = (req, res) => {
    const { id } = req.params;
    getListingByIdModel(id, (err, listing) => {
        if (err) {  
            return res.status(500).json({ error: 'Failed to retrieve listing' });
        }
        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }
        res.json(listing);
    });
};

// Insert new listing   
export const insertListing = (req, res) => {
    const { unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code } = req.body;
    if (!unit_id || !title || !listing_type || !price || !available_from || !min_term_months || !furnishing_level || !status || !listed_at || !updated_at || !expire_at || !agent_id || !listing_ref_code) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    insertListingModel(unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Listing inserted successfully', id: result.insertId });
    });
};

// Update listing by id
export const updateListing = (req, res) => {
    const { id } = req.params;  
    const { unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code } = req.body;    
    if (!unit_id || !title || !listing_type || !price || !available_from || !min_term_months || !furnishing_level || !status || !listed_at || !updated_at || !expire_at || !agent_id || !listing_ref_code) {

        return res.status(400).json({ error: 'Missing required fields' });
    }
    updateListingModel(id, unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update listing' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Listing not found' });
        }
        res.json({ message: 'Listing updated successfully' });
    });
};

// Delete listing by id
export const deleteListing = (req, res) => {
    const { id } = req.params;
    deleteListingModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete listing' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Listing not found' });
        }
        res.json({ message: 'Listing deleted successfully' });
    });
};
