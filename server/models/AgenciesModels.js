import connection from "../db/db.js";
// Get all agencies
export const getAllAgenciesModel = (callback) => {
    const query = "SELECT * FROM agencies ORDER BY name";    
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Get agency by id
export const getAgencyByIdModel = (id, callback) => {
    const query = "SELECT * FROM agencies WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Insert new agency INSERT INTO `agencies`(`name`, `regulator_id`, `address`, `phone`)
export const insertAgencyModel = (name, regulator_id, address, phone, callback) => {
    const query = "INSERT INTO agencies (name, regulator_id, address, phone) VALUES (?,?,?,?)";
    connection.query(query, [name, regulator_id, address, phone], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update agency by id
export const updateAgencyModel = (id, name, regulator_id, address, phone, callback) => {
    const query = "UPDATE agencies SET name = ?, regulator_id = ?, address = ?, phone = ? WHERE id = ?";
    connection.query(query, [name, regulator_id, address, phone, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};



// Delete agency by id
export const deleteAgencyModel = (id, callback) => {
    const query = "DELETE FROM agencies WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

