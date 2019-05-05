require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
var port = 3000;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SECRET));

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index',{
        name: 'aaaa'
    });
});

app.use('/user', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen(port, function () {
    console.log('server listening')
});