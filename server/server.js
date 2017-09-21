'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Promise = require('bluebird'); //eslint-disable-line
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const debug = require('debug')('interview:server');
const listRouter = require('./route/list-router.js');


const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/listtest';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

//useMongoClient: true;


app.use(cors());
app.use(morgan('dev'));
app.use(listRouter);


const server = module.exports = app.listen(PORT, () => {
  debug(`server is up: ${PORT}`);
});

server.isRunning = true;
