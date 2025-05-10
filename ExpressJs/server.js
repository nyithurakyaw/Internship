const express = require('express');
const path = require('path');
const {logger} = require('./middleware/logEvent');
const errorhandler = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
console.log(__dirname);
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const whiteList = ['https://www.google.com','http://127.0.0.1:4000','http://localhost:4000/'];
const corsOptions = {
    origin:(origin,callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null ,true);
        }else{
            callback(new Error('not allow by ccors'));
        }
    },
    optionsSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname,'public')));

app.use(logger);

app.get(/^\/index(\.html)?$/,(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/hello',(req,res,next)=>{
    console.log("this attemp to hello");
    next();
},(req,res) => {
    res.json({
        message:"Hello fr"
    });
});

app.use('/subdir',require('./routes/subdir'));

app.all('*name',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));
    }else if(req.accepts('json')){
        res.json("Not found");
    
    }else{
        res.json("Not found");
    }
})
app.use(errorhandler);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`);
});