const { query } = require('express');
const connection = require('../configs/connectdb');


const LoginModel = (email, password, callback) => {
    express = "SELECT * FROM account WHERE email = '" + email + "' AND password = '" + password +  "'";
    connection.query(express, callback);
};

module.exports = LoginModel;