const knex = require('../db/knex');
const homepage = require('../controller/homepage');
const loginSignup = require('../controller/login-signup');

module.exports = function(app){

  app.get('/home', homepage.getHomePage);

  app.get(`/comment/:skit_id`, ()=>{})

  // route for login and signup action_page

  app.get('/login', loginSignup.getLogin);
  app.get('/signup', loginSignup.getSignup);

  //post request route from  login page that takes to Comedian Personal page.
  //app.post(`/comedian/:id`, loginSignup.createLoginPost)
  app.post(`/comedian`, loginSignup.createLoginPost)

  //router from signup page to singned up individual action_page
  // app.get('/comedian/:id', loginSignup.getComedian);
  // app.post('/comedian/:id', loginSignup.createComedianProfile)

//Protectesd login route and middleware to protected login with authentication.
//get request for comedian personal page
  //app.use(protectlogin);
  //app.get(`/comedian/:artist_id`, loginSignup.protectedLogin)
  app.get(`/comedian`, loginSignup.protectedLogin)

}

// function protectlogin(req, res, next){
//   if(!req.session.comedian){
//     res.redirect('/login')
//   } else{
//     next();
//   }
// }
