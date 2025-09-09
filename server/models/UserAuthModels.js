import connection  from "../db/db.js";
// Get all users
export const getAllUsersModel = (callback) => {
    const query = "SELECT * FROM users ORDER BY id DESC";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
// Get user by id
export const getUserByIdModel = (id, callback) => {
    const query = "SELECT * FROM users WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Insert new user INSERT INTO `users`(`id`, `username`, `email`, `password_hash`, `first_name`, `last_name`, `refresh_token`, `refresh_token_expires_at`, `is_verified`, `verification_token`, `reset_password_token`, `reset_password_expires`, `role`, `created_at`, `updated_at`, `last_login`, `avatar_url`, `phone_number`, `date_of_birth`)
export const insertUserModel = (username, email, password_hash, first_name, last_name, refresh_token
    , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
    , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth, callback) => {
    const query = "INSERT INTO users (username, email, password_hash, first_name, last_name, refresh_token\
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires\
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(query, [username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update user by id
export const updateUserModel = (id, username, email, password_hash, first_name, last_name, refresh_token
    , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
    , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth, callback) => {
    const query = "UPDATE users SET username = ?, email = ?, password_hash = ?, first_name = ?, last_name = ?\
        , refresh_token = ?, refresh_token_expires_at = ?, is_verified = ?, verification_token = ?\
        , reset_password_token = ?, reset_password_expires = ?, role = ?, created_at = ?, updated_at = ?\
        , last_login = ?, avatar_url = ?, phone_number = ?, date_of_birth = ? WHERE id = ?";
    connection.query(query, [username, email, password_hash, first_name, last_name, refresh_token
        , refresh_token_expires_at, is_verified, verification_token, reset_password_token, reset_password_expires
        , role, created_at, updated_at, last_login, avatar_url, phone_number, date_of_birth, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Delete user by id
export const deleteUserModel = (id, callback) => {
    const query = "DELETE FROM users WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

