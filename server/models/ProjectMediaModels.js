import connection from "../db/db.js";
// Get all project media
export const getAllProjectMediaModel = (callback) => {
    const query = "SELECT * FROM project_media ORDER BY project_id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results);
    });
};

// Get project media by id
export const getProjectMediaByIdModel = (id, callback) => {
    const query = "SELECT * FROM project_media WHERE project_id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results[0]);
    });
};
// Insert new project media INSERT INTO `project_media`(`media_id `,`project_id`)

export const insertProjectMediaModel = (media_id , project_id, callback) => {
    const query = "INSERT INTO project_media (media_id , project_id) VALUES (?, ?)";
    connection.query(query, [media_id , project_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update project media by id
export const updateProjectMediaModel = (project_id , media_id , callback) => {
    const query = "UPDATE project_media SET media_id  = ? WHERE project_id  = ?";   
    connection.query(query, [media_id , project_id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
// Delete project media by id
export const deleteProjectMediaModel = (id, callback) => {
    const query = "DELETE FROM project_media WHERE project_id  = ?";    
    connection.query(query, [id ], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
