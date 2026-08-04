let resposta = document.getElementById('resposta');
let btn = document.getElementById('btn');
let id = document.getElementById('id');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const idUsuario = id.value.trim();

    fetch(`http://localhost:3000/usuario/id/${idUsuario}`)
        .then((res) => res.json())

        .then((dados) => {

            resposta.innerHTML = `
                <tr>
                    <td>${dados.codUsuario}</td>
                    <td>${dados.nome}</td>
                    <td>${dados.email}</td>
                    <td>${dados.senha}</td>
                </tr>
            `;
        })

        .catch((error) => {
            console.error('Erro:', error);
            resposta.innerHTML = "Erro ao consultar usuário";
        });
});
