import express from "express";

import {
  getAllAreaModel,
getAreaByIdModel,
insertAreaModel,
updateAreaModel,
deleteAreaModel
} from "../models/AreaModels.js";

export const getAllAreas = (req, res) => {
  getAllAreaModel((err, areas) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve areas' });
    }
    res.json(areas);
  });
};

export const getAreaById = (req, res) => {
  const { id } = req.params;
  getAreaByIdModel(id, (err, area) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve area' });
    } 
    if (!area) {
      return res.status(404).json({ error: 'Area not found' });
    }
    res.json(area);
  });
};

export const insertArea = (req, res) => {
  const { name, city_id } = req.body;
  insertAreaModel({ name, city_id }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert area' });
    } 
    res.status(201).json({ message: 'Area inserted successfully', areaId: result });
  });
};

export const updateArea = (req, res) => {
  const { id } = req.params;
  const { name, city_id } = req.body;
  updateAreaModel(id, { name, city_id }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update area' });
    }
    res.json({ message: 'Area updated successfully' });
  });
};

export const deleteArea = (req, res) => {
  const { id } = req.params;
  deleteAreaModel(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete area' });
    }
    res.json({ message: 'Area deleted successfully' });
  });
};


// 