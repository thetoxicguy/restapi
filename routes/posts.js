// Load express
const express = require('express');
// Load express router
const router = express.Router();

// Load Post model for MongoDB
const Post = require('../models/Post');

// Get back all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().limit(5);
        res.json(posts);
    } catch(err) {
        res.json({message: err});
    }
});

// Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
    });
    //Now save the data in the database and set a promise
    try{
        const savedPost = await post.save();
        // to show the saved data on screen
        res.json(savedPost)
    // in case of error:
    } catch(err) {
        res.json({message: err});
    }
});

// Retrieve a post by id
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({message: err});
    }
});

// Delete a specific post
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err})
    }
});

// Update a post (patch)
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {name: req.body.name} }
            );
        res.json(updatedPost);
    } catch(err) {
        res.json({message: err});
    }
})
// Exporting router
module.exports = router;