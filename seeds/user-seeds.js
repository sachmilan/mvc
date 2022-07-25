const { User } = require('../models');

const userData = [
    {   
        id: 1,
        username: "qwe",
        email: "qwe@qwe.com",
        password: "qwe123455"
    },
    {
        id: 2,
        username: "abc",
        email: "abc@gmail.com",
        password: "abc12345"
    },
    {
        id: 3,
        username: "xyz",
        email: "xyz@gmail.com",
        password: "xyz12345"
    },
    {
        id: 4,
        username: "try",
        email: "try@gmail.com",
        password: "try12345"
    },
    {
        id: 5,
        username: "uio",
        email: "uio@gmail.com",
        password: "uio12345"
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;