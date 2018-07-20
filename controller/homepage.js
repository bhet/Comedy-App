const knex = require('../db/knex');


module.exports = {
  getHomePage: function(req, res){
    knex('skits').orderBy('id').then((result)=>{
      console.log(result[0]);
      res.render('index', {skits: result})
    })
  },

  // getComment: function(req, res){
  //   res.render('skitsComment')
  // },

  getComedy: function(req, res){
    res.render('home')
  },
}
