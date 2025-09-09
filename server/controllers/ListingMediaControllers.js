import express from 'express';
import {
    getAllListingMediaModel,
getListingMediaByIdModel,
insertListingMediaModel,
updateListingMediaModel,
deleteListingMediaModel
} from '../models/ListingMediaModels.js';

// Get all listing media
export const getAllListingMedia = (req, res) => {
    getAllListingMediaModel((err, listingMedia) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve listing media' });
        }
        res.json(listingMedia);
    });

};
// Get listing media by id
export const getListingMediaById = (req, res) => {
    const { id } = req.params;
    getListingMediaByIdModel(id, (err, listingMedia) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve listing media' });
        }
        if (!listingMedia) {
            return res.status(404).json({ error: 'Listing media not found' });
        }
        res.json(listingMedia);
    });
};


// Insert new listing media
export const insertListingMedia = (req, res) => {
    const { listing_id, media_id } = req.body;
    if (!listing_id || !media_id) {
        return res.status(400).json({ error: 'Listing ID and Media ID are required' });
    }
    insertListingMediaModel(listing_id, media_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert listing media' });
        }
        res.status(201).json({ message: 'Listing media inserted successfully', id: result.insertId });
    });
};


// Update listing media by id
export const updateListingMedia = (req, res) => {
    const { id } = req.params;  
    const { listing_id, media_id } = req.body;
    if (!listing_id || !media_id) {
        return res.status(400).json({ error: 'Listing ID and Media ID are required' });
    }
    updateListingMediaModel(id, listing_id, media_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update listing media' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Listing media not found' });
        }
        res.json({ message: 'Listing media updated successfully' });
    });
};


// Delete listing media by id
export const deleteListingMedia = (req, res) => {
    const { id } = req.params;
    deleteListingMediaModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete listing media' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Listing media not found' });
        }
        res.json({ message: 'Listing media deleted successfully' });
    });
};



