const knex = require('../db/knex');
const homepage = require('../controller/homepage');

module.exports = function(app){

  app.get('/home', homepage.getHomePage);

}
