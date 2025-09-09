import connection  from "../db/db.js";


// Get all project property types
export const getAllProjectPropertyTypesModel = (callback) => {
    const query = "SELECT * FROM project_property_types ";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get project property type by id
export const getProjectPropertyTypeByIdModel = (id, callback) => {
    const query = "SELECT * FROM project_property_types WHERE project_id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Insert new project property type
export const insertProjectPropertyTypeModel = (project_id, property_type_id, callback) => {
    const query = "INSERT INTO project_property_types (project_id, property_type_id) VALUES (?, ?)";
    connection.query(query, [project_id, property_type_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update project property type by id
export const updateProjectPropertyTypeModel = (id, property_type_id, callback) => {
    const query = "UPDATE project_property_types SET project_property_types = ?,  WHERE project_id = ?";
    connection.query(query, [property_type_id, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Delete project property type by id
export const deleteProjectPropertyTypeModel = (id, callback) => {
    const query = "DELETE FROM project_property_types WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


