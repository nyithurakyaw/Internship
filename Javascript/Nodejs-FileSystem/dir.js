const fs = require('fs');
const path = require('path');

if(!fs.existsSync('./mkdir')){
    fs.mkdir('./mkdir',(err)=>{
        if (err)
            throw err;
        console.log("complete mkdir");
    });
}

if(fs.existsSync('./mkdir')){
    fs.rmdir('./mkdir',(err)=>{
        if (err)
            throw err;
        console.log("rmdir comlete");
    })
}