var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var qs = require('querystring');

const careersRoutes = require('./routes/careersRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('query parse', str => {
    return qs.parse(str);
});

app.use('/careers', careersRoutes);

module.exports = app;
