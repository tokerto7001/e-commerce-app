const router = require('express').Router();
const registerController = require('../controller/userController/registerController');
const loginController = require('../controller/userController/loginController');
const { addCard } = require('../controller/userController/cardController')
const { addFav, deleteFav } = require('../controller/userController/favController')

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/card/:id', addCard);
router.post('/fav/:id', addFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;