var express = require('express');
var expressHandlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');

var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  partialsDir: './views/partials/'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function (req, res) {
  res.render('index', {
    currentPageId: 'homepage',
    title: 'Token Expo',
  });
});

app.listen(process.env.PORT || 3000);
