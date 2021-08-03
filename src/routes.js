const express = require('express')
const UsuarioEstablishmentController = require('./controllers/UsuarioEstablishmentController')

const routes = express.Router();

routes.get('/ola', (req, res) => {
    res.send('Olá, mundo')
})

routes.get('/usuarioestablishment', UsuarioEstablishmentController.index)
routes.get('/usuarioestablishment/:id', UsuarioEstablishmentController.findById)
routes.post('/usuarioestablishment', UsuarioEstablishmentController.store)
routes.delete('/usuarioestablishment/:id', UsuarioEstablishmentController.delete)
routes.put('/usuarioestablishment', UsuarioEstablishmentController.update)


module.exports = routes;