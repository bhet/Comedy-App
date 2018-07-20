const knex = require('../db/knex');

module.exports = {
  getComment: function(req, res){
    knex('skits').where('id', req.params.id)
    .then((result)=>{
      knex('comments').where('skit_id', req.params.id)
      .then((data)=>{
        console.log("My skit", result[0])
        res.render('skitsComment', {skit: result[0], comment: data})
      })
    })
  },

  postComment: function(req, res){
    knex('comments').insert({
      comment: req.body.comment,
      skit_id: req.params.skit_id
    }).then(()=>{
      res.redirect(`/comment/${req.params.skit_id}`)
    })
  },


  getComedypage: function(req, res){

    res.render('artPostpage')
},

postSkit: function(req, res){
  knex('skits').insert({
    title: req.body.title,
    video_url: req.body.video_url,
    artist_id: req.session.comedian.artist_id
  }).then(()=>{
    res.redirect('/comedian')
  })
}

}
