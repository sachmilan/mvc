const router = require('express').Router();
const{comment}= require('../../models');
const withAuth = require('../../utils/withAuth');

router.post('/', withAuth, async(req,res)=>{
    if(req.session.loggedIn){

        console.log(req.body, req.session);
    
    try{
        const createdComment = await Comment.create({
            comment_content:req.body.comment_content,
            post_id:req.body.post_id,
            user_id:req.body.user_id
        });
        res.status(200).json(createdComment);
    }catch(err){
        res.status(500).json({
            message:"Internal server error",
            error:err
        });
        
    };
    };
});

module.exports = router;