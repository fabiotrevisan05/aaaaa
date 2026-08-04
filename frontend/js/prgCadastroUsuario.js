let resposta = document.getElementById('resposta')

let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha
    }

    fetch(`http://localhost:3000/usuario`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados!')
    })
})