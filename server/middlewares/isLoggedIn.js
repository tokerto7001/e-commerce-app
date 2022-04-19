const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    try{
        console.log(req.headers)
        const { token } = req.headers;
        jwt.verify(token, 'hasan', async(err, decoded) => {
            if(err) {
                res.send('Unauthorized');
            }
            if(decoded) next();
        })
    }catch(err){
        res.send('Invalid input')
    }
}
module.exports = isLoggedIn;