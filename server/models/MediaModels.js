import connection  from "../db/db.js";

// Get all media
export const getAllMediaModel = (callback) => {
    const query = "SELECT * FROM media ORDER BY id";    
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
// Get media by id
export const getMediaByIdModel = (id, callback) => {
    const query = "SELECT * FROM media WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results[0]);
    });
};

// Insert new media
export const insertMediaModel = (media_type, url, title, position, created_at, callback) => {
    const query = "INSERT INTO media (media_type, url, title, position, created_at) VALUES (?, ?, ?, ?, ?)";
    connection.query(query, [media_type, url, title, position, created_at], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Update media by id
export const updateMediaModel = (id, media_type, url, title, position, created_at, callback) => {
    const query = "UPDATE media SET media_type = ?, url = ?, title = ?, position = ?, created_at = ? WHERE id = ?";
    connection.query(query, [media_type, url, title, position, created_at, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Delete media by id
export const deleteMediaModel = (id, callback) => {
    const query = "DELETE FROM media WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, result);
    });
};

