var mysql = require('mysql2')

var pool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:"root",
    password:"hello",
    database:'project730',
    connectionLimit:100

})
module.exports = pool;