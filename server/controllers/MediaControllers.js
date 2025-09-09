import express from 'express';

import {
    getAllMediaModel,
getMediaByIdModel,
insertMediaModel,
updateMediaModel,
deleteMediaModel
} from '../models/MediaModels.js';

// Get all media
export const getAllMedia = (req, res) => {
    getAllMediaModel((err, media) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve media' });
        }
        res.json(media);
    });
};

// Get media by id
export const getMediaById = (req, res) => {
    const { id } = req.params;
    getMediaByIdModel(id, (err, media) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve media' });
        }
        if (!media) {
            return res.status(404).json({ error: 'Media not found' });
        }
        res.json(media);
    });
};

// Insert new media
export const insertMedia = (req, res) => {
    const { media_type, url, title, position, created_at }   = req.body;
    if (!media_type || !url || !title || !position || !created_at) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    insertMediaModel(media_type, url, title, position, created_at, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert media' });
        }   
        res.status(201).json({ message: 'Media inserted successfully', id: result.insertId });
    });
};

// Update media by id
export const updateMedia = (req, res) => {
    const { id } = req.params;
    const { media_type, url, title, position, created_at } = req.body;
    if (!media_type || !url || !title || !position || !created_at) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    updateMediaModel(id, media_type, url, title, position, created_at, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update media' });
        }
        res.json({ message: 'Media updated successfully' });
    });
};

// Delete media by id
export const deleteMedia = (req, res) => {
    const { id } = req.params;
    deleteMediaModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete media' });
        }
        res.json({ message: 'Media deleted successfully' });
    });
};

