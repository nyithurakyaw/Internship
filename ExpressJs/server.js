require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dbConn = require('./config/dbConn');
const path = require('path');
const rootdir = require('./routes/root');
const subdir = require('./routes/subdir');
const employee = require('./routes/api/employee');
const register = require('./routes/api/registerUser');
const auth = require('./routes/api/auth');
const refresh = require('./routes/api/refresh');
const logout = require('./routes/api/logout');
const verifyJWT = require('./middleware/verifyJWT');
const {logger} = require('./middleware/logEvent');
const errorhandler = require('./middleware/errorHandler');
const credential = require('./middleware/credential');
const corsOptions = require('./config/corsOption');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4000;
dbConn();
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.json());
app.use(logger);
app.use(credential);
// app.use(cors());
app.use(cors(corsOptions));
app.use('/',express.static(path.join(__dirname,'/public')));
app.use('/subdir',express.static(path.join(__dirname,'/public')));


app.use('/',rootdir);
app.use('/subdir',subdir);
app.use('/api/register',register);
app.use('/api/auth',auth);
app.use('/api/refresh',refresh);
app.use('/api/logout',logout);
app.use(verifyJWT);
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
mongoose.connection.once('open',()=>{
    console.log("Connect to mongodb");
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT: ${PORT}`);
    });
})
