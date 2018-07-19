const knex = require('../db/knex');


module.exports = {
  getHomePage: function(req, res){
    knex('skits').then((result)=>{
      console.log(result[0]);
      res.render('index', {skits: result})
    })
  },

  getComment: function(req, res){
    res.render('skitsComment')
  }
}
