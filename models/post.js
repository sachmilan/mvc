const {Model, Datatypes}=require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
{
    id:{
        type:Datatypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    postTitle:{
        type:Datatypes.STRING,
        allowNull:false
    },

    postContent:{
        type:Datatypes.STRING,
        allowNull:false
    },

    // dateCreated:{
    //     type:Datatypes.DATE,
    //     allowNull:false
    // },

    user_id:{
        type:Datatypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    }
},
{
    sequelize,
    freezeTableName:true,
    modelName:'post',
    underscored:true
}
);

module.exports=Post;
