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


