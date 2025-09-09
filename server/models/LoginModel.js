import connection from "../db/db.js";
export const LoginModel = (data, callback) => {
  const query = "SELECT * FROM users WHERE username=? AND password_hash=md5(?)";
  connection.query(query, [data.username, data.password], (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results);
  });
};
