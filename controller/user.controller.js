var db = require('../db');
var shortid = require('shortid');

module.exports.get = function (req, res) {
    var id = req.params.id;
    var user = db.get('user').find({ id: id }).value();
    
    res.render('user/view', {
        user: user
    });
}

module.exports.index =  function (req, res) {
    res.render('user/index', {
        users: db.get('user').value()
    });
};
module.exports.postCreate = function (req, res) {
    req.body.id = shortid.generate();
    var errors = []
    if(!req.body.name){
        errors.push('Chưa có tên!!!!')
    }
    if(!req.body.phone){
        errors.push('Chưa có phone!!!!')
    }
    if(errors.length){
        res.render('user/create', {
            errors: errors,
            values: req.body
        })
        return;
    }
    db.get('user').push(req.body).write();
    res.redirect('/user');
};

module.exports.create = function (req, res) {
    res.render('user/create')
};

module.exports.search = function (req, res) {
    var q = req.query.q;
    var arr = db.get('user').value();
    var matchedUsers = arr.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('user/index', {
        users: matchedUsers
    })
};