module.exports.cadastro_usuario = function(application, req, res){
    res.render('cadastro_usuario', { validacao: {}, dadosForm: {}});
}

module.exports.cadastrar_usuario = function(application, req, res){
   // res.send('cadastrar')

   var dadosForm = req.body;

   req.assert('nome', 'Nome deve ser preenchido!').notEmpty();
   req.assert('sobrenome', 'Sobrenome deve ser preenchido!').notEmpty();
   req.assert('data_nascimento', 'Data de nascimento deve ser preenchido!').notEmpty();
   req.assert('sexo', 'Sexo deve ser preenchido!').notEmpty();
   req.assert('usuario', 'Usuario deve ser preenchido!').notEmpty();
   req.assert('senha', 'Senha deve ser preenchido!').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro_usuario', { validacao: erros, dadosForm: dadosForm});
        return;
    } else {

      var connection = application.config.dbConnection;
      var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
  
      UsuariosDAO.inserirUsuario(dadosForm);
  
      res.redirect('cadastro_usuario')
    }

}