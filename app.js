let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

mongoose.connect('mongodb://localhost/account');
mongoose.Promise = global.Promise;


let Account = require('./models/Account');


app.get('/', (req, res) => {
    Account.create({
        avatar: 'a',
        dateOfRegistration: new Date(),
        login: 'bbbbbbb',
        password: 'a',
    });
    res.json('asd')
});


app.listen(3000, err => err ? console.log(err) : console.log('Server is listening port 3000'));

///