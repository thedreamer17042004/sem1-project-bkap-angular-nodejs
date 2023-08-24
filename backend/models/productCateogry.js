const connection = require('../configs/connectdb');


const productCateogryModel = (categoryId, callback) => {
    query1 = "SELECT * FROM product WHERE category_id = ?";
    connection.query(query1, [categoryId], callback);
};

module.exports = productCateogryModel;