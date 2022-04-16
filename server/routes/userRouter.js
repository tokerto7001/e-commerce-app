const router = require('express').Router();
const registerController = require('../controller/userController/registerController');

router.post('/register', registerController);
// router.post('/login', loginController)

module.exports = router;