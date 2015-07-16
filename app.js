var express = require('express'),
//    routes  = require('./routes/home.js'),
    load    = require('express-load'),
    app     = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//app.get('/', routes.index);
//app.get('/usuarios', routes.users.index);

load('models')
    .then('controllers')
    .then('routes')
    .into(app);  



app.listen(3000, function(){
  console.log("Ntalk no ar.");
});