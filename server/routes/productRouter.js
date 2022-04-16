const router = require('express').Router();
const allProductsController = require('../controller/productController/allProductsController');
const oneProductController = require('../controller/productController/oneProductController');

router.get('/', allProductsController);
router.get('/detail/:id', oneProductController);

module.exports = router;