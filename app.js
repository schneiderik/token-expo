var express = require('express');
var expressHandlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');

var app = express();

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  partialsDir: './views/partials/',
  helpers: {
    'eachRandom': function(context, options) {
      var buffer = '';
      var i = 0;
      var randomized = shuffle(context).slice(0, 12);

      randomized.forEach(function (item) {
        if (options.data) {
          options.data.index = i;
        }

        buffer += options.fn(item);

        i++;
      });

      return buffer;
    }
  }
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function (req, res) {
  res.render('index', {
    currentPageId: 'homepage',
    title: 'Token Expo',
    tokens: [
      "1-christine.png",
      "1-shea.png",
      "1-erik.png",
      "1-armani.png",
      "1-adrian.png",
      "2-lane.png",
      "2-javier.png",
      "2-bianca.png",
      "2-john.png",
      "2-zelda.png",
      "3-sage.png",
      "3-jb.png",
      "3-yewon.png",
      "4-jourdon.png",
      "4-victoria.png",
      "4-ali.png",
      "4-gabi.png",
      "4-henry.png",
      "5-melissa.png",
      "5-max.png",
      "5-aim.png"
    ]
  });
});

app.listen(process.env.PORT || 3000);
