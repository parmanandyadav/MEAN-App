var Claims = require('../models/claims-server');

module.exports.create = function(req, res){
    var claimsModel = new Claims(req.body);
    claimsModel.save(function(err,result){
        res.json(result);
    });
}
//some random text

module.exports.fetch = function(req, res){
    Claims.find({}, function(err, result){
        res.json(result);
    });
}