const fs = require('fs');
const path = require('path');

fs.readFile('./File/lorem.txt',(err,data)=>{
    if(err)
        throw err;
    console.log(data.toString());
});

fs.writeFile(path.join(__dirname,'File','reply.txt'),'This text file is created',(err)=>{
    if(err)
        throw err;
    console.log("Completed");
    fs.appendFile(path.join(__dirname,'File','reply.txt'),"This is from appen",(err)=>{
        if(err)
            throw err;
        console.log("Append");
        fs.rename(path.join(__dirname,'File','reply.txt'),path.join(__dirname,'File','newReply.txt'),(err)=>{
            if(err)
                throw err;
            console.log("Rename");
        })
    })
    
})

process.on('uncaughtException',err=>{
    console.error(`Error caught exception at : ${err}`);
    process.exit(1);
});