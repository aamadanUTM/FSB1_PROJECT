import express from 'express';

import { 
    getAllCityModel,
    getCityByIdModel,
    insertCityModel,
    updateCityModel,
    deleteCityModel
 } from '../models/CityModels.js';

export const getAllCities = (req, res) => {
  getAllCityModel((err, cities) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(cities);
  });

};

export const getCityById = (req, res) => {
  const cityId = req.params.id; 
    getCityByIdModel(cityId, (err, city) => {
      if (err) {
        return res.status(500).json({ error: 'Database query error' });
      } 
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.json(city);
    });
};

export const insertCity = (req, res) => {
  const cityData = req.body;
    insertCityModel(cityData, (err, insertId) => {
        if (err) {
            return res.status(500).json({ error: 'Database insert error' });
        }
        res.status(201).json({ message: 'City added', cityId: insertId });
    });
};

export const updateCity = (req, res) => {
  const cityId = req.params.id;
  const cityData = req.body;
    updateCityModel(cityId, cityData, (err, affectedRows) => {
        if (err) {
            return res.status(500).json({ error: 'Database update error' });
        }
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.json({ message: 'City updated' });
    });
};

export const deleteCity = (req, res) => {   
    const cityId = req.params.id;
    deleteCityModel(cityId, (err, affectedRows) => {
        if (err) {
            return res.status(500).json({ error: 'Database delete error' });
        }
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.json({ message: 'City deleted' });
    });
};

