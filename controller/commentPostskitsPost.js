const knex = require('../db/knex');

module.exports = {
  getComment: function(req, res){
    res.render('skitsComment')
  },

  getComedypage: function(req, res){
    knex('comments').where('skit_id', req.body.id)
    .then((result)=>{
      res.render('artPostpage', {comment: result})
    })

  }
}
