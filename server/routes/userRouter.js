const router = require('express').Router();
const registerController = require('../controller/userController/registerController');
const loginController = require('../controller/userController/loginController');
const { addCard } = require('../controller/userController/cardController')


router.post('/register', registerController);
router.post('/login', loginController);
router.post('/card/:id', addCard);

module.exports = router;