const router = require('express').Router();
const {User, Post, Comment}= require('../models');

router.get('/',async(req,res)=>{
    try{
        const dbpostdata = await Post.findAll({
            attributes:[
                'id',
                'title',
                'post_content',
                'created_at'
            ],
            include:[
                {
                    model:Comment
                },
                {
                    model:User,
                    attributes:[
                        'username'
                    ]
                }
            ]
        });
        const posts = dbpostdata.map(post=>post.get({plain:true}));
        res.render('homepage',{posts,loggedIn:req.session.loggedIn});
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:'Internal Server error',
            error:err
        });
    };
});

router.get('./post/:id',async(req,res)=>{
    try{
        const dbpostdata = await Post.findOne({
            where:{
                id:req.params.id,
            },
            attributes:[
                'id',
                'title',
                'post_created',
                'created_at'
            ],
            include:[
                {
                    model:Comment,
                    attributes:[
                        'id',
                        'comment_content',
                        'post_id',
                        'user_id',
                        'created-id'
                    ],
                    include:{
                        model:User,
                        attributes:['username']
                    }
                },
                {
                    model:User,
                    attributes:['username']
                }
            ]
        });
        if(!dbpostdata){
            res.status(404).json({
                message:'No post found with this id',
            });
            return;
        }
        const post = dbpostdata.get({plain:true});
        res.render('thread',{post,loggedIn:req.session.loggedIn});
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:'Internal server error',
            error:err
        });
    };
});

router.get('/login',async(req,res)=>{
    if(req.session.loggedIn){
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('./signup',async(req,res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;