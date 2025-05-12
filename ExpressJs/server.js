const express = require('express');
const path = require('path');
const rootdir = require('./routes/root');
const subdir = require('./routes/subdir');
const employee = require('./routes/api/employee');
const {logger} = require('./middleware/logEvent');
const errorhandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOption');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
console.log(__dirname);
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(cors(corsOptions));
app.use('/',express.static(path.join(__dirname,'/public')));
app.use('/subdir',express.static(path.join(__dirname,'/public')));

app.use(logger);

app.use('/',rootdir);
app.use('/subdir',subdir);
app.use('/api/employee',employee);

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