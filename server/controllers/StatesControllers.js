import express from "express";
import {getAllStatesModel,
    getStatesByIdModel,
    insertStateModel,
    updateStateModel,
    deleteStateModel
} from  "../models/StatesModels.js";

export const getAllStates = (req, res) => {
    getAllStatesModel((err, states) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve states' });
        }   
        res.json(states);
    });
};


export const getStatesById = (req, res) => {
    const { id } = req.params;
    getStatesByIdModel(id, (err, state) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve state' });
        }
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.json(state);
    });
};

// insert state 

export const insertState = (req, res) => {
    const { name, country_id } = req.body;
    insertStateModel(name, country_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert state' });
        }
        res.status(201).json({ message: 'State inserted successfully', stateId: result.insertId });
    }
    );
};


// update state
export const updateState = (req, res) => {
    const { id } = req.params;
    const { name, country_id } = req.body;
    updateStateModel(id, name, country_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update state' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.json({ message: 'State updated successfully' });
    });
};


// delete state
export const deleteState = (req, res) => {
    const { id } = req.params;
    deleteStateModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete state' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.json({ message: 'State deleted successfully' });
    });
};

