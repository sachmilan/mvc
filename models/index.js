const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// User - Post association
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User);

// User - Comment association
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User);

// Post - Comment association
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});
Comment.belongsTo(Post, {
    onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };