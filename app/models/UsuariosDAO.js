function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);

            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	//console.log(usuario);
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            //collection.find({usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}});
            collection.find(usuario).toArray(function(err, result){
            	//console.log(result);
            	if(result[0] != undefined){

            		req.session.autorizado = true;
            		req.session.usuario = result[0].usuario;
            		req.session.nome = result[0].nome;
            	}
            	if(req.session.autorizado){
            		res.redirect('sistema');
            	}else{
            		res.render('login', {validacao: {}});
            	}

            });
            mongoclient.close();
        });
    });
}

module.exports = function(){
    return UsuariosDAO;
}