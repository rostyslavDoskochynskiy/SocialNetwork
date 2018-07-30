let Chat = require('../models/Chat');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Chat.find({}, (err, chats) => {
        err ? res.sendStatus(400) : res.json(chats);
    })
});

router.get('/:id', (req, res) => {
    Chat.findById(req.params.id, (err, chat) => {
        err ? res.sendStatus(400) : res.json(chat);
    })
});

router.post('/', (req, res) => {
    Chat.create(req.body, (err, newChat) => {
        err ? res.sendStatus(400) : res.json(newChat);
    })
});

router.put('/:id', (req, res) => {
    Chat.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedChat) => {
        err ? res.sendStatus(400) : res.json(updatedChat);
    })
});

router.delete('/:id', (req, res) => {
    Chat.findByIdAndRemove(req.params.id, (err, deletedChat) => {
        err ? res.sendStatus(400) : res.json(deletedChat);
    })
});

module.exports = router;