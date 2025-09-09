import connection from "../db/db.js";
// Get all listing media
export const getAllListingMediaModel = (callback) => {
    const query = "SELECT * FROM listing_media ORDER BY listing_id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get listing media by id
export const getListingMediaByIdModel = (id, callback) => {
    const query = "SELECT * FROM listing_media WHERE listing_id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results[0]);
    });
};

// Insert new listing media
export const insertListingMediaModel = (listing_id, media_id, callback) => {
    const query = "INSERT INTO listing_media (listing_id, media_id) VALUES (?, ?)";    
    connection.query(query, [listing_id, media_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update listing media by id
export const updateListingMediaModel = (id, listing_id, media_id, callback) => {
    const query = "UPDATE listing_media SET listing_id = ?, media_id = ? WHERE id = ?";
    connection.query(query, [listing_id, media_id, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Delete listing media by id
export const deleteListingMediaModel = (id, callback) => {
    const query = "DELETE FROM listing_media WHERE id = ?"; 
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


            