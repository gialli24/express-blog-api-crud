const express = require("express");
const router = express.Router();

const posts = require('../data/posts');

// index
router.get('/', function (req, res) {
    res.json(posts);
});

// show
router.get('/:id', function (req, res) {

    const post = posts.find(post => post.id === parseInt(req.params.id));

    res.json(post);
});

// store
router.post('/', function (req, res) {
    res.send('Creating post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Update post with id ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modify post with id ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    const idToDelete = parseInt(req.params.id);
    deletedPost = posts.find(p => p.id === idToDelete);
    posts = posts.filter(p => p.id !== idToDelete);

    res.json(deletedPost);
});


module.exports = router;