import connection  from "../db/db.js";

// Get all buildings
export const getAllBuildingsModel = (callback) => {
    const query = "SELECT * FROM buildings ORDER BY id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results);
    });
};

// Get building by id
export const getBuildingByIdModel = (id, callback) => {
    const query = "SELECT * FROM buildings WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Insert new building INSERT INTO `buildings`(`id`, `project_id`, `name`, `floors`, `units_count`) 
export const insertBuildingModel = (project_id, name, floors, units_count, callback) => {
    const query = "INSERT INTO buildings (project_id, name, floors, units_count) VALUES (?, ?, ?, ?)";
    connection.query(query, [project_id, name, floors, units_count], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Update building by id
export const updateBuildingModel = (id, project_id, name, floors, units_count, callback) => {
    const query = "UPDATE buildings SET project_id = ?, name = ?, floors = ?, units_count = ? WHERE id = ?";
    connection.query(query, [project_id, name, floors, units_count, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Delete building by id
export const deleteBuildingModel = (id, callback) => {  
    const query = "DELETE FROM buildings WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};