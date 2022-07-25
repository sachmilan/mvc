const {Model, Datatypes}= require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // checkPassword(loginPw){
    //     return bcrypt.compareSync(loginPw,this.password);
    // }
}

User.init(
    {
        id:{
            type:Datatypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },

        username:{
            type:Datatypes.STRING,
            allowNull:false,
            unique:true
        },

        password:{
            type:Datatypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        },
    },
{
    // hooks:{
    //     async beforeCreate(newUserData){
    //         newUserData.password= await bcrypt.hash(newUserData.pass)
    //     }
    // }


    sequelize,
    timeStamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:'user'
}
);

module.exports=User;