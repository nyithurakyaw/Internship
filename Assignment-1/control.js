
let flag1 = false;
let flag2 = false;
let flag3 = false;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const letter1 = document.getElementById('letter1');
const letter2 = document.getElementById('letter2');
const letter3 = document.getElementById('letter3');

btn1.addEventListener('click',()=>{
    console.log('click');
    if(flag1){
        flag1 = false;
        letter1.style.display = 'none';
        btn1.innerHTML = '+';
    }else if(flag2){
        flag2 = false;
    }else if(flag3){
        flag3 = false;
    }else{
        flag1 = true;
        letter1.style.display = 'block';
        btn1.innerHTML = '-';
    }
});
btn2.addEventListener('click',()=>{
    console.log('click');
    if(flag1){
        flag1 = false;
    }else if(flag2){
        flag2 = false;
        letter2.style.display = 'none';
        btn2.innerHTML = '+';
    }else if(flag3){
        flag3 = false;
    }else{
        flag2 = true;
        letter2.style.display = 'block';
        btn2.innerHTML = '-';
    }
});
btn3.addEventListener('click',()=>{
    console.log('click');
    if(flag1){
        flag1 = false;
    }else if(flag2){
        flag2 = false;
    }else if(flag3){
        flag3 = false;
        letter3.style.display = 'none';
        btn3.innerHTML = '+';
    }else{
        flag3 = true;
        letter3.style.display = 'block';
        btn3.innerHTML = '-';
    }
});