const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'File','lorem.txt'),{encoding:'utf-8'});

const ws = fs.createWriteStream(path.join(__dirname,'File','newLorem.txt'));

// rs.on('data',(chunk)=>{
//     ws.write(chunk);
// });

rs.pipe(ws);