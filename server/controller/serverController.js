var Claims = require('../models/claims-server');

module.exports.create = function(req, res){
	console.log(req.body);
	console.log(res.body);
	var claimsModel = new Claims(req.body);
	console.log('claimsModel :', claimsModel);
	claimsModel.save(function(err,result){
		res.json(result);
		console.log('Results :', result);
	});
}

module.exports.fetch = function(req, res){
	Claims.find({}, function(err, result){
		res.json(result);
	});
}