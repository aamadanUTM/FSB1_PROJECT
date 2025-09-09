import connection from "../db/db.js";

// Get all amenities
export const getAllAmenitiesModel = (callback) => {
    const query = "SELECT * FROM amenities ORDER BY id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get amenity by id
export const getAmenityByIdModel = (id, callback) => {
    const query = "SELECT * FROM amenities WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results[0]);
    });
};


// Insert new amenity INSERT INTO `amenities`(`name`, `scope`)
export const insertAmenityModel = (name, scope, callback) => {
    const query = "INSERT INTO amenities (name, scope) VALUES (?, ?)";
    connection.query(query, [name, scope], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Update amenity by id

export const updateAmenityModel = (id, name, scope, callback) => {
    const query = "UPDATE amenities SET name = ?, scope = ? WHERE id = ?";
    connection.query(query, [name, scope, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Delete amenity by id
export const deleteAmenityModel = (id, callback) => {
    const query = "DELETE FROM amenities WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


