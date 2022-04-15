const router = require('express').Router();
const allProductsController = require('../controller/allProductsController');
const oneProductController = require('../controller/oneProductController');

router.get('/', allProductsController);
router.get('/detail/:id', oneProductController);

module.exports = router;