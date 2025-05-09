
const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data[0]);
    const body = document.getElementById('body')
    data.forEach((post,index)=>{
        const div = document.createElement('div');
        const userId = document.createElement('p');
        const id = document.createElement('p');
        const title = document.createElement('p');
        const innerBody = document.createElement('p');
        userId.textContent = `User  ID: ${post.userId}`;
        id.textContent = `ID: ${post.id}`;
        title.textContent = `Title: ${post.title}`;
        innerBody.textContent = `Body: ${post.body}`;
        div.appendChild(userId);
        div.appendChild(id);
        div.appendChild(title);
        div.appendChild(innerBody);
        body.appendChild(div);       

    });
}
fetchData();