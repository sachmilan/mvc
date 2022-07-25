const router = require('express').Rputer();
const {Post, user, Comment} = require('../../models');
const withAuth = require('../../utils/withAuth');

router.Post('/',withAuth, async(req,res)=>{
    try{
        const createPost = await Post.create({
            PostTitle:req.body.title,
            postContent:req.body.
            post_content,
            user_id:req.body.user_id,
        })
        res.status(200).json({
            message:"Successfully created a post",
            data:createPost
        });
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Error",error:err});
    };
});

router.put('/:id',withAuth,async(req,res)=>{
    try{
        const updatePost = await Post.update(
            {title:req.body.title,
            post_content:req.body.post_content
            },
            {
                where:{
                    id:req.params.id
                }
            });

            if(!updatePost){
                res.status(404).json({message:"No post found with this user Id"});
                return;
            }
            
            res.status(200).json({
                message:"Post updated successfully",
                data:updatePost
            });
        }catch(err){
            res.status(500).json({
                message:"Internal error",
                error:err
            });
        };
});

router.delete('/:id',withAuth,async(req,res)=>
{
    try{
        const deletePost = await Post.destroy({
            where:{
                id:req.params.id
            }
        });

        if(!deletePost){
            res.status(404).json({
                message:"No post found with this user id"
            })
            return;
        }
        res.status(200).json({
            message:"post deleted successfully",
            data:deletePost
        });
    }catch(err){
        res.status(500).json({
            message:"Internal server error",
            error:err
        });
    };
});

module.exports = router;