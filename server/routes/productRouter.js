const router = require('express').Router();
const allProductsController = require('../controller/productController/allProductsController');
const oneProductController = require('../controller/productController/oneProductController');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.post('/', allProductsController);
router.get('/detail/:id', isLoggedIn, oneProductController);

module.exports = router;