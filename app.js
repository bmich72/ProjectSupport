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
import dotenv from 'dotenv';
require('dotenv').config();
//import logger from 'morgan';
// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('process.env.MONGODB')
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
// call in the installed dependencies

import logger from 'morgan';
import mainRoutes from './server/routes/main';

// set up route
app.use('/api/', mainRoutes);