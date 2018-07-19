const knex = require('../db/knex');


module.exports = {
  getLogin: function(req, res){
    res.render('login')
  },



  getSignup: function(req, res){
    res.render('signup')
  },

  protectedLogin: function(req, res){
    knex('skits').where('artist_id', req.session.comedian.id)
    .then((result)=>{
      res.render('comedianPersonalpage', {skits: result, comedian: req.session.comedian})
    })
  },

  createLoginPost: function(req, res){
    knex('artists').where('email', req.body.email)
    .then((result)=>{
      let comedian = result[0];
      console.log("Comedian ", comedian);
      if(comedian.password === req.body.password){
        req.session.comedian = comedian;
        req.session.save(()=>{
          res.redirect(`/comedian`)
        })
      }else{
        res.redirect('/login')
      }
    })
  },



  // createComedianProfile: function(req, res){
  //   knex('skits').insert({
  //     fullname: req.body.fullname,
  //     age: req.body.age,
  //     city: req.body.city,
  //     bio: req.body.bio,
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(()=>{
  //     res.redirect(`/comedian/${}`)
  //   })
  // },
  //
  // getComedian: function(req,res){
  //   knex(skits).where('id', req.params.id).then((result)=>{
  //     res.render('comedianSignup', {comedian: result})
  //   })
  // }



}
