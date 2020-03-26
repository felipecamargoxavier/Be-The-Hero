
/**
 *  Rota / Recurso
 *  http://localhost:3333/users
 *      http://localhost:3333 -> rota
 *      users -> recurso
 */

/**
 *  MÉTODOS HTTP:
 * 
 *  GET: BUSCA INFORMACOES DO BACK-END
 *  POST: CRIA INFORMACOES NO BACK-END
 *  PUT: ALTERA INFORMACOES NO BACK-END
 *  DELETE: EXCLUI INFORMACOES DO BACK-END 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parametros enviados na rota apos o simbolo de "?" (Filtros, paginacao)
  *        ex: "http://localhost:3333/users?nome=felipe&idade=23"
  * Route Params: parametro utilizado para identificar recursos
  *                 "http://localhost:3333/users/1" -> users com id = 1
  *                 "app.get('/users/:id', (request, response)"
  * Request Body: corpo da requisicao, utilzado para criar ou alterar recursos
  */

  /**
   * BANCO DE DADOS
   *    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   *    NoSQL: MongoDB, CouchDB, etc   * 
   */

   /**
    *  SQLite
    *       Driver: SELECT * FROM USERS
    *       Query builder: table('users').select('*').where('');
    */

   // importa um pacote
   const express = require('express');
   const cors = require('cors');
   // importa um arquivo
   const routes = require('./routes');  // './' -> mesma pasta | '../' -> volta uma pasta

   const app = express();

   app.use(cors());
   app.listen(3333);
   app.use(express.json());
   app.use(routes);