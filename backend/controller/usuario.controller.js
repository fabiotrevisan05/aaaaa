const Usuario = require('../models/Usuario')

const cadastrar = async (req,res)=> {
   const valores =  req.body
    console.log(valores)

    try{
        await Usuario.create(valores)
        res.status(201).json({message: "Dados cadastrados com sucesso!"})
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }    
}
const listar = async (req,res)=> {
    try{
        const dados = await Usuario.findAll()
        res.status(201).json(dados)
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }
}
const consultar = async (req,res)=> {
    const id = req.params.id
    console.log(id)
    try{
        const dados = await Usuario.findByPk(id)
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }
}

const consultarNome = async (req,res)=> {
    const nome = req.params.nome
    console.log(nome)
    try{
        const dados = await Usuario.findOne({where:{nome:nome}})
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }
}
const apagar = async (req,res)=> {
    const id = req.params.id
    console.log(id)
    try{
        const dados = await Usuario.findByPk(id)
        if(!dados){
            res.status(404).json({message: "Usuário não encontrado"})
        }else{
            await Usuario.destroy({where : { codUsuario: id}})
            res.status(200).json({message: "Usuário excluído com sucesso!"})
        }
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }
}

const atualizar = async (req,res)=> {
    const id = req.params.id
    const valores =  req.body
    console.log(valores)
    console.log(id)
    try{
        const dados = await Usuario.findByPk(id)
        if(!dados){
            res.status(404).json({message: "Usuário não encontrado"})
        }else{
            await Usuario.update(valores,{where : { codUsuario: id}})
            const dados2 = await Usuario.findByPk(id)
            res.status(200).json(dados2)
        }
    }catch(err){
        res.status(500).json({message: "erro ao cadastrar os dados"})
    }
}



module.exports = { cadastrar, listar, consultar, apagar, atualizar,consultarNome }