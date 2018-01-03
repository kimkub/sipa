var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-Parser');

module.exports = function(){
	var app = express();
	require('../app/routes/index.routes')(app);
	if (process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else{
		app.use(compression);
	}
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	require('../app/routes/index.routes')(app);
	return app;
};