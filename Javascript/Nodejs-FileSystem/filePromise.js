const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        // const data = await fsPromise.readFile(path.join(__dirname,'File','newReply.txt'),'utf8');
        await fsPromise.writeFile(path.join(__dirname,'File','test.txt'),'This is a test');
        // await fsPromise.appendFile(path.join(__dirname,'File','newReply.txt'),'\n\nThis is a append again');
        // await fsPromise.rename(path.join(__dirname,'File','newReply.txt'),path.join(__dirname,'File','reply.txt'));
        const newData = await fsPromise.readFile(path.join(__dirname,'File','reply.txt'),'utf-8');
        await fsPromise.unlink(path.join(__dirname,'File','test.txt'));
        console.log(newData);
    } catch (error) {
        console.error(error);
    }

}

fileOps();