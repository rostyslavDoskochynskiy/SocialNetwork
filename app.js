let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let AccountRouter = require('./routes/AccountRouter');
let ChatRouter = require('./routes/ChatRouter');
let CommentRouter = require('./routes/CommentRouter');
let LikeRouter = require('./routes/LikeRouter');
let GalleryRouter = require('./routes/GalleryRouter');
let MessageRouter = require('./routes/MessageRouter');
let PostRouter = require('./routes/PostRouter');
let WallRouter = require('./routes/WallRouter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/socialka');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('connection...')
});

app.use('/account', AccountRouter);
app.use('/chat', ChatRouter);
app.use('/comment', CommentRouter);
app.use('/like', LikeRouter);
app.use('/gallery', GalleryRouter);
app.use('/message', MessageRouter);
app.use('/post', PostRouter);
app.use('/wall', WallRouter);

app.listen(3000, err => err ? console.log(err) : console.log('Server is listening port 3000'));