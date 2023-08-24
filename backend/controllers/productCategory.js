const productCateogryModel = require('../models/productCateogry');

const productCateogryCtrler = (req, res) => {
    var categoryId = req.params.id;
    productCateogryModel(categoryId, (err, result) => {
        if(!err) {
            if(result.length <= 0) {
                res.status(404).json({message: "Product not found"});
            }else {
                res.status(200).json({message: "You can see the product list with the category", result: result});
            }
        }else {
            res.status(500).json(err);
        }
    });
    
};

module.exports = productCateogryCtrler;