const router = require('express').Router();
const { Post, Comment, User} = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, async(req,res)=>{
    console.log(req.session);
    try{
        const dbpostdata = await Post.findAll({
            where:{
                user_id:req.session.user_id
            },
            attributes:[
                'id',
                'title',
                'created_at',
                'post_content'
            ],
            include:[
                {
                    model:Comment
                },
                {
                    model:User,
                    attributes:['username']
                }
            ]
        });

        const posts = dbpostdata.map(post=>post.get({plain:true}));
        console.log(posts);
        res.render('dashboard',{posts, loggedIn:req.session.loggedIn});
    }catch(err){
        res.status(500).json({
            message:'Internal server error',
            error:err
        });
    }
});


// ASK RICHARD QUESTIONS