module.exports = function(application){
	application.get('/login', function(req, res){
		//res.render('login');
		application.app.controllers.login.login(application, req, res);
	});

	application.post('/autenticar', function(req, res){
		//res.send('Autenticado com sucesso')
		application.app.controllers.login.autenticar(application, req, res);
	});
}