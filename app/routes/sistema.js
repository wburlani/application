module.exports = function(application){
	application.get('/sistema', function(req, res){
		application.app.controllers.sistema.sistema(application, req, res);
	});
}