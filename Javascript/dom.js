document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === 'complete'){
        console.log("Complete");
        initApp();
    }
});

const initApp = () => {
    const view1 = document.querySelector(".view1");
    const view2 = document.querySelector(".view2");
    const h1 = document.querySelector('h1');
    view1.addEventListener('click',()=>{
        view1.style.backgroundColor = "black";
    });
    view2.addEventListener('click',()=>{
        view2.style.backgroundColor = "green";
    });
    h1.addEventListener('click',()=>{
        h1.innerHTML = "You clicked";
        h1.style.color = "white";
    });
}