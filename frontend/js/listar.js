let resposta = document.getElementById('resposta');
let btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
e.preventDefault()

fetch('http://localhost:3000/usuarios')
    .then((res) => res.json())

    .then((dados) => {

        resposta.innerHTML = '';

        dados.forEach((usuario) => {

            resposta.innerHTML += `
                <tr>
                    <td>${usuario.codUsuario}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.senha}</td>
                </tr>
            `;

        });

    })

    .catch((error) => {
        console.error('Erro:', error);
        resposta.innerHTML = 'Erro ao listar usuários';
    })
    })