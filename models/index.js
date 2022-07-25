const User = require('./user');
const Post = require('./post');
const Comment= require('./comment');


//relations missing

User.hasMany(Post,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Post.belongsTo(User,{
    foreignKey:'user_id',
});

Post.hasMany(Comment,{
    foreignKey:'post_id',
    onDelete:cascade
});

Comment.belongsTo(Post,{
    foreignKey:'post_id',
});


module.exports={
    User,
    Comment,
    Post
};