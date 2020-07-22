module.exports.login = function(application, req, res){
    res.render('login', { validacao: {} });
}

module.exports.autenticar = function(application, req, res){
   // res.send('Controller')
    
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('login', { validacao: erros });
        return;
    }

    //res.send('tudo ok para criar a sessão.');

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);
    
}

