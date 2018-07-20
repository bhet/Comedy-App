const knex = require('../db/knex');

module.exports = {
  getComment: function(req, res){
    res.render('skitsComment')
  },

  getComedypage: function(req, res){
    knex('skits').where('id', req.params.id)
    .then((result)=>{
      knex('comments').where()
    })


        res.render('artPostpage', {comment: result, skit: data[0]})

  }
}
