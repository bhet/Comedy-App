
const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/session')(app);

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

let route_setter = require('./config/router');

route_setter(app);

app.listen(port, function(){
  console.log('Listening on port: ', port)
})
