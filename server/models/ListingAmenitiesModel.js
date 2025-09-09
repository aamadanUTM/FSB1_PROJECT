import connection from "../db/db.js";

// Get all listing amenities
export const getAllListingAmenitiesModel = (callback) => {
    const query = "SELECT * FROM listing_amenities ORDER BY listing_id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get listing amenity by id
export const getListingAmenityByIdModel = (listing_id , callback) => {
    const query = "SELECT * FROM listing_amenities WHERE listing_id = ?";
    connection.query(query, [listing_id], (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results[0]);
    });
};


// Insert new listing amenity
export const insertListingAmenityModel = (listing_id,amenity_id, value, callback) => {
    const query = "INSERT INTO listing_amenities (listing_id, amenity_id, value) VALUES (?, ?, ?)";
    connection.query(query, [listing_id, amenity_id, value], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update listing amenity by id
export const updateListingAmenityModel = (listing_id , amenity_id, value, callback) => {
    const query = "UPDATE listing_amenities SET amenity_id = ?, value = ? WHERE listing_id  = ?";
    connection.query(query, [amenity_id, value, listing_id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Delete listing amenity by id

export const deleteListingAmenityModel = (id, callback) => {
    const query = "DELETE FROM listing_amenities WHERE listing_id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


