import { model } from 'mongoose';

/**
 * Arquivo:produto.js
 * Author:Ricardo Augusto Barbosa
 * descrição:aqruivo responsavel onde trataremos o modelo da "produto"
 * Data:20/04/218
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 /**
  * Produto
  * 
  * ->Id: int
  * ->Nome: string
  * ->Preço: number
  * ->Descrição: string
  * 
  */

  var ProdutoSchema = new Schema({
    nome : string,
    preco: number,
    descricao: string
  });

  module.exports = mongoose.model('Produto',ProdutoSchema);
  //oi