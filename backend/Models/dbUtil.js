const mysql = require('mysql');

let con;

module.exports = {

  connectToServer() {
    con = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'debian-sys-maint',
      password: '8jqKGx7eVh52o3Ux',
      database: 'team_16'
    });
  },

  query(querystring, callback) {
    con.query(querystring, (err, result) => {
      callback(err, result);
    });
  },

  getDb() {
    return con;
  }
};
