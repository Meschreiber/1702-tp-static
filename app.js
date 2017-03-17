var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
const routes = require('./routes');

var app = express();

// nunjucks
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(err, req, res, next) {
	console.error(err);
	res.status(500);
	res.send(err, err.stack);
});

app.use('/', routes);

app.listen(3000, function(){
	console.log('Listening on 3000');
});
