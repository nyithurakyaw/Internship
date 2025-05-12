const whiteList = [
    'https://www.google.com',
    'http://localhost:4000'
];
const corsOptions = {
    origin:(origin,callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error("Error from CORS"));
        }
    },
    optionsSuccessStatus:200
}
module.exports = corsOptions