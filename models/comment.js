const {Model, Datatypes}= require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
{
    id:{
        type:Datatypes.INTEGER,
        allowNull:false,
        autoIncrement:false,
        primaryKey:true
    },

    comment_content:{
        type:Datatypes.STRING,
        allowNull:true,   
        // unique
    },

    // dateCreated:{
    //     type:Datatypes.DATE,
    //     allowNull:false,
    //     defaultValue:Datatypes.NOW
    // }, using the time stamp for this

    user_id:{
        type:Datatypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    },

    post_id:{
        type:Datatypes.DATE,
        references:{
            model:'post',
            key:'id'
        }
    }
},
{
    sequelize,
    //timestamp by default is true
    freezeTableName:true,
    underscored:true,
    modelName:'comment'
}
);

module.exports=Comment;