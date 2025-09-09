import connection from "../db/db.js";


// Get all units
export const getAllUnitsModel = (callback) => {
    const query = "SELECT * FROM units ORDER BY id";    
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get unit by id
export const getUnitByIdModel = (id, callback) => {
    const query = "SELECT * FROM units WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};


// Insert new unit INSERT INTO `units`(`building_id`, `property_type_id`, `level`, `bedrooms`, `bathrooms`, `built_up_sqft`, `carparks`, `land_area_sqft`, `created_at`, `updated_at`)
export const insertUnitModel = (building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, callback) => {
    const query = `INSERT INTO units
    (building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
    connection.query(query, [building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });

};


// Update unit by id
export const updateUnitModel = (id, building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, callback) => {
    const query = `UPDATE units 
    SET building_id = ?, property_type_id = ?, level = ?, bedrooms = ?, bathrooms = ?, built_up_sqft = ?, carparks = ?, land_area_sqft = ?, updated_at = NOW() 
    WHERE id = ?`;
    connection.query(query, [building_id, property_type_id, level, bedrooms, bathrooms, built_up_sqft, carparks, land_area_sqft, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
// Delete unit by id
export const deleteUnitModel = (id, callback) => {
    const query = "DELETE FROM units WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, result);
    });
};


