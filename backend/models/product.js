const connection = require('../configs/connectdb');


const productModel = (callback) => {
    query1 = "SELECT name, price,sale_price, image, description FROM product WHERE sale_price != 0";
    connection.query(query1, callback);
};

module.exports = productModel;