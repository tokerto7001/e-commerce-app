const mongoose = require('mongoose');
const main = () => {
    mongoose.connect('mongodb://localhost:27017/eCommerce')
    .then(console.log('Connected to the db successfully'))
    .catch(err => console.log(err))
}
main();