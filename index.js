var express = require('express');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user.route');

var app = express();
var port = 3000;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index',{
        name: 'aaaa'
    });
})

app.use('/user', userRoutes)


app.listen(port, function () {
    console.log('server listening')
})