const UsuarioEstablishment = require('../models/UsuarioEstablishment')

module.exports = {
    async index(req, res){
        const usuarioEstablishment = await UsuarioEstablishment.findAll();
        return res.json(usuarioEstablishment);
    },

    async findById(req, res) {
        const { id } = req.params;
        const usuarioEstablishment = await UsuarioEstablishment.findAll(
            {
                where: {
                    id: id
                }
            }
        );
        return res.json(usuarioEstablishment);
    },
    async store(req, res) {
        const { name_user, password } = req.body;
        const usuarioEstablishment = await UsuarioEstablishment.create({name_user, password});
        return res.json(usuarioEstablishment);
    },
    async delete(req, res) {
        const { id } = req.params;
        const usuarioEstablishment = await UsuarioEstablishment.destroy(
            {
                where: {
                    id: id
                }
            }
        );
        return res.json(usuarioEstablishment);
    },
    async update(req, res) {
        const { id, name_user, password } = req.body;
        const usuarioEstablishment = await UsuarioEstablishment.update(
            {
                name_user, password
            },{
                where: {
                    id: id
                }
            }
            );
        return res.json(usuarioEstablishment);
    }
}