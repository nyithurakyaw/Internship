const allowOrigin = require('../config/allowOrigin')

const credential = (req,res,next) => {
    const origin = req.headers.origin;
    if(allowOrigin.includes(origin))
        res.header('Access-Control-Allow-Credentials', 'true');
    next();
}

module.exports = credential