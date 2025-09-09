import express from 'express';
import {getAllCountriesModel, insertCountryModel, deleteCountryModel, getCountryByIdModel} from '../models/CountryModels.js';


export const getAllCountries = (req, res) => {
    getAllCountriesModel((err, countries) => {   
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve countries' });
        }   
        res.json(countries);
    });
};


export const insertCountry = (req, res) => {
    const { name } = req.body;
    insertCountryModel(name, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert country' });
        }
        res.status(201).json({ message: 'Country inserted successfully', countryId: result.insertId });
    });
};

export const updateCountry = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    updateCountryModel(id, name, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update country' });
        }
        res.json({ message: 'Country updated successfully' });
    });
};

export const deleteCountry = (req, res) => {
    const { id } = req.params;  
    deleteCountryModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete country' });
        }
        res.json({ message: 'Country deleted successfully' });
    });
};
export const getCountryById = (req, res) => {
    const { id } = req.params;  
    getCountryByIdModel(id, (err, country) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve country' });
        }   
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.json(country);
    });
};
