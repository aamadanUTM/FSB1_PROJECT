import express from 'express';
import {
    getAllAgentsModel,
getAgentByIdModel,
insertAgentModel,
updateAgentModel,
deleteAgentModel
} from '../models/AgentsModels.js';

// Get all agents   
export const getAllAgents = (req, res) => {
    getAllAgentsModel((err, agents) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve agents' });
        }
        res.json(agents);
    });
};

// Get agent by id
export const getAgentById = (req, res) => {
    const { id } = req.params;
    getAgentByIdModel(id, (err, agent) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve agent' });
        }
        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }
        res.json(agent);
    });
};

// Insert new agent
export const insertAgent = (req, res) => {
    const { full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at } = req.body;
    if (!full_name || !phone_e164 || !email || !license_no || !license_regulator || !agency_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    insertAgentModel(full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert agent' });
        }
        res.status(201).json({ message: 'Agent inserted successfully', id: result.insertId });
    });
};


// Update agent by id
export const updateAgent = (req, res) => {
    const { id } = req.params;
    const { full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at } = req.body;
    if (!full_name || !phone_e164 || !email || !license_no || !license_regulator || !agency_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    updateAgentModel(id, full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update agent' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Agent not found' });
        }
        res.json({ message: 'Agent updated successfully' });
    });
};

// Delete agent by id   
export const deleteAgent = (req, res) => {
    const { id } = req.params;
    deleteAgentModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete agent' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Agent not found' });
        }
        res.json({ message: 'Agent deleted successfully' });
    });
};

