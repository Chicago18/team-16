const dbUtil = require('../helpers/dbUtil.js');
const cryptoUtil = require('../helpers/cryptoUtil.js');

exports.all = (callback) => {
  dbUtil.getDb().query(`SELECT * FROM users`, (err, result) => {
    callback(err, result);
  });
};

exports.get = (id, callback) => {
  dbUtil.getDb().query(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
    callback(err, result);
  });
};

exports.new = (username, password, isAdmin, callback) => {
  const hashResult = cryptoUtil.saltHashPassword(password); // object= {passwordHash, salt}
  dbUtil.getDb().query(`INSERT INTO users (username, password, salt, isAdmin) VALUES ("${username}", "${hashResult.passwordHash}", "${hashResult.salt}", ${isAdmin})`, (err, result) => {
    callback(err, result);
  });
};

exports.update = (id, newUsername, newPassword, callback) => {
  const hashResult = cryptoUtil.saltHashPassword(newPassword);
  dbUtil.getDb().query(`UPDATE users SET username="${newUsername}", password="${hashResult.passwordHash}", salt="${hashResult.salt}" WHERE id=${id}`, (err, result) => {
    callback(err, result);
  });
};

exports.delete = (id, callback) => {
  dbUtil.getDb().query(`DELETE FROM users WHERE id=${id}`, (err, result) => {
    callback(err, result);
  });
};
