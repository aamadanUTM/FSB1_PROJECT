import connection from "../db/db.js";

// Get all project_facilities
export const getAllProjectFacilitiesModel = (callback) => {
    const query = "SELECT * FROM project_facilities ORDER BY project_id ";   
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get project_facilities by id
export const getProjectFacilitiesByIdModel = (id, callback) => {
    const query = "SELECT * FROM project_facilities WHERE project_id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Insert new project_facilities INSERT INTO `project_facilities`(project_id, `amenity_id `)
export const insertProjectFacilitiesModel = (project_id, amenity_id , callback) => {
    const query = "INSERT INTO project_facilities (project_id,amenity_id ) VALUES (?,?)";
    connection.query(query, [project_id,amenity_id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update project_facilities by id
export const updateProjectFacilitiesModel = (project_id , amenity_id , callback) => {
    const query = "UPDATE project_facilities SET amenity_id  = ? WHERE project_id  = ?";
    connection.query(query, [amenity_id , project_id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Delete project_facilities by id
export const deleteProjectFacilitiesModel = (id, callback) => {
    const query = "DELETE FROM project_facilities WHERE project_id  = ?";
    connection.query(query, [project_id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};



