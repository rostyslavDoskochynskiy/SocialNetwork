let Message = require('../models/Message');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Message.find({}, (err, messages) => {
        err ? res.sendStatus(400) : res.json(messages);
    })
});

router.get('/:id', (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        err ? res.sendStatus(400) : res.json(message);
    })
});

router.post('/', (req, res) => {
    Message.create(req.body, (err, newMessage) => {
        err ? res.sendStatus(400) : res.json(newMessage);
    })
});

router.put('/:id', (req, res) => {
    Message.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMessage) => {
        err ? res.sendStatus(400) : res.json(updatedMessage);
    })
});

router.delete('/:id', (req, res) => {
    Message.findByIdAndRemove(req.params.id, (err, deletedMessage) => {
        err ? res.sendStatus(400) : res.json(deletedMessage);
    })
});

module.exports = router;