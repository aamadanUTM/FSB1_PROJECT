import connection from "../db/db.js";

export const getAllCountriesModel = (callback) => {
  const query = "SELECT * FROM countries order by id";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }   
    callback(null, results);
    });
};

// get country by id
export const getCountryByIdModel = (id, callback) => {
  const query = "SELECT * FROM countries WHERE id = ?"; 
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};



// insert counry name

export const insertCountryModel = (countryName, callback) => {
  const query = "INSERT INTO countries (name) VALUES (?)";
  connection.query(query, [countryName], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};



// update country name by id
export const updateCountryModel = (id, countryName, callback) => {
  const query = "UPDATE countries SET name = ? WHERE id = ?";
  connection.query(query, [countryName, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// delete country by id
export const deleteCountryModel = (id, callback) => {
  const query = "DELETE FROM countries WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    } 
    callback(null, results);
  });
};
