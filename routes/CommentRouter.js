let Comment = require('../models/Comment');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        err ? res.sendStatus(400) : res.json(comments);
    })
});

router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        err ? res.sendStatus(400) : res.json(comment);
    })
});

router.post('/', (req, res) => {
    Comment.create(req.body, (err, newComment) => {
        err ? res.sendStatus(400) : res.json(newComment);
    })
});

router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment) => {
        err ? res.sendStatus(400) : res.json(updatedComment);
    })
});

router.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, deletedComment) => {
        err ? res.sendStatus(400) : res.json(deletedComment);
    })
});

module.exports = router;