const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        minlength : [10, 'Email must be longer than 10 characters'],
        unique : true,
        match: /.+\@.+\..+/
    },
    name : {
        type : String,
        required : true,
        minlength : [3, 'Name must be longer than 2 characters']
    },
    surname : {
        type : String,
        required : true,
        minlength : [2, 'Surname must be longer than 1 character']
    },
    password : {
        type : String,
        required : true
    }
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;