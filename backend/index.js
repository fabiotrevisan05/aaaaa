const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const usuarioController = require('./controller/usuario.controller')

const hostname = 'localhost' // 127.0.0.1
const PORT = 3000

// ---- Middleware ---------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -------------------------

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuarios', usuarioController.listar)
app.get('/usuario/id/:id', usuarioController.consultar)
app.get('/usuario/nome/:nome', usuarioController.consultarNome);


app.delete('/usuario/:id', usuarioController.apagar)
app.put('/usuario/:id', usuarioController.atualizar)

app.get('/', (req,res)=>{
    res.json({message: 'Aplicação rodando!'})
})

// --------------------------
conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        //console.log(`Servidor rodando`)
    })
})
.catch((err)=>{
    console.error('Erro ao sincronizar com o BD!')
})








