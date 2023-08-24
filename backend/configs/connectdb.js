const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsangular'
});

connection.connect(function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log('connected successfully');
    }
});

module.exports = connection;