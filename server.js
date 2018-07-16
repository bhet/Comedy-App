
const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

let route_setter = require('./config/router');

route_setter(app);

app.listen(port, function(){
  console.log('Listening on port: ', port)
})
