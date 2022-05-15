const router = require('express').Router();
const registerController = require('../controller/userController/registerController');
const loginController = require('../controller/userController/loginController');
const { addCard } = require('../controller/userController/cardController')
const { addFav, deleteFav } = require('../controller/userController/favController')
const checkAuth = require('../controller/userController/checkAuth');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/card/:id', addCard);
router.post('/fav/:id',isLoggedIn,  addFav);
router.delete('/fav/:id',isLoggedIn, deleteFav);
router.post('/checkAuth', isLoggedIn, checkAuth)

module.exports = router;