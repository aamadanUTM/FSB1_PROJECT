import express from 'express';
import {
    getAllProjectPropertyTypesModel,
getProjectPropertyTypeByIdModel,
insertProjectPropertyTypeModel,
updateProjectPropertyTypeModel,
deleteProjectPropertyTypeModel
} from '../models/ProjectPropertyTypesModel.js';

// Get all project property types
export const getAllProjectPropertyTypes = (req, res) => {
    getAllProjectPropertyTypesModel((err, propertyTypes) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project property types' });
        }
        res.json(propertyTypes);
    });
};

// Get project property type by id
export const getProjectPropertyTypeById = (req, res) => {
    const { id } = req.params;
    getProjectPropertyTypeByIdModel(id, (err, propertyType) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve project property type' });
        }
        if (!propertyType) {
            return res.status(404).json({ error: 'Project property type not found' });
        }
        res.json(propertyType);
    });
};

// Insert new project property type INSERT INTO `project_property_types`(`property_type_id`)
export const insertProjectPropertyType = (req, res) => {
    const {project_id, property_type_id }   = req.body;
    if (!property_type_id || !project_id ) {
        return res.status(400).json({ error: 'All Feilds are required' });
    }
    insertProjectPropertyTypeModel(project_id, property_type_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert project property type' });
        }
        res.status(201).json({ message: 'Project property type inserted successfully', id: result.insertId });
    });
};


// Update project property type by id
export const updateProjectPropertyType = (req, res) => {
    const { id } = req.params;
    const { property_type_id } = req.body;
    if (!property_type_id) {
        return res.status(400).json({ error: 'Property type id is required' });
    }
    updateProjectPropertyTypeModel(id, property_type_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update project property type' });
        }
        res.json({ message: 'Project property type updated successfully' });
    });
};


// Delete project property type by id
export const deleteProjectPropertyType = (req, res) => {
    const { id } = req.params;
    deleteProjectPropertyTypeModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete project property type' });
        }
        res.json({ message: 'Project property type deleted successfully' });
    });
};


