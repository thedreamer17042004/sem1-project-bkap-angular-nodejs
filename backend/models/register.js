const connection = require('../configs/connectdb');


const registerModel = (email, callback) => {
    query1 = "SELECT * FROM account WHERE email = '" + email + "'";
    connection.query(query1, callback);
};

module.exports = registerModel;