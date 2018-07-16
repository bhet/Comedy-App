const knex = require('../db/knex');


module.exports = {
  getHomePage: function(req, res){
    res.render('index')
  }
}
