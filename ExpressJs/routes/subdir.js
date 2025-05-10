const express = require('express');
const path = require('path');

const router = express.Router();
router.get('/index',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','views','subdir','index.html'))
});


module.exports = router;