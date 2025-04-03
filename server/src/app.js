const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');

const addressRouter = require('./routes/addressRouter');


const advertisementRouter = require('./routes/advertisementRouter');
const categoryRouter = require('./routes/categoryRouter');
const gigaRouter = require('./routes/gigaRouter');
// const likeRouter = require('./routes/likeRouter');


app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

app.use('/api/locations', addressRouter);

app.use('/api/advertisements', advertisementRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/giga', gigaRouter);

// app.use('/api/likes', likeRouter);




module.exports = app;
