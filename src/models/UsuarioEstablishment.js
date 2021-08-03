const {Model, DataTypes} = require('sequelize')

class UsuarioEstablishment extends Model {
    static init(sequelize){
        super.init({
            name_user: DataTypes.STRING,
            password: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = UsuarioEstablishment;