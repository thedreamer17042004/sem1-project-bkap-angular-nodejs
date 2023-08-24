const connection = require('../configs/connectdb');


const productDetailsModel = (productId, callback) => {
    query1 = "SELECT name, price,sale_price, image, description FROM product WHERE id = ?";
    connection.query(query1, [productId], callback);
};

module.exports = productDetailsModel;