
const myPromise = new Promise((resolve,reject)=>{
    const flag = true;
    if(!flag){
        resolve("This is from resolve");
    }
    else{
        reject("This is from reject");
    }
});

console.log(myPromise);
myPromise.then(res=>console.log(res)).catch(error=>console.log(error));