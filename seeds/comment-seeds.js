const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_content: "Wow... that is something."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_content: "You have my computer."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_content: "Hey man, what's up?"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_content: "Hello"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "How are you?"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_content: "Thant is awesome"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_content: "It looks good."
    },
    {
        user_id: 2,
        post_id: 2,
        comment_content: "Hey, welcome."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "Thanks everyone!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_content: "Hi"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_content: "Good knowledge."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_content: "It looks so cool!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_content: "That is a good information."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_content: "Work for it!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_content: "No doubt."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_content: "We are there for you!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_content: "Be easy on yourself."
    },
    {
        user_id: 5,
        post_id: 4,
        comment_content: "Good job"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_content: "It is good."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_content: "Good job man."
    },
    {
        user_id: 4,
        post_id: 5,
        comment_content: "You deserve it"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;