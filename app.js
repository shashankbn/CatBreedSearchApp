const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./api/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).json({ status: 'error', message: 'An error occurred' });
});

module.exports = app;
