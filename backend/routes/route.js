const express = require('express');
const router = express.Router();
const {  userDataValidateChainMethod } = require('../validations/validation');
const { authenticateUser } = require('../middlewares/authenUser');
const account = require('../controllers/account');
const product = require('../controllers/productFn');
const category = require('../controllers/categoryFn');
const productCateogryCtrler = require('../controllers/productCategory')

// user account
router.post('/login' , account.Login);
router.post('/register', account.register);
router.post('/registerAdmin', account.registerAdmin);


// product
router.get('/product', product.productAll);
router.get('/productsearch/', product.searchProduct);
router.get('/sortpro/', product.orderbyProd);
// router.get('/countpro/:id', product.countPro);
router.get('/prod/:id', productCateogryCtrler)
// router.get('/prodx/:id', product.productDetailsCtrler)
router.get('/productFa', product.productAllTEST)


// category
router.get('/category/:id', category.getCategory);
router.get('/category', category.getCategoryAll);



// favorite
router.post('/favorite', product.favoriteFn)
router.delete('/deleteFavorite/:id', product.deleteFavorite)





module.exports = router;