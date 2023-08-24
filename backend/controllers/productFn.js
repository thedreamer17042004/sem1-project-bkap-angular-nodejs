const connection = require('../configs/connectdb');
const productDetailLastestModel = require('../models/productLastest');
const productDetailsModel = require('../models/productDetail');
const productModel = require('../models/product');


const productAll = (req, res) => {
    let query2 = "select * from product";
    connection.query(query2,  (err, result) => {
        if(!err) {
            if(result.length <= 0) {
                res.send(404);
            }else {
                res.status(200).send({message: "thanh cong to see a sale product", result: result});
            }
        }else {
            res.status(500).json(err);
        }
    });
};

const productAllTEST = (req, res) => {
    let query2 = "SELECT product.*, count(f.id) as isFavorite FROM product  LEFT JOIN favourite f ON f.product_id = product.id  GROUP BY product.id";
    connection.query(query2,  (err, result) => {
        if(!err) {
            if(result.length <= 0) {
                res.send(404);
            }else {
                res.status(200).send({message: "thanh cong to see a sale product", result: result});
            }
        }else {
            res.status(500).json(err);
        }
    });
};


const updateProduct = (req, res) => {
    let id = req.params.id;
   let sql="UPDATE product SET ? WHERE id = ?";
   connection.query(sql, [req.body, id], function(err, result) {
     res.json("Updated product")
   });
};


const searchProduct = (req, res) => {
    let name = req.query.name;
    connection.query(
      `SELECT * FROM product WHERE name LIKE '%${name}%'`,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
};


const productCtrler = (req, res) => {
    productModel((err, result) => {
        if(!err) {
            if(result.length <= 0) {
                res.send(404);
            }else {
                res.status(200).json({message: "thanh cong to see a sale product"});
            }
        }else {
            res.status(500).json(err);
        }
    });
    
};

const countPro = (req, res) => {
    var categoryId = req.params.id;
    query1 = "SELECT count(*) FROM product WHERE category_id = ?";
    connection.query(query1, [categoryId], (error, result) => {
        if(!error) {
            if(result.length > 0) {
                res.json({
                    message: "thanh cong",
                    result: result
                })
            }

        }else {
            res.json("Loi roi")
        }
    });

}

const productDetailsLastestCtrler = (req, res) => {
    productDetailLastestModel((err, result) => {
        console.log(result);
        if(!err) {
            if(result.length <= 0) {
                res.status(404).json({message: "No product new"});
            }else {
                res.status(200).json({message: "this is the last product"});
            }
        }else {
            res.status(500).json(err);
        }
    });
    
};


const productDetailsCtrler = (req, res) => {
    var productId = req.params.id;
    productDetailsModel(productId, (err, result) => {
        console.log(result);
        if(!err) {
            if(result.length <= 0) {
                res.status(404).json({message: "Product not found"});
            }else {
                res.status(200).json({message: "You can see the product details with the id", result:result});
            }
        }else {
            res.status(500).json(err);
        }
    });
    
};




const deleteProduct =  (req, res) => {
    const id = req.params.id;
   let sql = "DELETE FROM product Set id ?";
   connection.query(sql, [id], (err, result) => {
    if(err) throw err;
    res.status(200).json({message: `Deleted product successfully ${id}`});
   });
};



const Addproduct =  (req, res) => {
    const product = req.body;
   let sql = "Insert INTO product(name, price, sale_price, image, category_id,description) values(?,?,?,?,?,?)";
   connection.query(sql, [product.name, product.price, product.sale_price, product.image, product.category_id, product.description], (err, result) => {
    if(err) throw err;
    res.status(200).json({message: "thanh cong"})
   });
};

const orderbyProd = (req, res) => {
    const value = req.query.name;
    const value1 = req.query.desc;
    let sql = `select * from product order by ${value} ${value1} `

    connection.query(sql, (error, result) => {
        console.log(result)
        if(!error) {
            if(result.length > 0) {
                res.json({
                    message: "thnahc ong",
                    result: result
                })
            }
        }else {
            res.json({message: "LOI ROI"})
        }
    });
}
const  favoriteFn = (req, res) => {
    const body = req.body;
    var sql = "select * from favourite where account_id = ? and product_id = ?"
    connection.query(sql, [body.account_id, body.product_id], (error, result) => {
        if(!error) {
            if(result.length > 0) {
                var sqlDelet = "DELETE from favourite where account_id = ? and product_id = ?";
                connection.query(sqlDelet, [body.account_id, body.product_id], (err, resul) => {
                    if(!err) {
                        res.json({
                            message: "Thanh cong xoa",
                            result: resul
                        })
                    }else {
                        res.json("Loi roi 1")
                    }
                });
            }else {
                var sqlinsert = "insert into favourite set ?";
                connection.query(sqlinsert, [body], (error, resu) => {
                    if(!error) {
                        res.json({
                            message: "thanh cong thich",
                            result: resu
                        });
                    }else {
                        res.json("Loi roi 2")
                    }
                });
            }
        }else {
            console.log(result)
            res.json("Loi roi 3")
        }
    });
}
const  deleteFavorite = (req, res) => {
    const body = req.params.id;
    var sql = "DELETE FROM favourite WHERE product_id = ?;"
    connection.query(sql, body, (error, result) => {
        if(!error) {
            res.json({
                message: "Thanh cong xoa",
                result: result
            })
        }else {
            res.json("Loi roi 3")
        }
    });
}
module.exports = {updateProduct,
    productCtrler,searchProduct,
    deleteProduct, 
    Addproduct,productDetailsLastestCtrler,
     productDetailsCtrler,productAll
    ,countPro,orderbyProd,
    favoriteFn,productAllTEST,
    deleteFavorite};