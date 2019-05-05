var express = require('express')
var router = express.Router();
var validate = require('../validate/user.validate')
var controller = require('../controller/user.controller')


router.get('/', controller.index);

router.get('/cc/:id', controller.get);

router.get('/create', controller.create);

router.post('/create', validate.postCreate, controller.postCreate);

router.get('/search', controller.search);

router.get('/cookie', function (req, res, next) {
    res.cookie('ffff', 456);
    res.send('hello')
});

module.exports = router;