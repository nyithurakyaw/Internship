
const home = document.getElementById('header');
const library = document.getElementById('library');
const data = document.getElementById('data');
const libraryClass = document.querySelector('.library-class');
const dataClass = document.querySelector('.data-class');

home.addEventListener('click',()=>{
    library.innerHTML = 'Library';
    home.style.color = 'blue';
    libraryClass.style.display = 'block';
});

library.addEventListener('click',()=>{
    data.innerHTML = 'Data';
    library.style.color = 'blue';
    dataClass.style.display = 'block';
});

data.addEventListener('click',()=>{
    home.innerHTML = 'Home';
    home.style.color = 'black';
    library.style.color = 'black';
    library.innerHTML = '';
    data.innerHTML = '';
    libraryClass.style.display = 'none';
    dataClass.style.display = 'none';
});