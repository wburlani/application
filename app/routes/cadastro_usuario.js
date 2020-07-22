module.exports = function (application) {
	// body...
	application.get('/cadastro_usuario', function(req, res){
		//res.send('cadastro');
		application.app.controllers.cadastro_usuario.cadastro_usuario(application, req, res);
	});


	application.post('/cadastrar_usuario', function(req, res){
		//res.send('cadastrar');
		application.app.controllers.cadastro_usuario.cadastrar_usuario(application, req, res);
	});

}