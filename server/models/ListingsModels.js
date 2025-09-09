import connection from "../db/db.js";
// Get all listings media
export const getAllListingModel = (callback) => {
    const query = 'SELECT * FROM listings';    
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Get listing media by id
export const getListingByIdModel = (id, callback) => {
    const query = 'SELECT * FROM listings WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};


// Insert new listing 
export  const insertListingModel = (unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code, callback) => {
    const query = 'INSERT INTO listings (unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code];
    connection.query(query, values, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};


// Update listing by id
export const updateListingModel = (id, unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code, callback) => {
    const query = 'UPDATE listings SET unit_id = ?, title = ?, description_md = ?, listing_type = ?, price = ?, available_from = ?, min_term_months = ?, furnishing_level = ?, is_featured = ?, is_verified = ?, status = ?, listed_at = ?, updated_at = ?, expire_at = ?, agent_id = ?, listing_ref_code = ? WHERE id = ?';
    const values = [unit_id, title, description_md, listing_type, price, available_from, min_term_months, furnishing_level, is_featured, is_verified, status, listed_at, updated_at, expire_at, agent_id, listing_ref_code, id];    
    connection.query(query, values, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};


// Delete listing by id
export const deleteListingModel = (id, callback) => {
    const query = 'DELETE FROM listings WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};
