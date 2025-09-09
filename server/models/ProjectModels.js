import connection from "../db/db.js";

// Get all projects
export const getAllProjectsModel = (callback) => {
  const query = "SELECT * FROM projects ORDER BY id";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Get project by id
export const getProjectByIdModel = (id, callback) => {
  const query = "SELECT * FROM projects WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Insert new project
// INSERT INTO `projects`( `name`, `completion_year`, `description_md`, `total_units`, `total_floors`, `latitude`, `longitude`, `address_line1`, `neighbourhood_id`, `created_at`, `updated_at`)
export const insertProjectModel = (name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, callback) => {
  const query = `INSERT INTO projects 
  (name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, created_at, updated_at) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
  connection.query(query, [name, completion_year, , total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id], (err, result) => {
    if (err) {description_md
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Update project by id
export const updateProjectModel = (id, name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, callback) => {
  const query = `UPDATE projects 
  SET name = ?, completion_year = ?, description_md = ?, total_units = ?, total_floors = ?, latitude = ?, longitude = ?, address_line1 = ?, neighbourhood_id = ?, updated_at = NOW() 
  WHERE id = ?`;
  connection.query(query, [name, completion_year, description_md, total_units, total_floors, latitude, longitude, address_line1, neighbourhood_id, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Delete project by id
export const deleteProjectModel = (id, callback) => {
  const query = "DELETE FROM projects WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};
