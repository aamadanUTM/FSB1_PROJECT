import connection from "../db/db.js";

// Get all neighborhoods
export const getAllNeighborModel = (callback) => {
  const query = "SELECT * FROM neighbourhoods ORDER BY id";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Get neighborhood by id
export const getNeighborByIdModel = (id, callback) => {
  const query = "SELECT * FROM neighbourhoods WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Insert new neighborhood
export const insertNeighborModel = (name, area_id, callback) => {
  const query = "INSERT INTO neighbourhoods (area_id, name) VALUES (?, ?)";
  connection.query(query, [area_id, name], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Update neighborhood by id
export const updateNeighborModel = (id, name, area_id, callback) => {
  const query = "UPDATE neighbourhoods SET name = ?, area_id = ? WHERE id = ?";
  connection.query(query, [name, area_id, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Delete neighborhood by id
export const deleteNeighborModel = (id, callback) => {
  const query = "DELETE FROM neighbourhoods WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
   });
};