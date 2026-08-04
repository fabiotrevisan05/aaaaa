const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('Usuario',{
    codUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    senha: {
         type: DataTypes.STRING(40),
        allowNull: false
    }    
},{
    tableName: 'usuarios',
    timestamps: false
})
module.exports = Usuario
