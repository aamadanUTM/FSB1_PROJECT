import express from 'express';
import {
    getAllProjectMediaModel,
getProjectMediaByIdModel,
insertProjectMediaModel,
updateProjectMediaModel,
deleteProjectMediaModel
} from '../models/ProjectMediaModels.js';
// Get all project media
export const getAllProjectMedia = (req, res) => {
    getAllProjectMediaModel((err, media) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project media' });
        }
        res.json(media);
    });
};

// Get project media by id
export const getProjectMediaById = (req, res) => {
    const { id } = req.params;
    getProjectMediaByIdModel(id, (err, media) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project media' });
        }
        if (!media) {
            return res.status(404).json({ error: 'Project media not found' });
        }
        res.json(media);
    });
};

// Insert new project media INSERT INTO `project_media`(`media_id`, `project_id`)
export const insertProjectMedia = (req, res) => {
    const { media_id, project_id }   = req.body;
    if (!media_id || !project_id) {
        return res.status(400).json({ error: 'Media id and project id are required' });
    }
    insertProjectMediaModel(media_id, project_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert project media' });
        }
        res.status(201).json({ message: 'Project media inserted successfully', id: result.insertId });
    });
};

// Update project media by id
export const updateProjectMedia = (req, res) => {
    const { id } = req.params;  
    const { media_id, project_id } = req.body;
    if (!media_id || !project_id) {
        return res.status(400).json({ error: 'Media id and project id are required' });
    }
    updateProjectMediaModel(id, media_id, project_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update project media' });
        }
        res.json({ message: 'Project media updated successfully' });
    });
};
// Delete project media by id
export const deleteProjectMedia = (req, res) => {
    const { id } = req.params;
    deleteProjectMediaModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete project media' });
        }
        res.json({ message: 'Project media deleted successfully' });
    }); 

};