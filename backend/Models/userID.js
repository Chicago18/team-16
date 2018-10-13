const dbUtil = require('dbUtil.js');

exports.all = (callback) => {
  dbUtil.getDb().query(`SELECT * FROM userID`, (err, result) => {
    callback(err, result);
  });
};

exports.get = (id, callback) => {
  dbUtil.getDb().query(`SELECT * FROM userID WHERE id=${id}`, (err, result) => {
    callback(err, result);
  });
};

exports.new = (userID, ergId) => {
  dbUtil.getDb().query(`INSERT INTO userID VALUES ("${userID}", "${ergID}")`, (err, result) => {
    callback(err, result);
  });
};

// exports.update = (id, newUsername, newPassword, callback) => {
//   const hashResult = cryptoUtil.saltHashPassword(newPassword);
//   dbUtil.getDb().query(`UPDATE users SET username="${newUsername}", password="${hashResult.passwordHash}", salt="${hashResult.salt}" WHERE id=${id}`, (err, result) => {
//     callback(err, result);
//   });
// };

exports.delete = (id, callback) => {
  dbUtil.getDb().query(`DELETE FROM userID WHERE id=${id}`, (err, result) => {
    callback(err, result);
  });
};
