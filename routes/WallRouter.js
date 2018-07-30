let Wall = require('../models/Wall');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Wall.find({}, (err, walls) => {
        err ? res.sendStatus(400) : res.json(walls);
    })
});

router.get('/:id', (req, res) => {
    Wall.findById(req.params.id, (err, wall) => {
        err ? res.sendStatus(400) : res.json(wall);
    })
});

router.post('/', (req, res) => {
    Wall.create(req.body, (err, newWall) => {
        err ? res.sendStatus(400) : res.json(newWall);
    })
});

router.put('/:id', (req, res) => {
    Wall.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWall) => {
        err ? res.sendStatus(400) : res.json(updatedWall);
    })
});

router.delete('/:id', (req, res) => {
    Wall.findByIdAndRemove(req.params.id, (err, deletedWall) => {
        err ? res.sendStatus(400) : res.json(deletedWall);
    })
});

module.exports = router;