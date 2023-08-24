const connection = require('../configs/connectdb');


const Addcategory =  (req, res) => {
    const product = req.body;
   let sql = "Insert INTO category(name) values(?)";
   connection.query(sql, [product.name], (err, result) => {
    if(err) throw err;
    res.status(200).json({message: "Inseted Category successfully"})
   });
};

const deleteCategory =  (req, res) => {
    const id = req.params.id;
   let sql = "DELETE FROM category Set id ?";
   connection.query(sql, [id], (err, result) => {
    if(err) throw err;
    res.status(200).json({message: `Deleted Category successfully ${id}`});
   });
};



const getCategory =  function(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM category WHERE id = ?";
    connection.query(sql, [id], function(err, data) {
        if (data.length > 0) {
           res.json({message: "success", result: data});
        } else {
           res.json('erro')
        }
        
    })
};
const getCategoryAll =  function(req, res) {
    let sql = "SELECT * FROM category ";
    connection.query(sql,  function(err, data) {
        if (data.length > 0) {
           res.json({message: "success", result: data});
        } else {
           res.json('erro')
        }
        
    })
};


const searchCategory = (req, res) => {
    let name = req.params.name;
    connection.query(
      `SELECT * FROM category WHERE name LIKE '%${name}%'`,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
};

const updateCategory = (req, res) => {
    let id = req.params.id;
   let sql="UPDATE category SET ? WHERE id = ?";
   connection.query(sql, [req.body, id], function(err, result) {
     res.json("Updated category");
   });
};

module.exports = {Addcategory, deleteCategory,getCategory,searchCategory,updateCategory,getCategoryAll};
