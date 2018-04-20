/**
 * 
 * Arquivo:server.js
 * Descrição:
 * Author: Ricardo Augusto Barbosa
 * Data de criação:19/04/2018
 * 
 */

 //configurar o Setup

 //chamadas dos pacotes 
 var express = require('express');
 var app = express();
 var bodyParse = require('body-parser');
 var mogoose = require('mongoose');
 var Produto = require('./app/models/produto');


//URI: do mlba
 mongoose.connect('mongodb://<rAugusto>:<admin>@ds056789.mlab.com:56789/node-crud-api');

// maneira mongoDB
// mogoose.connect('mongodb://localhost/node-crud-api');


//Configuração da variavel app para usar o "bodyParser()"
app.use(bodyParse.urlencoded({extended: true }));
app.use(bodyParse.json());

//Definição da Porta onde será executado nossa api
var port = process.env.port || 8000;

//Criando uma instancia das routas via Express
var router = express.Router();

// criando uma rota de exemplo
router.get('/',function(req,res){
    res.json({message:'Beleza! Bem Vindo(a) a nossa loja xyz'});
});

//definindo um padrao das rotas prefixadas: "/api"
app.use('/api',router);

//Iniciando a Aplicação(Servidor)
app.listen(port);
console.log("Iniciando a app na porta" + port);


