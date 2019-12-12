/* // Call in installed dependencies
const express = require('express');
// set up express app
const app = express();
// set up port number
const port = 5035;
// set up home route
app.get('/', (request, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, (request, res) => {
  console.log(`Our server is live on ${port}. Yay!`);
}); */
// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import homeRoute from './server/routes/index';

import mainRoutes from './server/routes/main';

//import logger from 'morgan';
// set up dependencies

const app = express();
// set up route
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('process.env.MONGODB')
  .then(()=> {
    
  })
  .catch((error)=> {
    
  });
  mongoose.Promise = global.Promise;
// set up port
const port = 5035;
// set up route
homeRoute(app);
app.use('/api/', mainRoutes);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

// call in the installed dependencies

// set up a wildcard route to catch related endpoints and outputs a response.
app.get('*', (req, res) => {
    res.status(400).json({
      message: 'This is Project Support. Please see documentation for the proper routes.',
    });
  });
app.listen(port);
export default app;