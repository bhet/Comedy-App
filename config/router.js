const knex = require('../db/knex');
const homepage = require('../controller/homepage');
const loginSignup = require('../controller/login-signup');
const commentSkits = require('../controller/commentPostskitsPost');

module.exports = function(app){

  app.get('/home', homepage.getHomePage);

// route for comment page, where anomyous can post comment.
  app.get(`/comment/:id`, commentSkits.getComment);
  app.post('/skit/comment/:skit_id', commentSkits.postComment);


  //route for website information: what is about and why it exist and for whom
  app.get('/comedy', homepage.getComedy); // About us


  // route for login and signup action_page

  app.get('/login', loginSignup.getLogin);
  app.get('/signup', loginSignup.getSignup);
  app.post(`/comedian`, loginSignup.createLoginPost);

  //post request route from  login page that takes to Comedian Personal page.
  app.use(protectlogin);
  app.get(`/comedian`, loginSignup.protectedLogin);


  //post router from signup page to singned up individual action_page

  app.post('/register/comedian', loginSignup.createComedianProfile)

  app.get('/skitpost', commentSkits.getComedypage);
  app.post('/comedian/skit', commentSkits.postSkit);
}

function protectlogin(req, res, next){
  if(!req.session.comedian){
    res.redirect('/login')
  } else{
    next();
  }
}
