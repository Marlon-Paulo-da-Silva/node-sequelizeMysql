const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const UsuarioEstablishment = require('../models/UsuarioEstablishment');

const connection = new Sequelize(dbConfig)

UsuarioEstablishment.init(connection);

module.exports = connection;
