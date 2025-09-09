import connection from "../db/db.js";

// Get all property_types
export const getAllPropertyTypeModel = (callback) => {
  const query = "SELECT * FROM property_types ORDER BY id";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, results);
  });
};

// Get property_types by id
export const getPropertyTypeByIdModel = (id, callback) => {
  const query = "SELECT * FROM property_types WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Insert new property_types
export const insertPropertyTypeModel = (name, callback) => {
  const query = "INSERT INTO property_types (name) VALUES (?)";
    connection.query(query, [name], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
    });
};

// Update property_types by id
export const updatePropertyTypeModel = (id, name,  callback) => {
  const query = "UPDATE property_types SET name = ?  WHERE id = ?";
  connection.query(query, [name, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Delete property_types by id
export const deletePropertyTypeModel = (id, callback) => {
  const query = "DELETE FROM property_types WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
   });
};