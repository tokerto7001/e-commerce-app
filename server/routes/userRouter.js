const router = require('express').Router();
const registerController = require('../controller/userController/registerController');
const loginController = require('../controller/userController/loginController');


router.post('/register', registerController);
router.post('/login', loginController)

module.exports = router;