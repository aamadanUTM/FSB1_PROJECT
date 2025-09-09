import {
  getAllNeighborModel,
  getNeighborByIdModel,
  insertNeighborModel,
  updateNeighborModel,
  deleteNeighborModel
} from '../models/NeighborModels.js';

// Get all neighborhoods
export const getAllNeighbors = (req, res) => {
  getAllNeighborModel((err, neighbors) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve neighborhoods' });
    }
    res.json(neighbors);
  });
};

// Get neighborhood by id
export const getNeighborById = (req, res) => {
  const { id } = req.params;
  getNeighborByIdModel(id, (err, neighbor) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve neighborhood' });
    }
    if (!neighbor) {
      return res.status(404).json({ error: 'Neighborhood not found' });
    }
    res.json(neighbor);
  });
};

// Insert new neighborhood
export const insertNeighbor = (req, res) => {
  const { name, area_id } = req.body;
  if (!name || !area_id) {
    return res.status(400).json({ error: 'Name and area_id are required' });
  }
  insertNeighborModel(name, area_id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert neighborhood' });
    }
    res.status(201).json({ message: 'Neighborhood inserted successfully', id: result.insertId });
  });
};

// Update neighborhood by id
export const updateNeighbor = (req, res) => {
  const { id } = req.params;
  const { name, area_id } = req.body;
  if (!name || !area_id) {
    return res.status(400).json({ error: 'Name and area_id are required' });
  }
  updateNeighborModel(id, name, area_id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update neighborhood' });
    }
    res.json({ message: 'Neighborhood updated successfully' });
  });
};

// Delete neighborhood by id
export const deleteNeighbor = (req, res) => {
  const { id } = req.params;
  deleteNeighborModel(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete neighborhood' });
    }
    res.json({ message: 'Neighborhood deleted successfully' });
  });
};