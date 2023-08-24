const connection = require('../configs/connectdb');
const blubird = require('bluebird');
const resultsPerPage = 2;


const productPagination =   (req, res) => {
   let sql = "select * from product";
   connection.query(sql, (err, result) => {
    if(err) throw err;
    const numOfResult = result.length;
    const numOfPages = Math.ceil(numOfResult/ resultsPerPage);

    let page = req.query.page ? Number(req.query.page) : 1;
    if(page > numOfPages) {
        res.send('/?page=' + encodeURIComponent(numOfPages));
    }else if( page < 1) {
        res.send('/?page=' + encodeURIComponent('1'));
    }


    const startingLimit = (page - 1) * resultsPerPage;

   var  sqlx = `select * from product LIMIT ${startingLimit}, ${resultsPerPage}`;

    connection.query(sqlx, (err, result) => {
        if(err) throw err;
        res.send(result)
    });

    
   });
};

module.exports = productPagination;