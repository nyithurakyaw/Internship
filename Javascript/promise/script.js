
const myPromise = new Promise((resolve,reject)=>{
    const flag = true;
    if(!flag){
        resolve("This is from resolve");
    }
    else{
        reject("This is from reject");
    }
});

// console.log(myPromise);
// myPromise.then(res=>console.log(res)).catch(error=>console.log(error));
const jokeObj = {
    id:"123we21",
    joke:"Three camel cannoflage ,fragment"
}

const getJokeData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const data = await response.json();
    console.log(data);
}
getJokeData(jokeObj);