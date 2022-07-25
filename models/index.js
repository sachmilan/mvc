const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

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