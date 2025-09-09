import express from 'express';
import {
    getAllUsersModel,
getUserByIdModel,
insertUserModel,
updateUserModel,
deleteUserModel
} from '../models/UserAuthModels.js';

// Get all users
export const getAllUsers = (req, res) => {
    getAllUsersModel((err, users) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve users' });
        }
        res.json(users);
    });
};

// Get user by id
export const getUserById = (req, res) => {
    const { id } = req.params;
    getUserByIdModel(id, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve user' });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    });
};

// Insert new user INSERT INTO `users`(`id`, `username`, `email`, `password_hash`, `first_name`, `last_name`, `refresh_token`, `refresh_token_expires_at`, `is_verified`, `verification_token`, `reset_password_token`, `reset_password_expires`, `role`, `created_at`, `updated_at`, `last_login`, `avatar_url`, `phone_number`, `date_of_birth`)
export const insertUser = (req, res) => {
    const { username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth } = req.body;
    if (!username || !email || !password_hash || !first_name || !last_name) {
        return res.status(400).json({ error: 'All required fields must be filled' });
    }
    insertUserModel(username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert user' });
        }
        res.status(201).json({ message: 'User inserted successfully', id: result.insertId });
    });
};

// Update user by id
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth } = req.body;
    if (!username || !email || !password_hash || !first_name || !last_name) {
        return res.status(400).json({ error: 'All required fields must be filled' });
    }
    updateUserModel(id, username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update user' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    }
    );
};
// Delete user by id
export const deleteUser = (req, res) => {
    const { id } = req.params;
    deleteUserModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete user' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    });
};

