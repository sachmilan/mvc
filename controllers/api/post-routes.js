const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.post('/', withAuth, async (req, res) => {
    
    try {
        const createPost = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        })

        res.status(200).json({ 
            message: "Successfully created post",
            data: createPost
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "Internal server error",
            error: err 
        });
    };
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update(
        {
            title: req.body.title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        });

        if (!updatePost) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        res.status(200).json({ 
            message: "Successfully updated post",
            data: updatePost
        });
    } catch (err) {
     
        res.status(500).json({ 
            message: "Internal server error",
            error: err 
        });

    }
});

  router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        
        if (!deletePost) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        res.status(200).json({ 
            message: "Successfully deleted post",
            data: deletePost
        });

    } catch (err) {

        res.status(500).json({ 
            message: "Internal server error",
            error: err 
        });
    };
});

module.exports = router;