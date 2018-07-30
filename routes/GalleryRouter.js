let Gallery = require('../models/Gallery');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Gallery.find({}, (err, galleries) => {
        err ? res.sendStatus(400) : res.json(galleries);
    })
});

router.get('/:id', (req, res) => {
    Gallery.findById(req.params.id, (err, gallery) => {
        err ? res.sendStatus(400) : res.json(gallery);
    })
});

router.post('/', (req, res) => {
    Gallery.create(req.body, (err, newGallery) => {
        err ? res.sendStatus(400) : res.json(newGallery);
    })
});

router.put('/:id', (req, res) => {
    Gallery.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGallery) => {
        err ? res.sendStatus(400) : res.json(updatedGallery);
    })
});

router.delete('/:id', (req, res) => {
    Gallery.findByIdAndRemove(req.params.id, (err, deletedGallery) => {
        err ? res.sendStatus(400) : res.json(deletedGallery);
    })
});

module.exports = router;