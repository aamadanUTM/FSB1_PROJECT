import connection  from "../db/db.js";
// Get all agents
export const getAllAgentsModel = (callback) => {
    const query = "SELECT * FROM agents ORDER BY id";
    connection.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
// Get agent by id
export const getAgentByIdModel = (id, callback) => {
    const query = "SELECT * FROM agents WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        callback(null, results[0]);
    });
};

// Insert new agent (`full_name`, `phone_e164`, `whatsapp_e164`, `email`, `license_no`, `license_regulator`, `agency_id`, `photo_url`, `is_verified`, `otp_verified_at`)
export const insertAgentModel = (full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
    , is_verified, otp_verified_at, callback) => {
    const query = "INSERT INTO agents (full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url, is_verified, otp_verified_at) VALUES (?,?,?,?,?,?,?,?,?,?)";
    connection.query(query, [full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Update agent by id
export const updateAgentModel = (id, full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
    , is_verified, otp_verified_at, callback) => {
    const query = "UPDATE agents SET full_name = ?, phone_e164 = ?, whatsapp_e164 = ?, email = ?, license_no = ?, license_regulator = ?, agency_id = ?, photo_url = ?, is_verified = ?, otp_verified_at = ? WHERE id = ?";
    connection.query(query, [full_name, phone_e164, whatsapp_e164, email, license_no, license_regulator, agency_id, photo_url
        , is_verified, otp_verified_at, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};


// Delete agent by id
export const deleteAgentModel = (id, callback) => {
    const query = "DELETE FROM agents WHERE id = ?";  
    connection.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

