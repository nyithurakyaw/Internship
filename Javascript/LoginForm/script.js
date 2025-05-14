
    const btn = document.getElementById('btn');
    const loginForm = document.getElementById('input-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        // console.log(username.value);
        // console.log(password.value);
        getData(username.value,password.value);
    })


    const getData = async (username,password) => {
        try {
            const response = await fetch('http://localhost:4000/api/auth',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                userName:username,
                password:password
            }),
        })
        if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        // const response = await fetch('http://localhost:4000/api/employee/1');
        const data = await response.json();
        
        console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
