let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')
let nome = document.getElementById('nome')

btn.addEventListener('click',(e) =>{
e.preventDefault()
const nomeUsuario = nome.value.trim();

fetch(`http://localhost:3000/usuario/nome/${encodeURIComponent(nomeUsuario)}`,{
   
})
.then((res)=>res.json())

.then((dados)=>{
    resposta.innerHTML=``
    resposta.innerHTML+=`
    <tr>
    <td>${dados.codUsuario}/<td>
    <td>${dados.email}/<td>
    <td>${dados.senha}/<td>

    `
})
.catch((error)=>{
    console.error('erro',error)
        resposta.innerText='consultar com errrororororo'

})
})