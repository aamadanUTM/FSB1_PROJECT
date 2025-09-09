import connection from "../db/db.js";

export const getAllAreaModel = (callback) => {
  const query = "SELECT * FROM areas order by id";  
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
    });
};

// get area by id
export const getAreaByIdModel = (id, callback) => {
  const query = "SELECT * FROM areas WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// insert area  
export const insertAreaModel = (areaData, callback) => {
  const query = "INSERT INTO areas (name, city_id) VALUES (?, ?)";  
  connection.query(query, [areaData.name, areaData.city_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.insertId);
  });
};

// update area city_id, name by id
export const updateAreaModel = (id, areaData, callback) => {
  const query = "UPDATE areas SET name = ?, city_id = ? WHERE id = ?";
  connection.query(query, [areaData.name, areaData.city_id, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.affectedRows);
  });
};

// delete area by id
export const deleteAreaModel = (id, callback) => {
  const query = "DELETE FROM areas WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.affectedRows);
  });
};  
