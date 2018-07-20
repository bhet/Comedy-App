const knex = require('../db/knex');

module.exports = {
  getComment: function(req, res){
    knex('skits').where('id', req.params.id)
    .then((result)=>{
      console.log("My skit", result[0])
      res.render('skitsComment', {skit: result[0]})
    })

  },


  getComedypage: function(req, res){
    
    res.render('artPostpage')
}

}
