fetch(`https://lucasbelmiro.com/todos`)
.then(response => {
    response.json()
    .then(data => {
        console.log(data);
    })
})