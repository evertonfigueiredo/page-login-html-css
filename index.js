// fetch(`https://lucasbelmiro.com/todos`)
// .then(response => {
//     response.json()
//     .then(data => {
//         console.log(data);
//     })
// })

fetch(`https://lucasbelmiro.com/save`,{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        nome: "Everton Figueiredo",
        email: "evertonfi@tera.com",
        senha: "123456789"
    }
})
.then(response => {
    response.json()
    .then(data => {
        console.log(data);
    })
})