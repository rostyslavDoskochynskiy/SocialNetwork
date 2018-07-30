let Like = require('../models/Like');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Like.find({}, (err, likes) => {
        err ? res.sendStatus(400) : res.json(likes);
    })
});

router.get('/:id', (req, res) => {
    Like.findById(req.params.id, (err, like) => {
        err ? res.sendStatus(400) : res.json(like);
    })
});

router.post('/', (req, res) => {
    Like.create(req.body, (err, newLike) => {
        err ? res.sendStatus(400) : res.json(newLike);
    })
});

router.put('/:id', (req, res) => {
    Like.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLike) => {
        err ? res.sendStatus(400) : res.json(updatedLike);
    })
});

router.delete('/:id', (req, res) => {
    Like.findByIdAndRemove(req.params.id, (err, deletedLike) => {
        err ? res.sendStatus(400) : res.json(deletedLike);
    })
});

module.exports = router;