var express = require('express')
var multer  = require('multer')

var upload = multer({ dest: './public/uploads/' })

var router = express.Router();
var validate = require('../validate/user.validate')

var controller = require('../controller/user.controller')

router.get('/', controller.index);

router.get('/cc/:id', controller.get);

router.get('/create', controller.create);

router.post('/create',
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate
);

router.get('/search', controller.search);

module.exports = router;