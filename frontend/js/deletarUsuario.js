
let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')
let id = document.getElementById('id')

btn.addEventListener('click',(e) =>{
e.preventDefault()

fetch(`http://localhost:3000/usuario/${id.value}`,{
    method:'DELETE'
})
.then((res)=>res.json())

.then((dados)=>{
    resposta.innerText='Deletado com sucesso'
})
.catch((error)=>{
    console.error('erro',error)
        resposta.innerText='Deletado com errrororororo'

})
})