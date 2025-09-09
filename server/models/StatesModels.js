import connection from "../db/db.js";

export const getAllStatesModel = (callback) => {
  const query = `
  SELECT s.id AS state_id,
  c.name          AS country_name,
  s.name          AS state_name  
FROM states AS s
JOIN countries AS c ON c.id = s.country_id
ORDER BY c.name, s.name
`;
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }   
    callback(null, results);
    });
};

// get state by id
export const getStatesByIdModel = (id, callback) => {
  const query = `
    SELECT s.id AS state_id,
           c.name AS country_name,
           s.name AS state_name  
    FROM states AS s
    JOIN countries AS c ON c.id = s.country_id
    WHERE s.id = ?`; // Fixed: removed comma and used s.id
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// insert state
export const insertStateModel = (name, country_id, callback) => {
  const query = "INSERT INTO states (name, country_id) VALUES (?, ?)";
  connection.query(query, [name, country_id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};


// update state
export const updateStateModel = (id, name, country_id, callback) => {
  const query = "UPDATE states SET name = ?, country_id = ? WHERE id = ?";  
  connection.query(query, [name, country_id, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};


// delete state
export const deleteStateModel = (id, callback) => {
  const query = "DELETE FROM states WHERE id = ?";  
  connection.query(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};


