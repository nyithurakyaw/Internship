const allowOrigin = require('./allowOrigin')
const corsOptions = {
    origin:(origin,callback) => {
        if(allowOrigin.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error("Error from CORS"));
        }
    },
    optionsSuccessStatus:200
}
module.exports = corsOptions