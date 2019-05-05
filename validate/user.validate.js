module.exports.postCreate = function (req, res, next) {
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
    next();
};