let Post = require('../models/Post');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        err ? res.sendStatus(400) : res.json(posts);
    })
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        err ? res.sendStatus(400) : res.json(post);
    })
});

router.post('/', (req, res) => {
    Post.create(req.body, (err, newPost) => {
        err ? res.sendStatus(400) : res.json(newPost);
    })
});

router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
        err ? res.sendStatus(400) : res.json(updatedPost);
    })
});

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        err ? res.sendStatus(400) : res.json(deletedPost);
    })
});

module.exports = router;