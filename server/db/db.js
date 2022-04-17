const mongoose = require('mongoose');
const main = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/eCommerce')
    .then(console.log('Connected to the db successfully'))
    .catch(err => console.log(err))
}
main();