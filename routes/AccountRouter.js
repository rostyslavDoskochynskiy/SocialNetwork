let Account = require('../models/Account');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    Account.find({}, (err, accounts) => {
        err ? res.sendStatus(400) : res.json(accounts);
    })
});

router.get('/:id', (req, res) => {
    Account.findById(req.params.id, (err, account) => {
        err ? res.sendStatus(400) : res.json(account);
    })
});

router.post('/', (req, res) => {
    Account.create(req.body, (err, newAccount) => {
        err ? res.sendStatus(400) : res.json(newAccount);
    })
});

router.put('/:id', (req, res) => {
    Account.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAccount) => {
        err ? res.sendStatus(400) : res.json(updatedAccount);
    })
});

router.delete('/:id', (req, res) => {
    Account.findByIdAndRemove(req.params.id, (err, deletedAccount) => {
        err ? res.sendStatus(400) : res.json(deletedAccount);
    })
});

module.exports = router;