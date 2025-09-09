import connection from "../db/db.js";

export const getAllCityModel = (callback) => {
  const query = "SELECT * FROM cities order by id";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }   
    callback(null, results);
    });
};

// get country by id
export const getCityByIdModel = (id, callback) => {
  const query = "SELECT * FROM cities WHERE id = ?"; 
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};


// insert city

export const insertCityModel = (cityData, callback) => {
  const query = "INSERT INTO cities (name, state_id) VALUES (?, ?)";
  connection.query(query, [cityData.name, cityData.state_id], (err, results) => {
    if (err) {
      return callback(err, null);
    } 
    callback(null, results.insertId);
  });
};

// update city state_id, name by id
export const updateCityModel = (id, cityData, callback) => {
  const query = "UPDATE cities SET name = ?, state_id = ? WHERE id = ?";
  connection.query(query, [cityData.name, cityData.state_id, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.affectedRows);
  });
};

// delete city by id
export const deleteCityModel = (id, callback) => {
  const query = "DELETE FROM cities WHERE id = ?";  
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.affectedRows);
  });
};