var db = require('../db');
var md5 = require('md5');

module.exports.login =  function (req, res) {
    res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('user').find({email : email}).value();

    if(!user){
        res.render('auth/login', {
            errors: [
                'Tài khoản không tồn tại!!!!'
            ],
            values : req.body
        });
        return;
    }
    var hashedPassword = md5(password);
    if(user.password !== hashedPassword){
        res.render('auth/login', {
            errors: [
                'Mật khẩu sai!!!!!'
            ],
            values : req.body
        });
        return;
    }
    res.cookie('userId', user.id)
    res.redirect('/user');
}